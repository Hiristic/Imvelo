using Imvelo_zendev.Api.Exceptions;
using Imvelo_zendev.Api.Services.Auth;
using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Domain.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Imvelo_zendev.Api.Controllers
{
    [Route("api/auth/[action]")]
    public class AuthController : Controller
    {
        private readonly Dictionary<int, string> _authMessage = new Dictionary<int, string>
        {
            {801, "Authentication success."},
            {802, "Your account has been locked out."},
            {803, "You are not allowed to log in to this service."},
            {804, "Two Factor Authentication is required to log in to this service."},
            {805, "Wrong email and / or password."},
            {806, "Registration success."},
            {807, "Registration failure."},
            {808, "Authorized."}
        };

        private readonly SignInManager<User> _signInManager;

        private readonly TokenGenerator _tokenGenerator;

        private readonly UserManager<User> _userManager;

        /// <summary>
        ///     Class constructor.
        /// </summary>
        /// <param name="signInManager"></param>
        /// <param name="tokenGenerator"></param>
        /// <param name="userManager"></param>
        public AuthController(
            SignInManager<User> signInManager,
            TokenGenerator tokenGenerator,
            UserManager<User> userManager
        )
        {
            _signInManager = signInManager;
            _tokenGenerator = tokenGenerator;
            _userManager = userManager;
        }

        /// <summary>
        ///     Authenticate a user.
        /// </summary>
        /// <param name="authenticationRequest"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<object> Login([FromBody] LoginRequest authenticationRequest)
        {
            var status = 801;
            var result = await _signInManager.PasswordSignInAsync(
                authenticationRequest.Username,
                authenticationRequest.Password,
                false,
                true
            );

            if (result.Succeeded)
            {
                var user = _userManager.Users.SingleOrDefault(record => record.UserName == authenticationRequest.Username);

                return new
                {
                    Message = _authMessage[status],
                    Status = status,
                    Data = new
                    {
                        Token = _tokenGenerator.GenerateToken(user)
                    }
                };
            }

            if (result.IsLockedOut)
                status = 802;
            else if (result.IsNotAllowed)
                status = 803;
            else if (result.RequiresTwoFactor)
                status = 804;
            else
                status = 805;

            throw new HttpException(HttpStatusCode.BadRequest)
            {
                Content = JsonConvert.SerializeObject(new
                {
                    Message = _authMessage[status],
                    Status = status
                })
            };
        }

        /// <summary>
        ///     Register new user.
        /// </summary>
        /// <param name="registrationRequest"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<object> Register([FromBody] RegistrationRequest registrationRequest)
        {
            var status = 806;
            var user = new User { UserName = registrationRequest.UserName, Email = registrationRequest.Email, 
                Firstname = registrationRequest.FirstName, Lastname = registrationRequest.LastName };
            user.Id = Guid.NewGuid().ToString();
            user.IsDeleted = false;
            var result = await _userManager.CreateAsync(user, registrationRequest.Password);

            if (!result.Succeeded)
            {
                status = 807;

                throw new HttpException(HttpStatusCode.BadRequest)
                {
                    Content = JsonConvert.SerializeObject(new
                    {
                        Message = _authMessage[status],
                        Status = status,
                        result.Errors
                    })
                };
            }

            await _signInManager.SignInAsync(user, false);

            var _token = _tokenGenerator.GenerateToken(user);

            return new
            {
                Message = "test",
                Status = status,
                Data = new
                {
                    Token = _token,
                    User = user
                }
            };
        }

        /// <summary>
        ///     Get current user.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> Authorize()
        {
            return new
            {
                Message = _authMessage[808],
                Status = 808,
                Data = new
                {
                    User = await _userManager.GetUserAsync(User)
                }
            };
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> RefreshToken()
        {
            return new
            {
                Message = _authMessage[808],
                Status = 808,
                Data = new
                {
                    Token = _tokenGenerator.GenerateToken(await _userManager.GetUserAsync(User))
                }
            };
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<Object> Logout()
        {
            await _signInManager.SignOutAsync();
            return true;
        }
    }
}

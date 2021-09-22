using Imvelo_zendev.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Api.Services.Auth
{
    public class SecurityTokenInvalidUserException : SecurityTokenException
    {
        public SecurityTokenInvalidUserException(string message) : base(message)
        {
        }
    }

    public class SecurityTokenValidator : JwtSecurityTokenHandler
    {
        /// <summary>
        ///     User Manager.
        /// </summary>
        private readonly UserManager<User> _userManager;

        /// <inheritdoc />
        /// <summary>
        ///     Class Constructor.
        /// </summary>
        /// <param name="userManager"></param>
        public SecurityTokenValidator(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        /// <inheritdoc />
        public override ClaimsPrincipal ValidateToken(string plainToken,
            TokenValidationParameters tokenValidationParameter, out SecurityToken securityToken)
        {
            var claimsPrincipal = base.ValidateToken(plainToken, tokenValidationParameter, out securityToken);

            if (Task.Run<User>(
                    async () => await _userManager.GetUserAsync(claimsPrincipal)
                ).Result == null
            )
            {
                /*throw LogHelper.LogExceptionMessage(
                    new SecurityTokenInvalidUserException("IDX10800: Unable to obtain user."));*/
            }

            return claimsPrincipal;
        }
    }
}

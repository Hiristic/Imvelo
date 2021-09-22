using AutoMapper;
using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.User;
using Imvelo_zendev.Application.Filters;
using Imvelo_zendev.Application.Interfaces;
using Imvelo_zendev.Domain.Entities;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Imvelo_zendev.Infrastructure.Context;
using Imvelo_zendev.Application.Infrastructure;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Imvelo_zendev.Application.DTOs.Auth;

namespace Imvelo_zendev.Application.Services
{
    public class UserService : IUserService
    {
        protected DatabaseContext _dbContext;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public UserService(IMapper mapper, DatabaseContext dbContext, UserManager<User> userManager)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
        }

        public async Task<ResponseMessage<PaginatedList<GetUserDTO>>> GetAllUsers(GetUsersFilter filter)
        {
            ResponseMessage<PaginatedList<GetUserDTO>> response = new ResponseMessage<PaginatedList<GetUserDTO>>();

            var usersList = _dbContext.Set<User>().AsNoTracking().Where(u => u.IsDeleted == false).AsQueryable();
            
            response.Result = await _mapper.ProjectTo<GetUserDTO>(usersList).ToPaginatedListAsync(filter.CurrentPage, filter.PageSize);
            response.Succeeded = true;
            return response;
        }

        public async Task<ResponseMessage<GetUserDTO>> GetUserById(string id)
        {
            
            ResponseMessage<GetUserDTO> response = new ResponseMessage<GetUserDTO>();
            var user = await _dbContext.Set<User>().AsNoTracking().FirstOrDefaultAsync(u => u.Id == id && u.IsDeleted == false);            
            response.Result = _mapper.Map<GetUserDTO>(user);
            response.Succeeded = true;
            return response;
        }

        //public async Task<ResponseMessage<GetUserDTO>> CreateUser(InsertUserDto user)
        //{
        //    ResponseMessage<GetUserDTO> response = new ResponseMessage<GetUserDTO>();
        //    var entity = _mapper.Map<User>(user);
        //    entity.Id = Guid.NewGuid().ToString();
        //    entity.IsDeleted = false;
        //    var result = await _userManager.CreateAsync(entity, user.Password);
        //    if (result.Succeeded)
        //    {
        //        response.Result = _mapper.Map<GetUserDTO>(entity);                
        //    }
        //    else
        //    {
        //        response.Errors = new List<string>();
        //        foreach (var error in result.Errors)
        //        {
        //            response.Errors.Add(error.Description);
        //        }
        //    }
        //    response.Succeeded = result.Succeeded;

        //    return response;
        //}

        public async Task<ResponseMessage<GetUserDTO>> UpdateUser(string id, InsertUpdateUserRequest updatedUser)
        {
            ResponseMessage<GetUserDTO> response = new ResponseMessage<GetUserDTO>();

            var result = _userManager.FindByIdAsync(id);
            if (!result.IsCompletedSuccessfully)
            {
                response.Succeeded = false;
                response.Errors = new List<string>() { result.Exception.InnerExceptions.ToString() };
                return response;
            }
            var user = result.Result;
            if (result.Result == null || result.Result.IsDeleted == true)
            {
                response.Succeeded = false;
                response.Errors = new List<string>() { "User does not exist" };
                return response;
            }

            user.Firstname = updatedUser.Firstname;
            user.Lastname = updatedUser.Lastname;
            user.Email = updatedUser.Email;
            user.UserName = updatedUser.Username;
            
            await _userManager.UpdateAsync(user);

            response.Succeeded = true;
            response.Result = _mapper.Map<GetUserDTO>(user);

            return response;
        }

        public async Task<ResponseMessage<bool>> DeleteUser(string id)
        {
            ResponseMessage<bool> response = new ResponseMessage<bool>();
            var entity = _userManager.FindByIdAsync(id).Result;
            
            if (entity != null)
            {
                entity.IsDeleted = true;
                await _userManager.UpdateAsync(entity);
                response.Result = true;
                response.Succeeded = true;
            }
            else
            {
                response.Result = false;
                response.Succeeded = false;
            }

            return response;
        }

        public async Task<ResponseMessage<GetUserDTO>> UpdateUserClaims(string userId, UserClaimsUpdateRequest claims)
        {
            ResponseMessage<GetUserDTO> response = new ResponseMessage<GetUserDTO>();

            User user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                response.Succeeded = false;
                return response;
            }

            var userClaims = await _userManager.GetClaimsAsync(user);

            List<Claim> claimList = new List<Claim>();

            response.Succeeded = true;

            foreach (var item in claims.Claims)
            {
                var userClaim = userClaims.Where(x => x.Type == item.Type).FirstOrDefault();
                if(userClaim != null && userClaim.Value == "0")
                {
                    var res = await _userManager.RemoveClaimAsync(user, userClaim);
                    if(res.Succeeded == false)
                    {
                        response.Succeeded = false;
                        response.Errors = res.Errors.Select(x => x.Description).ToList();
                    }
                    userClaim = null;
                }
                if(item.Value == "1")
                {
                    if(userClaim == null)
                    {
                        var res = await _userManager.AddClaimAsync(user, new Claim(item.Type, item.Value));
                        if (res.Succeeded == false)
                        {
                            response.Succeeded = false;
                            response.Errors = res.Errors.Select(x => x.Description).ToList();
                        }
                    }
                }
                else if (item.Value == "0")
                {
                    if(userClaim != null && userClaim.Value == "1")
                    {
                        var res = await _userManager.RemoveClaimAsync(user, userClaim);
                        if (res.Succeeded == false)
                        {
                            response.Succeeded = false;
                            response.Errors = res.Errors.Select(x => x.Description).ToList(); 
                        }
                    }
                }
            }

            return response;
        }
    }
}

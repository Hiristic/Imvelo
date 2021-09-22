using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.DTOs.User;
using Imvelo_zendev.Application.Filters;
using Imvelo_zendev.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.Interfaces
{
    public interface IUserService
    {
        public Task<ResponseMessage<PaginatedList<GetUserDTO>>> GetAllUsers(GetUsersFilter filter);

        public Task<ResponseMessage<GetUserDTO>> GetUserById(string id);
        
        public Task<ResponseMessage<GetUserDTO>> UpdateUserClaims(string userId, UserClaimsUpdateRequest claims);

        public Task<ResponseMessage<GetUserDTO>> UpdateUser(string id, InsertUpdateUserRequest updatedUser);

        public Task<ResponseMessage<bool>> DeleteUser(string id);
    }
}

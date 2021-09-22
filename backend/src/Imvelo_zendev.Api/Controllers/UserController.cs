using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.DTOs.User;
using Imvelo_zendev.Application.Filters;
using Imvelo_zendev.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Imvelo_zendev.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet]
        public async Task<ActionResult<List<GetUserDTO>>> GetUsers([FromQuery] GetUsersFilter filter)
        {
            var response = await _userService.GetAllUsers(filter);
            
            if(response.Succeeded)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
            
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(404)]
        [ProducesResponseType(typeof(GetUserDTO), 200)]
        public async Task<ActionResult<GetUserDTO>> GetUserById(string id)
        {
            var response = await _userService.GetUserById(id);
            if (response.Result == null || !response.Succeeded)
            {
                return NotFound(response);
            }
            else
            {
                return Ok(response);
            }
        }

        //[HttpPost]
        //public async Task<ActionResult<GetUserDTO>> Create([FromBody] InsertUserDto dto)
        //{
        //    var response = await _userService.CreateUser(dto);

        //    if (response.Succeeded)
        //    {
        //        return CreatedAtAction(nameof(GetUserById), new { id = response.Result.Id }, response.Result);
        //    }
        //    else
        //    {
        //        return BadRequest(response);
        //    }

        //}

        [HttpPut("{id}")]
        [Authorize(Policy = "UserManagmentOnly")]
        public async Task<ActionResult<GetUserDTO>> Update(string id, [FromBody] InsertUpdateUserRequest updatedUser)
        {

            var response = await _userService.UpdateUser(id, updatedUser);

            if (response.Succeeded)
            {
                return Ok(response);
            }
            return NotFound(response);
        }

        [HttpPut("UpdateUserClaims/{id}")]
        [Authorize(Policy = "UserManagmentOnly")]
        public async Task<ActionResult<GetUserDTO>> UpdateUserClaims(string id, [FromBody] UserClaimsUpdateRequest claims)
        {

            var response = await _userService.UpdateUserClaims(id, claims);

            if (response.Succeeded)
            {
                return Ok(response);
            }
            return NotFound(response);
        }

        [HttpDelete]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [Route("{id}")]
        [Authorize(Policy = "UserManagmentOnly")]
        public async Task<ActionResult> Delete(string id)
        {

            var response = await _userService.DeleteUser(id);
            if (response.Succeeded)
            {
                return Ok(response);
            }
            return NotFound(response);

        }
    }
}

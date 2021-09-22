using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.DTOs.Department;
using Imvelo_zendev.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Imvelo_zendev.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpGet]
        public async Task<ActionResult<List<GetDepartmentDTO>>> GetDepartments()
        {
            var response = await _departmentService.GetAllDepartments();

            if (response.Succeeded)
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
        [ProducesResponseType(typeof(GetDepartmentDTO), 200)]
        public async Task<ActionResult<GetDepartmentDTO>> GetDepartmentById(long id)
        {
            var response = await _departmentService.GetDepartmentById(id);
            if (response.Result == null || !response.Succeeded)
            {
                return NotFound(response);
            }
            else
            {
                return Ok(response);
            }
        }
        [HttpPost]
        [Authorize(Policy = "OrganizationManagmentOnly")]
        public async Task<ActionResult<GetDepartmentDTO>> Create([FromBody] InsertDepartmentRequest dto)
        {
            var response = await _departmentService.CreateDepartment(dto);

            if (response.Succeeded)
            {
                return new ObjectResult(response) { StatusCode = StatusCodes.Status201Created };
            }
            else
            {
                return BadRequest(response);
            }

        }
        [HttpPut("{id}")]
        [Authorize(Policy = "OrganizationManagmentOnly")]
        public async Task<ActionResult<GetDepartmentDTO>> Update(long id, [FromBody] UpdateDepartmentRequest dto)
        {

            var response = await _departmentService.UpdateDepartment(id, dto);

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
        [Authorize(Policy = "OrganizationManagmentOnly")]
        public async Task<ActionResult> Delete(long id)
        {

            var response = await _departmentService.DeleteDepartment(id);
            if (response.Succeeded)
            {
                return Ok(response);
            }
            return NotFound(response);

        }
    }
}

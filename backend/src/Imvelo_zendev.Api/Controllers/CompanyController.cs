using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.DTOs.Company;
using Imvelo_zendev.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imvelo_zendev.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;
        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(404)]
        [ProducesResponseType(typeof(GetCompanyDTO), 200)]        
        public async Task<ActionResult<GetCompanyDTO>> GetCompanyById(long id)
        {
            var response = await _companyService.GetCompanyById(id);
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
        [Authorize(Policy = "CompanyManagmentOnly")]
        public async Task<ActionResult<GetCompanyDTO>> Create([FromBody] InsertCompanyRequest dto)
        {
            var response = await _companyService.CreateCompany(dto);

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
        [Authorize(Policy = "CompanyManagmentOnly")]
        public async Task<ActionResult<GetCompanyDTO>> Update(long id, [FromBody] InsertCompanyRequest dto)
        {

            var response = await _companyService.UpdateCompany(id, dto);

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
        [Authorize(Policy = "CompanyManagmentOnly")]
        public async Task<ActionResult> Delete(long id)
        {

            var response = await _companyService.DeleteCompany(id);
            if (response.Result)
            {
                return Ok(response);
            }
            return NotFound(response);

        }
    }
}

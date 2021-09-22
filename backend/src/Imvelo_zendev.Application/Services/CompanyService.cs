using AutoMapper;
using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.Company;
using Imvelo_zendev.Application.Infrastructure;
using Imvelo_zendev.Application.Interfaces;
using Imvelo_zendev.Domain.Entities;
using Imvelo_zendev.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.Services
{
    public class CompanyService : ICompanyService
    {
        protected DatabaseContext _dbContext;
        private readonly IMapper _mapper;

        public CompanyService(IMapper mapper, DatabaseContext dbContext)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));            
        }

        public Task<ResponseMessage<PaginatedList<GetCompanyDTO>>> GetAllCompanies()
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseMessage<GetCompanyDTO>> GetCompanyById(long id)
        {
            ResponseMessage<GetCompanyDTO> response = new ResponseMessage<GetCompanyDTO>();
            var company = await _dbContext.Set<Company>().AsNoTracking().FirstOrDefaultAsync(c => c.Id == id && c.IsDeleted == false);            
            response.Result = _mapper.Map<GetCompanyDTO>(company);
            response.Succeeded = true;
            return response;
        }

        public async Task<ResponseMessage<GetCompanyDTO>> CreateCompany(InsertCompanyRequest company)
        {
            ResponseMessage<GetCompanyDTO> response = new ResponseMessage<GetCompanyDTO>();

            Company insertCompany = _mapper.Map<Company>(company);
            insertCompany.IsDeleted = false;
            _dbContext.Set<Company>().Add(insertCompany);
            await _dbContext.SaveChangesAsync();

            response.Succeeded = true;
            response.Result = _mapper.Map<GetCompanyDTO>(insertCompany);

            return response;
        }

        public async Task<ResponseMessage<GetCompanyDTO>> UpdateCompany(long id, InsertCompanyRequest updatedCompany)
        {
            ResponseMessage<GetCompanyDTO> response = new ResponseMessage<GetCompanyDTO>();

            Company inserted = _mapper.Map<Company>(updatedCompany);
            inserted.IsDeleted = false;

            var company = _dbContext.Set<Company>().AsNoTracking().FirstOrDefaultAsync(d => d.Id == id && d.IsDeleted == false);
            if (company.Result == null)
            {
                response.Succeeded = false;
                response.Errors = new List<string>() { "Company does not exist" };
                return response;
            }

            _dbContext.Set<Company>().Update(inserted);
            await _dbContext.SaveChangesAsync();

            response.Succeeded = true;
            response.Result = _mapper.Map<GetCompanyDTO>(inserted);

            return response;
        }

        public async Task<ResponseMessage<bool>> DeleteCompany(long id)
        {
            ResponseMessage<bool> response = new ResponseMessage<bool>();

            var entity = await _dbContext.Set<Company>().AsNoTracking().FirstOrDefaultAsync(c => c.Id == id && c.IsDeleted == false);
            if (entity != null)
            {
                entity.IsDeleted = true;
                _dbContext.Set<Company>().Update(entity);                
                await _dbContext.SaveChangesAsync();
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
    }
}

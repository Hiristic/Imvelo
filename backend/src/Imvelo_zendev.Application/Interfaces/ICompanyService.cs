using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.Company;
using Imvelo_zendev.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.Interfaces
{
    public interface ICompanyService
    {
        public Task<ResponseMessage<PaginatedList<GetCompanyDTO>>> GetAllCompanies();

        public Task<ResponseMessage<GetCompanyDTO>> GetCompanyById(long id);

        public Task<ResponseMessage<GetCompanyDTO>> CreateCompany(InsertCompanyRequest company);

        public Task<ResponseMessage<GetCompanyDTO>> UpdateCompany(long id, InsertCompanyRequest updatedCompany);

        public Task<ResponseMessage<bool>> DeleteCompany(long id);
    }
}

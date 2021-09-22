using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.Department;
using Imvelo_zendev.Application.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.Interfaces
{
    public interface IDepartmentService
    {
        public Task<ResponseMessage<List<GetDepartmentDTO>>> GetAllDepartments();

        public Task<ResponseMessage<GetDepartmentDTO>> GetDepartmentById(long id);

        public Task<ResponseMessage<GetDepartmentDTO>> CreateDepartment(InsertDepartmentRequest department);

        public Task<ResponseMessage<GetDepartmentDTO>> UpdateDepartment(long id, UpdateDepartmentRequest updatedDepartment);

        public Task<ResponseMessage<bool>> DeleteDepartment(long id);
    }
}

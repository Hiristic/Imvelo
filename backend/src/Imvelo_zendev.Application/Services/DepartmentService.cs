using AutoMapper;
using Imvelo_zendev.Application.DTOs;
using Imvelo_zendev.Application.DTOs.Department;
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
    public class DepartmentService : IDepartmentService
    {
        protected DatabaseContext _dbContext;
        private readonly IMapper _mapper;
        public ICompanyService _companyService;

        public DepartmentService(IMapper mapper, DatabaseContext dbContext, ICompanyService companyService)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _companyService = companyService ?? throw new ArgumentNullException(nameof(companyService));
        }

        public async Task<ResponseMessage<List<GetDepartmentDTO>>> GetAllDepartments()
        {
            ResponseMessage<List<GetDepartmentDTO>> response = new ResponseMessage<List<GetDepartmentDTO>>();
            
            long companyid = 1;
            try
            {
                var departments = await _dbContext.Set<Department>().AsNoTracking().Where(d => d.IsDeleted == false && d.CompanyId == companyid).ToListAsync();

                response.Result = new List<GetDepartmentDTO>();
                foreach (var dep in departments)
                {
                    GetDepartmentDTO departmentDto = new GetDepartmentDTO();

                    departmentDto.Id = dep.Id;
                    departmentDto.Name = dep.Name;
                    if (dep.ParentDepartmentId == null)
                    {
                        departmentDto.IsRoot = true;
                    }
                    else
                    {
                        departmentDto.IsRoot = false;
                    }
                    int Count = 0;
                    departmentDto.Children = new List<long>();
                    foreach (var depp in departments)
                    {
                        if (depp.ParentDepartmentId == dep.Id)
                        {
                            Count++;
                            departmentDto.Children.Add(depp.Id);
                        }
                    }
                    departmentDto.ProductCount = Count;
                    response.Result.Add(departmentDto);
                }


                response.Succeeded = true;
            }
            catch (Exception e)
            {
                response.Succeeded = false;
                response.Errors = new List<string>();
                response.Errors.Add(e.Message);

                return response;
            }            

            return response;
        }

        public async Task<ResponseMessage<GetDepartmentDTO>> GetDepartmentById(long id)
        {
            ResponseMessage<GetDepartmentDTO> response = new ResponseMessage<GetDepartmentDTO>();

            try
            {
                var department = await _dbContext.Set<Department>().AsNoTracking().FirstOrDefaultAsync(d => d.Id == id && d.IsDeleted == false);
                response.Result = _mapper.Map<GetDepartmentDTO>(department);
                response.Succeeded = true;
            }
            catch (Exception e)
            {
                response.Succeeded = false;
                response.Errors = new List<string>();
                response.Errors.Add(e.Message);

                return response;
            }

            return response;
        }

        public async Task<ResponseMessage<GetDepartmentDTO>> CreateDepartment(InsertDepartmentRequest department)
        {
            ResponseMessage<GetDepartmentDTO> response = new ResponseMessage<GetDepartmentDTO>();

            Department inserted = _mapper.Map<Department>(department);
            inserted.IsDeleted = false;
            
            var company = _companyService.GetCompanyById(department.CompanyId).Result;
            if(company.Result == null)
            {
                response.Succeeded = false;
                response.Errors = new List<string>() { "Company does not exist" };
                return response;
            }
            if(department.ParentDepartmentId != null)
            {
                var deparment = _dbContext.Set<Department>().AsNoTracking().FirstOrDefaultAsync(d => d.Id == department.ParentDepartmentId && d.IsDeleted == false).Result;
                if(department == null)
                {
                    response.Succeeded = false;
                    response.Errors = new List<string>() { "ParentDepartment does not exist" };
                    return response;
                }
            }
            
            _dbContext.Set<Department>().Add(inserted);
            await _dbContext.SaveChangesAsync();

            response.Succeeded = true;
            response.Result = _mapper.Map<GetDepartmentDTO>(inserted);

            return response;
        }

        public async Task<ResponseMessage<GetDepartmentDTO>> UpdateDepartment(long id, UpdateDepartmentRequest updatedDepartment)
        {
            ResponseMessage<GetDepartmentDTO> response = new ResponseMessage<GetDepartmentDTO>();

            var department = await _dbContext.Set<Department>().AsNoTracking().FirstOrDefaultAsync(d => d.Id == id && d.IsDeleted == false);
            if(department == null)
            {
                response.Succeeded = false;
                return response;
            }
            if(updatedDepartment.ParentDepartmentId != null)
            {
                var parentDeparment = await _dbContext.Set<Department>().AsNoTracking().FirstOrDefaultAsync(d => d.Id == updatedDepartment.ParentDepartmentId 
                && d.CompanyId == department.CompanyId && d.IsDeleted == false);
                if(parentDeparment == null)
                {
                    response.Succeeded = false;
                    return response;
                }
            }

            Department entity = _mapper.Map<Department>(updatedDepartment);
            department.Id = id;

            _dbContext.Set<Department>().Update(entity);
            await _dbContext.SaveChangesAsync();

            response.Result = _mapper.Map<GetDepartmentDTO>(entity);
            response.Succeeded = true;


            return response;
        }

        public async Task<ResponseMessage<bool>> DeleteDepartment(long id)
        {
            ResponseMessage<bool> response = new ResponseMessage<bool>();

            var entity = await _dbContext.Set<Department>().AsNoTracking().FirstOrDefaultAsync(c => c.Id == id && c.IsDeleted == false);
            if (entity != null)
            {
                entity.IsDeleted = true;
                _dbContext.Set<Department>().Update(entity);
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

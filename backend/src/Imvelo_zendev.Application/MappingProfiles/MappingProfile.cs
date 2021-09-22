using AutoMapper;
using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.DTOs.Company;
using Imvelo_zendev.Application.DTOs.Department;
using Imvelo_zendev.Application.DTOs.User;
using Imvelo_zendev.Domain.Entities;

namespace Imvelo_zendev.Application.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // User Map
            CreateMap<User, GetUserDTO>().ReverseMap();
            CreateMap<RegistrationRequest, User>();
            CreateMap<InsertUpdateUserRequest, User>();

            // Company Map
            CreateMap<Company, GetCompanyDTO>().ReverseMap();
            CreateMap<InsertCompanyRequest, Company>();

            // Department Map
            CreateMap<Department, GetDepartmentDTO>().ReverseMap();
            CreateMap<InsertDepartmentRequest, Department>();

        }
    }
}

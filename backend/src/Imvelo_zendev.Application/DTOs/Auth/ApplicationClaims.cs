using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Auth
{
    public static class ApplicationClaims
    {
        public static string UserManagment => nameof(UserManagment);
        public static string ELearning => nameof(ELearning);
        public static string ActivityManagment => nameof(ActivityManagment);
        public static string OrganizationManagment => nameof(OrganizationManagment);
        public static string RiskAssessmentManagment => nameof(RiskAssessmentManagment);
        public static string ProductInfoManagment => nameof(ProductInfoManagment);
        public static string CompanyManagment => nameof(CompanyManagment);
    }
}

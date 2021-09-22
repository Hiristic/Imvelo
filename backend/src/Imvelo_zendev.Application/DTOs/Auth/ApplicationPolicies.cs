using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Auth
{
    public static class ApplicationPolicies
    {
        public static string UserManagmentOnly => nameof(UserManagmentOnly);
        public static string ELearningOnly => nameof(ELearningOnly);
        public static string ActivityManagmentOnly => nameof(ActivityManagmentOnly);
        public static string OrganizationManagmentOnly => nameof(OrganizationManagmentOnly);
        public static string RiskAssessmentManagmentOnly => nameof(RiskAssessmentManagmentOnly);
        public static string ProductInfoManagmentOnly => nameof(ProductInfoManagmentOnly);
        public static string CompanyManagmentOnly => nameof(CompanyManagmentOnly);
    }
}

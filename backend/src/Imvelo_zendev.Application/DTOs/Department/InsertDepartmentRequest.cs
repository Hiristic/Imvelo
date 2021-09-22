using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Department
{
    public class InsertDepartmentRequest
    {
        public string Name { get; set; }
        public long? ParentDepartmentId { get; set; }
        public long CompanyId { get; set; }
    }
}

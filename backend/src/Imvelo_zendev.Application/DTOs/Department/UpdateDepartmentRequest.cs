using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Department
{
    public class UpdateDepartmentRequest
    {
        //public long Id { get; set; }
        public string Name { get; set; }
        public long? ParentDepartmentId { get; set; }        
    }
}

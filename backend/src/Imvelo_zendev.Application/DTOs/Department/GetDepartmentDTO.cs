using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Department
{
    public class GetDepartmentDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsRoot { get; set; }
        public int ProductCount { get; set; }
        public List<long> Children { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Domain.Entities
{
    public class Department
    {
        [Key]
        public long Id { get; set; }
        public bool IsDeleted { get; set; }
        public string Name { get; set; }
        public long? ParentDepartmentId { get; set; }
        public long CompanyId { get; set; }



        public virtual Company Company { get; set; }
    }
}

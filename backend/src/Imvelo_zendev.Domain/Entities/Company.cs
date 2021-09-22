using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Domain.Entities
{
    public class Company
    {
        [Key]
        public long Id { get; set; }
        public bool IsDeleted { get; set; }
        public string Name { get; set; }
        public int QuantityOfChemichals { get; set; }
        public string ContactName { get; set; }
        public string ContactLastname { get; set; }
        public string ContactEmail { get; set; }
        public virtual ICollection<Department> Departments { get; set; }
    }
}

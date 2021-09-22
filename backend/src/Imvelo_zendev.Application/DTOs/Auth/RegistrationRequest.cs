using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Auth
{
    public class RegistrationRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        /// <summary>
        ///     Get or set email.
        /// </summary>
        /// <returns></returns>
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        /// <summary>
        ///     Get or set password.
        /// </summary>
        /// <returns></returns>
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}

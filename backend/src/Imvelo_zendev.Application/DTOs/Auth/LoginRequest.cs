using System.ComponentModel.DataAnnotations;

namespace Imvelo_zendev.Application.DTOs.Auth
{
    public class LoginRequest
    {       
        /// <summary>
        ///     Get or set email.
        /// </summary>
        /// <returns></returns>
        [Required]
        public string Username { get; set; }

        /// <summary>
        ///     Get or set password.
        /// </summary>
        /// <returns></returns>
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}


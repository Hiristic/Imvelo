using System;
using System.ComponentModel.DataAnnotations;

namespace Imvelo_zendev.Domain.Core.Entities
{
    public class Entity
    {
        [Key]
        public Guid Id { get; set; }
    }
}

using Imvelo_zendev.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Imvelo_zendev.Infrastructure.Context
{
    public class DatabaseContext : IdentityDbContext<User, IdentityRole, string>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Department>()
                .HasOne(p => p.Company)
                .WithMany(b => b.Departments)
                .HasForeignKey(b => b.CompanyId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);            
        }
    }
}

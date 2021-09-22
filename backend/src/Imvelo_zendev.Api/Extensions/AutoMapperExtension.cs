using System;
using AutoMapper;
using Imvelo_zendev.Application.MappingProfiles;
using Microsoft.Extensions.DependencyInjection;

namespace Imvelo_zendev.Api.Extensions
{
    public static class AutoMapperExtension
    {
        public static void AddAutoMapperSetup(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            services.AddAutoMapper(typeof(MappingProfile));
        }
    }
}

using CursoMVC20191.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CursoMVC20191.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            User user = new User();
            user.Name = "juan";
            user.Email = "correo@coreo.com";
            return View(user);
        }
    }
}

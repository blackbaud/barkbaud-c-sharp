using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace barkbaud_c_sharp.Controllers
{
    public class HomeController : Controller
    {
        // Index route...
        public IActionResult Index()
        {
            return View();
        }

        // Error route...
        public IActionResult Error()
        {
            return View();
        }
    }
}

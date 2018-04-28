using System.Web.Mvc;

namespace AspNetReact.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Index", "React");
        }
    }
}
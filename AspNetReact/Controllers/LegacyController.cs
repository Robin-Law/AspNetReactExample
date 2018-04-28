using System.Web.Mvc;

namespace AspNetReact.Controllers
{
    public class LegacyController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
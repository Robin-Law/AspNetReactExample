using System.Web.Mvc;

namespace AspNetReact.Controllers
{
    public class ReactController : Controller
    {
        public ActionResult Index()
        {
            return new FilePathResult("~/react-app/build/index.html", "text/html");
        }
    }
}
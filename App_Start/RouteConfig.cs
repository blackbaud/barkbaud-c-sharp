using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Routing;

namespace Barkbaud
{
    public class RouteConfig
    {
        public static void RegisterRoutes(IRouteBuilder routes)
        {
            routes.MapRoute(
                name: "default",
                template: "{controller}/{action}/{id?}",
                defaults: new { controller = "Home", action = "Index"}
            );
            routes.MapRoute(
                name: "DefaultApi",
                template: "api/{controller}"
            );
        }
    }
}

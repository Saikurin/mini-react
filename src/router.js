import { Router, Route } from "./lib/react-routing.js";




export var router = new Router("mainRouter", [
  new Route("Clicker", "clicker", "/", "link color-yellow")
]);

export var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];

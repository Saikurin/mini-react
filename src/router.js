import { Router, Route } from "./lib/react-routing.js";




export var router = new Router("mainRouter", [
  new Route("Clicker", "clicker", "/", "link"),
  new Route("Points", "points", "/points", "link")
]);

export var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];

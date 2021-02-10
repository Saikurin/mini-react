import { Router, Route } from "./React/Rroute.js";




export var router = new Router("mainRouter", [
  new Route("Clicker", "clicker", "/", "link"),
]);

export var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];

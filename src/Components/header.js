import { prop_access } from "../React/Rutils.js";
import { MiniReact } from "../React/core.js";
import { Component } from "./../React/Rcomponent.js";

export class HeaderComponent extends Component {
  constructor(properties) {
    super(properties);
    this.headerTitle = "4IW1 SIKLI - HEDOO";
    this.routes = prop_access(properties.router, "routes");
    this.selectedLink = window.location.pathname;
  }

  render = () => {
    var routePoints = this.routes.filter(function(r) {
      return r.getId() === "points";
    })[0];
    var routeClicker = this.routes.filter(function(r) {
      return r.getId() === "clicker";
    })[0];

    const result = MiniReact.createElement(
      "header",
      { class: "container text-center color-blue mb-5" },
      MiniReact.createElement("h2", null, `${this.headerTitle}`),
      MiniReact.createElement(
        "nav",
        null,
        MiniReact.createElement(
          "a",
          {
            class: routeClicker.getClassName(),
            id: routeClicker.getId(),
            href: "." + routeClicker.getPath(),
            style:
              this.selectedLink === routeClicker.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeClicker.getName()
        ),
      )
    );

    return result;
  };
}

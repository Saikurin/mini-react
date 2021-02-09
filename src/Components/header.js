import { prop_access } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class HeaderComponent extends Component {
  constructor(properties) {
    super(properties);
    this.headerTitle = "4IW1 SIKLI - HEDOO".snake_case();
    this.routes = prop_access(properties.router, "routes");
    this.selectedLink = window.location.pathname;
  }

  render = () => {
    var routeScore = this.routes.filter(function(r) {
      return r.getId() === "score";
    })[0];
    var routeJitter = this.routes.filter(function(r) {
      return r.getId() === "jitterclick";
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
            class: routeJitter.getClassName(),
            id: routeJitter.getId(),
            href: "." + routeJitter.getPath(),
            style:
              this.selectedLink === routeJitter.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeJitter.getName()
        ),
        MiniReact.createElement(
          "a",
          {
            class: routeScore.getClassName(),
            id: routeScore.getId(),
            href: "." + routeScore.getPath(),
            style:
              this.selectedLink === routeScore.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeScore.getName()
        )
      )
    );

    return result;
  };
}

import { MiniReact } from "../React/core.js";
import { Component } from "../React/Rcomponent";
import { prop_access } from "../React/Rutils";

export class TableComponent extends Component {
  constructor(properties) {
    super(properties);
    if (localStorage.getItem("points") == null) {
      this.scoreboard = {
        you: 0
      };
    } else {
      this.scoreboard = JSON.parse(localStorage.getItem("points"));
    }
  }

  render = () => {
    const result = MiniReact.createElement(
      "div",
      { class: "container" },
      MiniReact.createElement(
        "h1",
        { class: "text-center mb-1" },
        "Score face a botnet"
      ),
      MiniReact.createElement(
        "div",
        { class: "container text-center" },
        MiniReact.createElement(
          "h3",
          { class: "color-red" },
          `You : ${prop_access(this.scoreboard, "Votre score face à botnet")}`
        )
      )
    );
    return result;
  };
}

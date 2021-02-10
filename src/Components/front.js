import { MiniReact } from "../React/core.js";
import { Component } from "../React/Rcomponent.js";

export class PageComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = MiniReact.createElement("div", { id: "main" },
      MiniReact.createElement("div", {id: "header"}, ""),
      MiniReact.createElement("div", {id: "content"}, "")
    );
    return result;
  };
}

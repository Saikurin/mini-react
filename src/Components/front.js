import { MiniReact } from "../lib/react.js.js";
import { Component } from "../lib/react-component.js.js";

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

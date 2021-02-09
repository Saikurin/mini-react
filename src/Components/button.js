import { MiniReact } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class ButtonComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    const result = MiniReact.createElement(
      "button",
      { class: "btn", onclick: this.properties.onClick },
      `Je ne suis pas vaincu ! `
    );
    return result;
  }
}

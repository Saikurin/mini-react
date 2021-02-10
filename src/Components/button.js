import { MiniReact } from "../React/core.js";
import { Component } from "../React/Rcomponent.js";

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

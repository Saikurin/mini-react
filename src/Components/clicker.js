import { type_check, prop_access } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";
import { ButtonComponent } from "./button-component.js";

export class JitterComponent extends Component {
  scoreboard = {
    you: 0
  };

  myBtn = new ButtonComponent({
    onClick: () => document.location.reload(true)
  }).render();

  constructor(properties) {
    super(properties);
    if (this.specs) type_check(properties, this.specs);
    this.timer = setInterval(this.tick, 1000);
    this.temps_total = properties.interval;
    this.temps = 0;
    this.nbr_click = 0;
  }
  render = () => {
    const result = MiniReact.createElement(
      "div",
      MiniReact.createElement(
        "h1",
        { class: "text-center", id: "counter" },
        "Appuyer sur W"
      ),
      MiniReact.createElement(
        "div",
        { class: "text-center", id: "jitter" },
        "",
        MiniReact.createElement(
          "h1",
          { class: "align-middle" },
          `Votre score : ${this.nbr_click}`
        )
      ),
      MiniReact.createElement(
        "h1",
        { class: "text-center" },
        `Counter : ${this.state.time != null ? this.state.time : "Pret ?"}`
      ),
      MiniReact.createElement(
        "div",
        { class: "container text-center" },
        this.myBtn
      )
    );
    return result;
  };

  tick = () => {
    if (this.state.time == null) this.setListener();
    if (this.state.time >= this.temps_total) this.stopCount();
    else this.setState({ time: this.temps++ });
  };

  stopCount = () => {
    window.onkeydown = null;
    clearInterval(this.timer);

    if (localStorage.getItem("points") == null)
      localStorage.setItem("points", JSON.stringify(this.scoreboard));
    if (
      prop_access(JSON.parse(localStorage.getItem("points")), "votre score") <
      this.nbr_click
    ) {
      this.scoreboard.you = this.nbr_click;
      localStorage.setItem("points", JSON.stringify(this.scoreboard));
    }
    if (this.nbr_click < 20) alert("Peut mieux faire");
    else if (this.nbr_click == 61) alert("Vous avez vaincu botnet");
    else alert("Botnet est mort");
  };
  setListener = () => {
    var element = document.getElementById("clicker");
    element.onclick = this.counter;
    window.onkeydown = this.counter;
  };
  counter = e => {
    if (e.key === "w") {
      this.nbr_click++;
      this.setState({ time: this.temps, count: this.nbr_click.createScore(1) });
    }
  };
  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}

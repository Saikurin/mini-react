import { isStateLessComponent } from "./Rutils.js";
import { Component } from "./Rcomponent.js";

function anElement(element, properties, children) {
  if (element.isClass()) {
    const component = new element(properties);
    return component.render();
  } else if (isStateLessComponent(element)) {
    return element(properties);
  } else {
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        anElement.appendChild(child);
      } else {
        anElement.textContent += child;
      }
    });
    if (properties != null) {
      Object.keys(properties).forEach(propertyName => {
        if (/^on.*$/.test(propertyName)) {
          anElement.addEventListener(
            propertyName.substring(2).toLowerCase(),
            properties[propertyName]
          );
        } else {
          anElement.setAttribute(propertyName, properties[propertyName]);
        }
      });
    }
    return anElement;
  }
}
export const createElement = (element, properties, ...children) => {
  return anElement(element, properties, children);
};

export const MiniReact = {
  createElement,
  Component
};

export const MiniReactDOM = {
  render: (element, domElement, properties = {}) => {
    var prevChild = null;
    var el = new element(properties);
    var prevChild = el.display();

    el.componentDidUpdate = () => {
      var child = el.display();
      domElement.replaceChild(child, prevChild);
      prevChild = child;
    };
    domElement.appendChild(prevChild);
  }
};

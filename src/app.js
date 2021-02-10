import { MiniReactDOM } from "./React/core.js";
import { router, route } from "./router.js";
import { HeaderComponent } from "./Components/header.js";
import { PageComponent } from "./Components/front.js";
import { ClickerComponent } from "./Components/clicker.js";



MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router
});


var promise = new Promise(function(resolve, reject) {
  var contentElement = document.getElementById("content");
  if (contentElement)
    resolve("test ok");
  else
    reject(
      Error(
        "test failed"
      )
    );
});
promise.then(
  function(result) {
    var contentElement = document.getElementById("content");
    console.log(result);
    switch (!route ? null : route.getId()) {
      case "clicker":
        MiniReactDOM.render(ClickerComponent, contentElement, {
          interval: 10
        });
        break;
    }
  },
  function(err) {
    console.log(err);
  }
);

import { MiniReactDOM } from "./lib/react.js";
import { router, route } from "./router.js";
import { HeaderComponent } from "./component/header-component.js";
import { PageComponent } from "./component/page-component.js";
import { JitterComponent } from "./component/jitter-component.js";


MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router
});


var promise = new Promise(function(resolve, reject) {
  var contentElement = document.getElementById("content");
  if (contentElement)
    resolve("Content element found !  MiniReact can work ! Yay !");
  else
    reject(
      Error(
        "No  ontent element found... MiniReact won't work :( Please use Google Chrome !"
      )
    );
});

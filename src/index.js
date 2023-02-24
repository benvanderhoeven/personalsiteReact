import {createRoot} from "react-dom/client";
import App from "./Components/App";

let appElement  = document.getElementById("app")
let root = createRoot(appElement);
root.render(<App/>);






import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";
import { renderToString } from "react-dom/server";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

reactRoot.render(<App />);

console.log(renderToString(<App />));

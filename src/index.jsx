import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);

registerServiceWorker();

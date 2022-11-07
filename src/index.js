import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import Number from "./Components/number";

const root = createRoot(document.getElementById("root"));

root.render(<Number/>);

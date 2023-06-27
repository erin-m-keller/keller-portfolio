import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Main from "./pages/Main";
import { HashRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    </HashRouter>
);
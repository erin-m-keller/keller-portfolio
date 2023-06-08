import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    </BrowserRouter>
);
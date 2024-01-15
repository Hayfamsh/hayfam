import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//local page
import Index from "./views";
import Contact from "./views/Contact";
import About from "./components/sections/About";
// *** WE SHOULD IMPORT css FILES HERE ***
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/vendor/nucleo/css/nucleo.css";

// import "./assets/css/argon-style.css";
import "./assets/css/hayfam-styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/contact" exact element={<Contact />} />
      {/* <Route path="/about" exact element={<About />} /> */}
    </Routes>
  </BrowserRouter>

  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// // import { HashRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// //local page
// import Index from "./views";
// import Contact from "./views/Contact";
// import MainNavbar from "./components/MainNavbar";

// // *** WE SHOULD IMPORT css FILES HERE ***
// import "./assets/vendor/font-awesome/css/font-awesome.min.css";
// import "./assets/vendor/nucleo/css/nucleo.css";

// // import "./assets/css/argon-style.css";
// import "./assets/css/hayfam-styles.css";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>

//   <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <Routes>
//       <Route exact path="/" element={<Index />} />
//       <Route exact path="/contact" element={<Contact />} />
//     </Routes>
//   </BrowserRouter>

//   /* </React.StrictMode> */
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

// *** WE SHOULD IMPORT css FILES HERE ***
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/hayfam-styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Route, Routes } from "react-router-dom";
//local page
import Index from "./views";
import Contact from "./views/Contact";
import MainNavbar from "./components/MainNavbar";

// // *** WE SHOULD IMPORT css FILES HERE ***
// import "./assets/vendor/font-awesome/css/font-awesome.min.css";
// import "./assets/vendor/nucleo/css/nucleo.css";
// import "./assets/css/hayfam-styles.css";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error";
import Main from "./components/main/main";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";
import Contactus from "./components/contactus/contactus";
import Navbar from "./components/navbar/navbar";
import Aboutme from "./components/aboutme/aboutme";
import Services from "./components/services/services";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Navbar />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/Works"
            element={
              <>
                <Navbar /> <Works /> <Footer />
              </>
            }
          />

          <Route
            path="Contact"
            element={
              <>
                <Navbar />
                <Contactus /> <Footer />
              </>
            }
          />
          <Route
            path="About Me"
            element={
              <>
                <Navbar />
                <Aboutme />
                <Footer />
              </>
            }
          />
          <Route
            path="Services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(Main());
export default Main;

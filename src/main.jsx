import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";
import Contactus from "./components/contactus/contactus";
import Navbar from "./components/navbar/navbar";
import Aboutme from "./components/aboutme/aboutme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <>
              <App />
              <Footer />
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <App />
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

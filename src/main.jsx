import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";
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
        >
          {" "}
        </Route>
        <Route
          path="/Works"
          element={
            <>
              <Works /> <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

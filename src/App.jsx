import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./error";
import Main from "./components/main/main";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";
import Contactus from "./components/contactus/contactus";
import Navbar from "./components/navbar/navbar";
import Aboutme from "./components/aboutme/aboutme";
import Services from "./components/services/services";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Navigate to={"/Home"} />} />
            <Route
              path="/Home"
              element={
                <>
                  <Helmet>
                    <link rel="canonical" href="https://www.shadowctrl.me/" />
                  </Helmet>
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
                  <Helmet>
                    <link
                      rel="canonical"
                      href="https://www.shadowctrl.me/Works"
                    />
                  </Helmet>
                  <Navbar /> <Works /> <Footer />
                </>
              }
            />

            <Route
              path="Contact"
              element={
                <>
                  <Helmet>
                    <link
                      rel="canonical"
                      href="https://www.shadowctrl.me/Contact"
                    />
                  </Helmet>
                  <Navbar />
                  <Contactus /> <Footer />
                </>
              }
            />
            <Route
              path="About Me"
              element={
                <>
                  <Helmet>
                    <link
                      rel="canonical"
                      href="https://www.shadowctrl.me/About Me"
                    />
                  </Helmet>
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
                  <Helmet>
                    <link
                      rel="canonical"
                      href="https://www.shadowctrl.me/Services"
                    />
                  </Helmet>
                  <Navbar />
                  <Services />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(App());
export default App;

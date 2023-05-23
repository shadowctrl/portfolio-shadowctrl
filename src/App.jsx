import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/navbar.jsx";
import Main from "./components/main/main";

const App = () => {
  return (
    <Parent>
      <Navbar />
      <Main />
    </Parent>
  );
};
export default App;
const Parent = styled.div``;

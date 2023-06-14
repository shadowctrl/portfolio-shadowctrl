import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Icon = (size = "1.5vw", mr = "1vw") => {
  return (
    <>
      <InstagramIcon
        style={{
          marginRight: mr,
          cursor: "pointer",
          fontSize: size,
        }}
        onClick={() => window.open("https://instagram.com/_.shadowctrl._")}
      />
      <GitHubIcon
        style={{
          marginRight: mr,
          cursor: "pointer",
          fontSize: size,
        }}
        onClick={() => window.open("https://github.com/shadowctrl")}
      />
      <LinkedInIcon
        style={{
          cursor: "pointer",
          fontSize: size,
        }}
        onClick={() => window.open("https://linkedin.com/in/shadowctrl")}
      />
    </>
  );
};
const Footer = () => {
  return (
    <Parent>
      <Media>
        <Mobile>{Icon("5vw", "3vw")}</Mobile>
        <Desktop>{Icon()}</Desktop>
      </Media>
      <Text> Made by Shadowctrl </Text>
    </Parent>
  );
};

export default Footer;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 1vh;
`;
const Media = styled.div`
  display: flex;
  color: #778899;
`;
const Text = styled.div`
  color: #778899;
  padding-top: 1vh;
  font-family: "Libre Barcode 128 Text";
  font-size: 1.5vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 6vw;
  }
`;
const Mobile = styled.div`
  display: none;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
  }
`;
const Desktop = styled.div`
  display: block;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
`;

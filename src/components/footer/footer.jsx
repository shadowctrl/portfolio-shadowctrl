import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Parent>
      <Media>
        <InstagramIcon
          style={{
            marginRight: "2vw",
            cursor: "pointer",
          }}
          onClick={() => window.open("https://instagram.com/_.shadowctrl._")}
        />
        <GitHubIcon
          style={{
            marginRight: "2vw",
            cursor: "pointer",
          }}
          onClick={() => window.open("https://github.com/shadowctrl")}
        />
        <LinkedInIcon
          style={{
            cursor: "pointer",
          }}
          onClick={() => window.open("https://linkedin.com/in/shadowctrl")}
        />
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
  padding-bottom: 3vh;
`;
const Media = styled.div`
  display: flex;
  color: #778899;
`;
const Text = styled.div`
  color: #778899;
  padding-top: 2vh;
  font-family: "Libre Barcode 128 Text";
  font-size: 2.5vw;
`;

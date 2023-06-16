import React from "react";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiSharpIcon from "@mui/icons-material/ApiSharp";

const IconCode = (size = "10vw") => {
  return (
    <span>
      <CodeIcon
        style={{
          fontSize: size,
        }}
      />
    </span>
  );
};

const IconSecurity = (size = "10vw") => {
  return (
    <SecurityIcon
      style={{
        fontSize: size,
      }}
    />
  );
};

const IconApi = (size = "9vw") => {
  return (
    <ApiSharpIcon
      style={{
        fontSize: size,
      }}
    />
  );
};
const services = () => {
  return (
    <Parent>
      <Head>
        <span>/</span>Services
        <Dash />
      </Head>
      <Services>
        <ServiceItems>
          <Mobile>{IconCode("30vw")}</Mobile>
          <Desktop> {IconCode()}</Desktop>
          <br />
          <span>WEB DEVELOPMENT</span>
          <p>
            {" "}
            I utilize my expertise in coding languages such as HTML, CSS, and
            JavaScript to build a website that ensures optimal performance
            across different browsers and devices. my primary focus is on
            creating and designing websites that are user-friendly.
          </p>
        </ServiceItems>
        <ServiceItems>
          <Mobile>{IconSecurity("30vw")}</Mobile>
          <Desktop>{IconSecurity()}</Desktop>
          <br />
          <span>VAPT</span>
          <p>
            As a passion towards CyberSecurity, I could idenfy and analyze
            potential security flaws in a system, networks. Through the
            assesments, i uncover vulnerabilities and assess the impact on the
            security of the system.{" "}
          </p>
        </ServiceItems>
        <ServiceItems>
          <Mobile>{IconApi("30vw")}</Mobile>
          <Desktop>{IconApi()} </Desktop>
          <br />
          <span>DISCORD BOT</span>
          <p>
            I am proficient in developing Discord bots, crafting tailored
            solutions that automate tasks and enhance interactive experiences
            within the Discord ecosystem.I create bots that performs
            moderations, role management and integrating with external services.
          </p>
        </ServiceItems>
      </Services>
    </Parent>
  );
};

export default services;

const Parent = styled.div`
  margin-left: 10vw;
  margin-top: 5vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin: 0;
    margin-left: 0vw;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-family: Fira Code;
  margin-top: 10vh;
  font-size: 2vw;
  font-weight: 600;
  span {
    color: #c778dd;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 5vw;
    margin-left: 5vw;
    margin-top: 5vh;
  }
`;

const Dash = styled.div`
  /* position: absolute; */
  border-top: 1px solid #c778dd;
  width: 35vw;
  margin-left: 2vw;
`;

const Services = styled.div`
  margin-top: 10vh;
  margin-left: -10vw;
  color: #c778dd;
  padding: 0vh 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  column-gap: 2vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 5vh;
    margin-left: 0vw;
    display: flex;
    flex-wrap: wrap;
    row-gap: 2vh;
    justify-content: center;
    align-items: center;
    margin: 5vw;
  }
`;

const ServiceItems = styled.div`
  font-size: 1.5vw;
  font-weight: 900;
  font-family: mars;
  border-radius: 0.5vw;
  border: 0.1vw solid #c778dd;
  padding: 2vh 1.3vw;

  p {
    color: white;
    font-family: Fira Code;
    font-size: 1vw;
    text-align: justify;
    /* margin-right: 5vw; */
    font-weight: 500;
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
      font-size: 3.5vw;
      padding: 2vw;
    }
  }
  span {
    background-color: #fad0c4;
    background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 5vw;
  }
`;

const Mobile = styled.div`
  display: none;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
  }
`;
const Desktop = styled.div`
  display: flex;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
`;

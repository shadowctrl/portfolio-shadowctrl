import React from "react";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiSharpIcon from "@mui/icons-material/ApiSharp";

const services = () => {
  return (
    <Parent>
      <Head>
        <span>/</span>Services
        <Dash />
      </Head>
      <Services>
        <ServiceItems>
          <span>
            <CodeIcon
              style={{
                fontSize: "10vw",
              }}
            />
          </span>
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
          <SecurityIcon
            style={{
              fontSize: "10vw",
            }}
          />
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
          <ApiSharpIcon
            style={{
              fontSize: "9vw",
            }}
          />
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
  }
  span {
    background-color: #fad0c4;
    background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

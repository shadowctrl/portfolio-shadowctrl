import React, { useEffect } from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Project } from "../projects/project.jsx";
import Skills from "../skills/skills";
import Aboutme from "../aboutme/aboutme";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";
import ReactGA from "react-ga";
const Main = () => {
  useEffect(() => {
    ReactGA.initialize("G-6LSJFNRLP1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Parent>
      <Main1>
        <Intro>
          <h1>
            Shadowctrl is a <span> Security Professional </span>
            <br />
            and a <span>Mern Stack Developer</span>
          </h1>
          <p>
            {" "}
            He develops robust security mechanisms to protect critical systems
            and crafts responsive websites that meet creativity
          </p>
          <Contact onClick={() => window.open("/contact", "_blank")}>
            Contact Me
          </Contact>
        </Intro>
        <Img>
          <img src="/images/anonymous.webp" alt="Hacker" />
          <Para>
            <Box />
            Currently working on portfolio
          </Para>
        </Img>
      </Main1>
      <Main2>
        <FormatQuoteTop>
          <FormatQuoteIcon />
        </FormatQuoteTop>
        <Quote>The Quieter You Become The More You Able To Hear</Quote>
        <FormatQuoteBottom>
          <FormatQuoteIcon />
        </FormatQuoteBottom>
        <SideBox />
        {Project("Projects")}
        <Skills />
        {/* <Aboutme /> */}
        <Head>
          <span>#</span>About-Me
          <Dash />
        </Head>
        <Container>
          <Border>
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>D</span>
            <span>O</span>
            <span>W</span>
            <span>C</span>
            <span>T</span>
            <span>R</span>
            <span>L</span>
          </Border>
          <About>
            With over 3+ years of learnings in the field of cybersecurity, I
            bring a wealth of knowledge to the table. Since 2018, I have been
            immersing myself in the world of cybersecurity, continuously
            expanding my skills and staying ahead of emerging threats. My
            passion lies in securing digital assets and ensuring the utmost
            protection of sensitive information.
            <br /> <br />
            In addition to my cybersecurity prowess, I am also proficient in
            developing websites using the MERN stack. This combination of skills
            allows me to not only create dynamic and engaging web applications
            but also integrate robust security measures into their foundation. I
            pride myself on delivering secure software solutions that prioritize
            the confidentiality and integrity of user data.
            <br /> <br />
            With excellent communication skills, a strong work ethic, and a
            dedication to delivering projects on time and within budget, I am
            confident that I can exceed your expectations as a freelancer.
          </About>
          <img src="/images/shadowctrl.webp" alt="Shadowctrl" />
        </Container>
        <Contacts />
      </Main2>
    </Parent>
  );
};

export default Main;

const Parent = styled.div`
  /* height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  width: 100vw; */
  transition: all 0.1s ease-in-out;
`;
const Main1 = styled.div`
  /* height: 100vh; */
  /* scroll-snap-align: start; */
  /* position: relative; */
`;
const Intro = styled.div`
  margin-top: 15vh;
  margin-left: 10vw;
  h1 {
    font-size: 2.3vw;
  }
  color: whitesmoke;
  font-family: Source Code Pro;
  span {
    color: #c778dd;
    font-family: Source Code Pro;
  }
  p {
    margin-top: 4vh;
    font-size: 2vw;
    h1 {
      font-size: 2vw;
    }
    margin-right: 30vw;
    color: grey;
    font-family: "Libre Barcode 128 Text";
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 4vh;
    font-size: 4vw;
    margin-left: 8vw;
    margin-right: 2vw;
    p {
      margin-top: 0.5vh;
      font-size: 3.5vw;
      margin-right: 0;
    }
    h1 {
      font-size: 4vw;
      font-family: Fira Code;
    }
  }
`;
const Img = styled.div`
  position: absolute;
  right: 2vw;
  margin-top: -40vh;
  img {
    width: 25vw;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin: 0vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    img {
      text-align: center;
      width: 70vw;
      /* display: none; */
    }
  }
`;

const Para = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  padding: 0.5vw;
  margin-left: 3vw;
  margin-right: 3vw;
  color: #bdb7b7;
  font-family: Fira Code;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 4vw;
    margin-right: -10vw;
    margin-left: 0vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    margin-top: 1vh;
    /* display: none; */
  }
`;
const Box = styled.div`
  height: 2vh;
  width: 1vw;
  background-color: #c778dd;
  margin-right: 0.5vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    height: 2vh;
    width: 4vw;

    /* display: none; */
  }
`;

const Contact = styled.div`
  font-size: 1.5vw;
  margin-top: 1vw;
  width: 10vw;
  /* margin-right: 78vw; */
  padding: 0.2vw 0.4vw;
  color: #c778dd;
  font-family: Source Code Pro;
  font-weight: 600;
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: 0vh 1vh 1vh;
  cursor: pointer;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 21vw;
    text-align: center;
    font-size: 3vw;
    margin: 0;
    box-shadow: 0vh 0.5vh 0.5vh;
  }
`;

const Main2 = styled.div`
  margin-top: 40vh;
  position: relative;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin: 0;
    /* margin-top: 10vh; */
  }
`;
const FormatQuoteTop = styled.div`
  color: #bdb7b7;
  position: absolute;
  margin-left: 13vw;
  margin-top: -1.5vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: -1.2vh;
  }
`;
const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2vw;
  margin-top: -20vh;
  border: 1px solid #bdb7b7;
  margin-left: 10vw;
  margin-right: 35vw;
  padding: 1vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 2.5vw;
  }
`;

const FormatQuoteBottom = styled.div`
  color: #bdb7b7;
  position: absolute;
  margin-left: 60vw;
  margin-top: -1.5vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: -1.2vh;
  }
`;

const SideBox = styled.div`
  color: white;
  border: 1px solid #bdb7b7;
  padding: 2vw;
  margin-top: 10vh;
  margin-left: 90vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    positon: absolute;
    padding: 4vw;
    margin-top: 17vh;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-family: Fira Code;
  margin-left: 10vw;
  margin-top: 5vh;
  font-size: 2vw;
  font-weight: 600;
  span {
    color: #c778dd;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 5vw;
    margin-left: 5vw;
    margin-top: 3vh;
  }
`;
const Dash = styled.div`
  /* position: absolute; */
  border-top: 1px solid #c778dd;
  width: 36vw;
  margin-left: 2vw;
`;

const Border = styled.div`
  border: 1px solid #bdbdbd;
  padding: 0.5vw;
  writing-mode: vertical-lr;
  text-orientation: upright;
  text-align: center;
  font-size: 1.3vw;
  color: #c778dd;
  span {
    font-family: Source Code Pro;
    padding-top: 1.5vh;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    padding: 0%.5;
    font-size: 5vw;
    margin-top: 3vh;
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  margin-right: 10vw;
  img {
    width: 18vw;
    /* height: 55vh; */
    border-radius: 1vw;
    opacity: 0.8;
    box-shadow: 2vw 2vh 2vw;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 5vh;
    margin: 0vw;
    padding: 0;
    img {
      min-width: 80vw;
      max-width: 90vw;
    }
  }
`;
const About = styled.div`
  padding-left: 7.5vw;
  padding-top: 5vh;
  padding-right: 4vw;
  text-align: justify;
  color: #abb2bf;
  font-family: Fira Code;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    padding: 5vw;
    margin-top: 2vh;
    font-size: 3vw;
  }
`;

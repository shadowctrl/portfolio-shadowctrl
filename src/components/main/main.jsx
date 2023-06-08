import React from "react";
import styled from "styled-components";
import anonymous from "../../assets/anonymous.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Project } from "../projects/project.jsx";
import Skills from "../skills/skills";
import Aboutme from "../aboutme/aboutme";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";

const handleContact = () => {
  window.open("/contact", "_blank");
};
const Main = () => {
  return (
    <Parent>
      <Main1>
        <Intro>
          Shadowctrl is a <span> Security Professional </span>
          <br />
          and a <span>Mern Stack Developer</span>
          <p>
            {" "}
            He develops robust security mechanisms to protect critical systems
            and crafts responsive websites that meet creativity
          </p>
          <Contact onClick={() => handleContact()}>Contact Me</Contact>
        </Intro>
        <Img>
          <img src={anonymous} />
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
            As a highly motivated MERN stack developer with expertise in Discord
            API, Google API, Firebase, and Cyber Security, I am excited to offer
            my services as a freelancer. With a proven track record of building
            robust and scalable applications using cutting-edge technologies, I
            am confident that I can deliver high-quality work to clients with
            diverse needs.
            <br /> <br />
            Whether it's building a custom web application, integrating
            third-party APIs, or managing a database on Firebase, I have the
            skills and experience to get the job done. As a Cyber Security
            graduate, I understand the importance of building secure and
            resilient applications, and am committed to implementing industry
            best practices in all my projects.
            <br /> <br />
            With excellent communication skills, a strong work ethic, and a
            dedication to delivering projects on time and within budget, I am
            confident that I can exceed your expectations as a freelancer.
          </About>
          <img src="/images/dp.jpg" alt="Shadowctrl" />
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
`;
const Main1 = styled.div`
  /* height: 100vh; */
  /* scroll-snap-align: start; */
`;
const Intro = styled.div`
  margin-top: 20vh;
  margin-left: 10vw;
  font-size: 2.3vw;
  color: whitesmoke;
  font-family: Source Code Pro;
  span {
    color: #c778dd;

    font-family: Source Code Pro;
  }
  p {
    margin-top: 4vh;
    font-size: 2vw;
    margin-right: 30vw;
    color: grey;
    font-family: "Libre Barcode 128 Text";
  }
`;
const Img = styled.div`
  position: absolute;
  right: 2vw;
  margin-top: -40vh;
  img {
    width: 25vw;
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
`;
const Box = styled.div`
  height: 2vh;
  width: 1vw;
  background-color: #c778dd;
  margin-right: 0.5svw;
`;

const Contact = styled.div`
  font-size: 1.5vw;
  margin-top: 1vw;
  margin-right: 78vw;
  padding: 0.2vw 0.4vw;
  color: #c778dd;
  font-family: Source Code Pro;
  font-weight: 600;
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: 0vh 1vh 1vh;
  cursor: pointer;
`;

const Main2 = styled.div`
  /* height: 100vh; */
  /* scroll-snap-align: start; */
  margin-top: 40vh;
  /* padding-bottom: 10vh; */
`;
const FormatQuoteTop = styled.div`
  color: #bdb7b7;
  position: absolute;
  margin-left: 13vw;
  margin-top: -1.5vh;
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
`;

const FormatQuoteBottom = styled.div`
  color: #bdb7b7;
  position: absolute;
  margin-left: 60vw;
  margin-top: -1.5vh;
`;

const SideBox = styled.div`
  color: white;
  border: 1px solid #bdb7b7;
  padding: 2vw;
  margin-top: 10vh;
  margin-left: 90vw;
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
  font-size: 1vw;
  color: #c778dd;
  span {
    font-family: Source Code Pro;
    padding-top: 1.5vh;
  }
`;
const Container = styled.div`
  display: flex;
  margin-right: 10vw;
  img {
    width: 15vw;
    /* height: 55vh; */
    border-radius: 1vw;
    opacity: 0.8;
    box-shadow: 2vw 2vh 2vw;
  }
`;
const About = styled.div`
  padding-left: 7.5vw;
  padding-top: 5vh;
  padding-right: 4vw;
  text-align: justify;
  color: #abb2bf;
  font-family: Fira Code;
`;

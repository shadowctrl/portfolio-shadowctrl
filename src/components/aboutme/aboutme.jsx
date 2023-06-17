import React, { useEffect } from "react";
import styled from "styled-components";
import Project from "../projects/project";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import { OnGoingWorks } from "../works/works";
import { StraightOutlined } from "@mui/icons-material";
import ReactGA from "react-ga";
const aboutme = () => {
  useEffect(() => {
    document.title = "About Me";
    ReactGA.initialize("G-6LSJFNRLP1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Parent>
      <Head>
        <span>/</span>About-Me
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
          As a MERN stack developer with expertise in Discord API, Google API,
          Firebase, and Cyber Security, I am excited to offer my services as a
          freelancer. With a proven track record of building robust and scalable
          applications using cutting-edge technologies, I am confident that I
          can deliver high-quality work to clients with diverse needs.
          <br /> <br />
          Whether it's building a custom web application, integrating
          third-party APIs, or managing a database on Firebase, I have the
          skills and experience to get the job done. As a Cyber Security
          graduate, I understand the importance of building secure and resilient
          applications, and am committed to implementing industry best practices
          in all my projects.
          <br /> <br />
          With excellent communication skills, a strong work ethic, and a
          dedication to delivering projects on time and within budget, I am
          confident that I can exceed your expectations as a freelancer.
        </About>
        <img src="/images/shadowctrl.webp" alt="Shadowctrl" />
      </Container>
      <Skills>
        <Head>
          <span>#</span>Skills
          <Dash />
        </Head>

        <SkillContainer>
          <Databases>
            <SkillTitle>FRAMEWORKS</SkillTitle>
            <ul>
              <li>TAILWIND</li>
              <li>BOOTSTRAP</li>
              <li>METASPLOIT</li>
            </ul>
          </Databases>

          <Os>
            <SkillTitle>OPERATING SYSTEMS</SkillTitle>
            <ul>
              <li>Kali Linux</li>
              <li>Parrot Security</li>
              <li>Black Arch</li>
              <li>Garuda Linux</li>
              <li>Windows</li>
            </ul>
          </Os>
          <Languages>
            <SkillTitle>LANGUAGES</SkillTitle>
            <ul>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Python3</li>
              <li>Html</li>
              <li>Css</li>
              <li>MongoDB</li>
            </ul>
          </Languages>
          <Other>
            <SkillTitle>OTHERS</SkillTitle>
            <ul>
              <li>Cyber Security</li>
              <li>Networking</li>
              <li>Discord API</li>
              <li>Google API</li>
              <li>Instagram API</li>
              <li>Linux System Administration</li>
            </ul>
          </Other>
        </SkillContainer>
      </Skills>
      <Head>
        <span>#</span>Current Works
        <Dash />
      </Head>
      <HdrStrongIcon
        style={{
          fontSize: "5vw",
          position: "absolute",
          right: "2vw",
          color: "slategray",
        }}
      />
      <OnGoingWorks />
      <HdrStrongIcon
        style={{
          fontSize: "5vw",
          position: "absolute",
          left: "2vw",
          color: "slategray",
        }}
      />
      <PersonalTouch>
        <Hobbies>
          <Head>
            <span>#</span>Hobbies <span>/</span> Interests <Dash />
          </Head>
          <p>
            I am not completely immersed in the Cyber World, you could find me
            exploring outdoors. I have a deep love for travelling and bike rides
            which helps me recharge and gain fresh perspectives
          </p>
        </Hobbies>
        <Facts>
          <Head>
            <span>#</span>My-Fun-Facts
            <Dash />
            <AllInclusiveIcon
              style={{
                marginLeft: "1vw",
                fontSize: "3vw",
                color: "slategray",
              }}
            />
            <StraightLine2 />
          </Head>
          <StraightLine />
          <FactsContainer>
            <FactsItem>I winter more than summer</FactsItem>
            <FactsItem>I often go for a short ride</FactsItem>
            <FactsItem>I love to Travel places</FactsItem>
            <FactsItem>I listen to music when i work</FactsItem>
            <FactsItem>I used to play basket ball</FactsItem>
            <FactsItem>I love to play pc games</FactsItem>
            <FactsItem>Iam not a mobilized </FactsItem>
            <FactsItem>I am not an avid mobile device user</FactsItem>
          </FactsContainer>
        </Facts>
      </PersonalTouch>
    </Parent>
  );
};

export default aboutme;

const Parent = styled.div`
  padding-top: 5vh;
  font-family: Fira Code;
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
const SideBox = styled.div`
  color: white;
  border: 1px solid #bdb7b7;
  padding: 2vw;
  margin-top: 10vh;
  margin-left: 90vw;
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
    width: 15vw;
    /* height: 55vh; */
    border-radius: 1vw;
    opacity: 0.8;
    box-shadow: 2vw 2vh 2vw;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0vw;
    padding: 0vw;
    img {
      min-width: 85vw;
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

const Skills = styled.div`
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
`;
const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  column-gap: 3vw;
  margin-top: 5vh;
  color: #abb2bf;
  font-family: Fira Code;
  font-size: 1.2vw;
  ul {
    list-style-type: armenian;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 2vh;
    font-size: 3vw;
    row-gap: 2vh;
    column-gap: 3vw;
    margin-left: 5vw;
    margin-right: 5vw;
    align-items: center;
  }
`;
const SkillTitle = styled.div`
  color: white;
  text-align: center;
  padding-top: 1.5vh;
`;

const Languages = styled.div`
  border: 1px solid #abb2bf;
  padding: 1vw;
`;
const Databases = styled.div`
  border: 1px solid #abb2bf;
  padding: 1vw;
`;
const Os = styled.div`
  border: 1px solid #abb2bf;
  padding: 1vw;
`;
const Other = styled.div`
  border: 1px solid #abb2bf;
  padding: 1vw;
`;

const PersonalTouch = styled.div`
  margin-top: 10vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 6vh;
  }
`;
const HobbieTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const Hobbies = styled.div`
  p {
    font-family: Fira Code;
    margin-top: 5vh;
    margin-left: 10vw;
    margin-right: 10vw;
    color: #bcc4d3;
    font-size: 1vw;
    padding: 0.8vw;
    border: 1px solid #abb2bf;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    p {
      font-size: 3vw;
      margin-top: 2vh;
      margin-left: 3vw;
      margin-right: 3vw;
      padding: 2vw;
      text-align: justify;
      border: 1px solid #67696d;
    }
  }
`;

const Facts = styled.div``;
const FactsContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #bcc4d3;
  font-family: Fira Code;
  margin-right: 10vw;
  margin-left: 10vw;
  column-gap: 1vw;
  row-gap: 2vh;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-left: 2vw;
    margin-right: 2vw;
    font-size: 3vw;
  }
`;
const FactsItem = styled.div`
  padding: 0.5vw;
  border: 1px solid #7b7a7a;
`;

const StraightLine = styled.div`
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  margin-top: 15vh;
  height: 15vh;
  width: 15vh;
  position: absolute;
  margin-left: 10vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 29vh;
    margin-left: 0vw;
    left: 1.7vw;
    height: 5vh;
    width: 5vh;
  }
`;

const StraightLine2 = styled.div`
  border-right: 1px solid white;
  border-top: 1px solid white;
  margin-top: 15vh;
  height: 15vh;
  width: 15vh;
  position: absolute;
  right: 8vw;
  margin-left: 10vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: 13vh;
    margin-right: 0vw;
    right: 1.7vw;
    height: 5vh;
    width: 5vh;
  }
`;

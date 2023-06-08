import React from "react";
import styled from "styled-components";
import Project from "../projects/project";
import { OnGoingWorks } from "../works/works";
const aboutme = () => {
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
          As a highly motivated MERN stack developer with expertise in Discord
          API, Google API, Firebase, and Cyber Security, I am excited to offer
          my services as a freelancer. With a proven track record of building
          robust and scalable applications using cutting-edge technologies, I am
          confident that I can deliver high-quality work to clients with diverse
          needs.
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
        <img src="/images/shadowctrl.jpg" alt="Shadowctrl" />
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
      <OnGoingWorks />

      <PersonalTouch>
        <Hobbies>
          <Head>
            <span>#</span>Hobbies &nbsp;<span>/</span>&nbsp; Interests <Dash />
          </Head>
          <p>
            Iam not immersed in the Cyber World, you could find me exploring
            outdoors. I have a deep love for travelling and bike rides which
            helps me recharge and gain fresh perspectives
          </p>
        </Hobbies>
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

const Skills = styled.div``;
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

const PersonalTouch = styled.div``;
const Hobbies = styled.div`
  p {
    font-family: poppins;
    margin-top: 5vh;
    margin-left: 10vw;
    margin-right: 10vw;
    color: #bcc4d3;
    font-size: 1vw;
    padding: 0.8vw;
    border: 1px solid #abb2bf;
  }
`;

import React from "react";
import styled from "styled-components";
import CropIcon from "@mui/icons-material/Crop";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const IconCrop = (size, mt = "5vh", mtr = "10vw") => {
  return (
    <CropIcon
      style={{
        color: "slategrey",
        fontSize: size,
        marginTop: mt,
        marginLeft: mtr,
        marginBottom: mt,
      }}
    />
  );
};
const Skills = () => {
  return (
    <Parent>
      <Head>
        <span> # </span> Skills
        <Dash />
      </Head>

      <SkillParent>
        <Mobile>{IconCrop("50vw", "2vh", "0vw")}</Mobile>
        <Desktop>{IconCrop("10vw")}</Desktop>
        <Skill>
          <Languages>
            <SkillTitle> LANGUAGES</SkillTitle>

            <ul>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Python3</li>
              <li>Html</li>
              <li>Css</li>
              <li>MongoDB</li>
            </ul>
          </Languages>

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
        </Skill>
      </SkillParent>
    </Parent>
  );
};

export default Skills;

const Parent = styled.div`
  padding-top: 5vh;
  font-family: Fira Code;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
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
  border-top: 1px solid #c778dd;
  width: 38vw;
  margin-left: 2vw;
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
const SkillParent = styled.div`
  display: flex;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
const Skill = styled.div`
  border: 0.2vw dotted #c778dd;
  padding: 2vh 1vw;
  border-radius: 1vw;
  margin-top: 5vh;
  margin-left: 5vw;
  color: white;
  font-size: 1.1vw;
  display: grid;
  grid-column-gap: 5vw;
  grid-row-gap: 5vh;
  grid-template-columns: 15vw 15vw 15vw;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 5vw;
    margin: 0;
    display: grid;
    grid-template-columns: none;
    grid-auto-flow: row dense;
    grid-column-gap: 0;
    grid-row-gap: 2vh;
    place-content: center;
    padding: 2vw;
    border: 0.7vw dotted #c778dd;
    font-size: 4vw;
  }
`;

const SkillTitle = styled.div`
  border: 1px solid #bdb7b7;
  text-align: center;
  padding: 0.3vw;
  margin: 0.3vw;
  color: #c776dd;
  font-size: 1.3vw;
  font-weight: 700;
  font-family: Fira Code;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 5vw;
  }
`;

const Languages = styled.div`
  border: 1px solid white;
  border-radius: 1vw;
  /* margin-right: 70vw; */
  padding: 0.5vw;
  text-align: left;
  font-family: Fira Code;
  ul {
    padding: 1vh 0vw;
    margin-left: 3vw;
    list-style-type: circle;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    ul {
      margin-left: 7vw;
    }
  }
`;
const Databases = styled.div`
  border: 1px solid white;

  border-radius: 1vw;
  /* margin-right: 70vw; */
  padding: 0.5vw;
  text-align: left;
  font-family: Fira Code;
  ul {
    padding: 1vh 0vw;
    margin-left: 3vw;
    list-style-type: circle;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    ul {
      margin-left: 7vw;
    }
  }
`;
const Other = styled.div`
  border: 1px solid white;
  border-radius: 1vw;
  /* margin-right: 70vw; */
  padding: 0.5vw;
  text-align: left;
  font-family: Fira Code;
  ul {
    padding: 1vh 0vw;
    margin-left: 3vw;
    list-style-type: circle;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    ul {
      margin-left: 7vw;
    }
  }
`;
const Os = styled.div`
  border: 1px solid white;
  border-radius: 1vw;
  /* margin-right: 70vw; */
  padding: 0.5vw;
  text-align: left;
  font-family: Fira Code;
  ul {
    padding: 1vh 0vw;
    margin-left: 3vw;
    list-style-type: circle;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    ul {
      margin-left: 7vw;
    }
  }
`;

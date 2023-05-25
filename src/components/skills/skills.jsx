import React from "react";
import styled from "styled-components";
import CropIcon from "@mui/icons-material/Crop";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
const Skills = () => {
  return (
    <Parent>
      <Head>
        <span> # </span> Skills
        <Dash />
      </Head>

      <SkillParent>
        <CropIcon
          style={{
            color: "slategrey",
            fontSize: "5vw",
            marginTop: "5vh",
            marginLeft: "10vw",
          }}
        />
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
  width: 38vw;
  margin-left: 2vw;
`;
const SkillParent = styled.div`
  display: flex;
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
`;

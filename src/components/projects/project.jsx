import React from "react";
import styled from "styled-components";
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import projects from "./projects";
import AutorenewSharp from "@material-ui/icons/AutorenewSharp";

const Project = () => {
  const handleProjects = () => {
    console.log("Handle click view all projects");
  };

  return (
    <Projects>
      <Head>
        <span>#</span>Projects
        <Dash />
        <Viewall onClick={handleProjects()}>
          View all <EastSharpIcon style={{ fontSize: "1.3vw" }} />
        </Viewall>
      </Head>
      <DragIndicatorSharpIcon
        style={{
          fontSize: "6vw",
          color: "slategrey",
          height: "10vh",
        }}
      />
      <ProjectsRenderer>
        {projects.map((value, index) => (
          <ProjectContainer key={value.title}>
            <ProjectImage>
              <img src={value.image} />
            </ProjectImage>
            <ProjectLang>{value.languages} </ProjectLang>
            <ProjectTitle>{value.title}</ProjectTitle>
            <ProjectDes>{value.description}</ProjectDes>
            <ProjectButtons>
              {value.live ? (
                <ProjectLiveButton onClick={() => window.open(value.live)}>
                  Live{" "}
                  <ArrowOutwardSharpIcon
                    style={{ fontSize: "1vw", marginLeft: "0.3vw" }}
                  />
                </ProjectLiveButton>
              ) : (
                ""
              )}

              {value.cached ? (
                <ProjectCachedButton onClick={() => window.open(value.cached)}>
                  Cached{" "}
                  <AutorenewSharp
                    style={{ fontSize: "1vw", marginLeft: "0.3vw" }}
                  />
                </ProjectCachedButton>
              ) : (
                ""
              )}
            </ProjectButtons>
          </ProjectContainer>
        ))}
      </ProjectsRenderer>
    </Projects>
  );
};

export default Project;

const Projects = styled.div`
  padding-top: 5vh;
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
  width: 35vw;
  margin-left: 2vw;
`;

const Viewall = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: lightslategray;
  font-size: 1.2vw;
  font-family: Fira Code;
  margin-left: 30vw;

  :hover {
    color: #c778dd;
    animation: transition 0.3s linear forwards;
    @keyframes transition {
      100% {
        transform: translateX(0.5vw);
      }
    }
  }
`;

const ProjectsRenderer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-left: 10vw;
  margin-right: 10vw;
  color: white;
`;
const ProjectContainer = styled.div`
  margin-right: 10vw;
  border: 1px solid white;
  box-shadow: -1vw 1vh 2vh #c778dd;
  padding-bottom: 2vh;
`;
const ProjectImage = styled.div`
  img {
    width: 20vw;
    height: 20vh;
  }
`;
const ProjectLang = styled.div`
  border: 1px solid white;
  padding: 0.5vw;
  text-align: center;
  color: #bdb7b7;
  font-family: Fira Code;
`;
const ProjectTitle = styled.div`
  padding: 1vw;
  font-family: poppins;
  font-size: 1.5vw;
  font-weight: 600;
  color: #c778dd;
  text-align: center;
`;
const ProjectDes = styled.div`
  padding-bottom: 1vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  font-family: Fira Code;
  color: #bdb7b7;
  text-align: center;
`;
const ProjectLiveButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c778dd;
  padding: 0.5vh 2vw;
`;
const ProjectCachedButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdb7b7;
  padding: 0.5vh 2vw;
`;
const ProjectButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

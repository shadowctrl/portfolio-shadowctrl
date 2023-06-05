import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import projects from "../projects/projects";
import { onGoingProjects } from "../projects/projects";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import AutorenewSharp from "@material-ui/icons/AutorenewSharp";

const works = () => {
  return (
    <Parent>
      <Navbar />
      <Head>
        <span>/</span>Projects
      </Head>

      <Child>
        {" "}
        <span>#</span>Completed Projects
      </Child>
      <ProjectMain>
        <Box1 />
        <Box />
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
                  <ProjectCachedButton
                    onClick={() => window.open(value.cached)}
                  >
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
      </ProjectMain>

      <Child2>
        <span>#</span>On-Going Projects
      </Child2>
      <ProjectsRenderer>
        {onGoingProjects.map((value, index) => (
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

              {value.progress ? (
                <ProjectCachedButton
                  onClick={() => window.open(value.progress)}
                >
                  Progress{" "}
                  <ArrowOutwardSharpIcon
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
    </Parent>
  );
};

export default works;

const Parent = styled.div`
  /* margin-left: 10vw; */
`;
const Dot = styled.div`
  position: absolute;
  color: #bdb7b7;
  writing-mode: vertical-lr;
  font-size: 2.5vw;
  display: flex;
  span {
    padding-top: 2vh;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-family: Fira Code;
  margin-left: 10vw;
  margin-top: 10vh;
  font-size: 2vw;
  font-weight: 600;
  span {
    color: #c778dd;
  }
`;

const Box = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid #c778dd;
  box-shadow: -1vw 0 3vw 1vw #c778dd;
  padding: 50vh 0vw;
`;

const Box1 = styled.div`
  position: absolute;
  left: 0;
  border: 1px solid #c778dd;
  box-shadow: 1vw 0 3vw 1vw #c778dd;
  padding: 50vh 0vw;
`;
const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Child = styled.div`
  margin-left: 10vw;
  margin-top: 5vh;
  color: white;
  font-size: 1.4vw;
  font-weight: 500;
  font-family: Source Code Pro;
  span {
    color: #c778dd;
  }
`;

const Child2 = styled.div`
  margin-top: 10vh;
  margin-left: 10vw;
  color: white;
  font-size: 1.4vw;
  font-weight: 500;
  font-family: Source Code Pro;
  span {
    color: #c778dd;
  }
`;
const ProjectsRenderer = styled.div`
  display: grid;
  /* grid-auto-flow: column; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 5vh;
  margin-top: 2vh;
  margin-left: 10vw;
  margin-right: 10vw;
  color: white;
`;
const ProjectContainer = styled.div`
  margin-right: 10vw;
  border: 1px solid white;
  /* box-shadow: -1vw 1vh 2vh #c778dd; */
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

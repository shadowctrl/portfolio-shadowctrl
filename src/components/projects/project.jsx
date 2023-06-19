import React, { useEffect } from "react";
import styled from "styled-components";
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import projects from "./projects";
import AutorenewSharp from "@material-ui/icons/AutorenewSharp";
import ReactGA from "react-ga";
export const ViewAll = (size) => {
  return (
    <Viewall onClick={() => window.open("/Works", "_self")}>
      View all <EastSharpIcon style={{ fontSize: `${size}` }} />
    </Viewall>
  );
};
export const Project = (Title) => {
  // useEffect(() => {
  //   ReactGA.initialize("G-6LSJFNRLP1");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <Projects>
      <Head>
        <span>#</span>
        {Title}

        <Dash />
        <Mobile>{ViewAll("4vw")}</Mobile>
        <Desktop>{ViewAll("1.5vw")}</Desktop>
      </Head>
      <DragIndicatorSharpIcon
        style={{
          fontSize: "6vw",
          color: "slategrey",
          height: "10vh",
        }}
      />
      <ProjectsRenderer>
        {projects.slice(0, 3).map((value, index) => (
          <ProjectContainer key={value.title}>
            <ProjectImage>
              <img src={value.image} alt="Projects" />
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
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    padding: 0;
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
  width: 35vw;
  margin-left: 2vw;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    width: 30vw;
  }
`;
const Viewall = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: lightslategray;
  font-size: 1.2vw;
  font-family: Fira Code;
  margin-left: 30vw;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    margin: 0;
    margin-left: 10vw;
    font-size: 3vw;
  }

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
const Mobile = styled.div`
  display: none;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Desktop = styled.div`
  display: block;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
`;
const ProjectsRenderer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-left: 10vw;
  margin-right: 10vw;
  color: white;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    row-gap: 5vh;
    column-gap: 3vw;
  }
`;
const ProjectContainer = styled.div`
  margin-right: 10vw;
  border: 1px solid white;
  box-shadow: -1vw 1vh 2vh #c778dd;
  padding-bottom: 2vh;
  width: min-content;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-right: 0;
    box-shadow: -1vh 1vh 1.5vh #c778dd;
  }
`;
const ProjectImage = styled.div`
  img {
    width: 20vw;
    height: 20vh;
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    img {
      width: 80vw;
    }
  }
`;
const ProjectLang = styled.div`
  border: 1px solid white;
  padding: 0.5vw;
  text-align: center;
  color: #bdb7b7;
  font-family: Fira Code;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
  }
`;
const ProjectTitle = styled.div`
  padding: 1vw;
  font-family: poppins;
  font-size: 1.5vw;
  font-weight: 600;
  color: #c778dd;
  text-align: center;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6vw;
  }
`;
const ProjectDes = styled.div`
  padding-bottom: 1vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  font-family: Fira Code;
  color: #bdb7b7;
  text-align: center;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    padding-bottom: 2vh;
  }
`;
const ProjectLiveButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c778dd;
  padding: 0.5vh 2vw;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    padding: 0.5vh 3vw;
    font-size: 4vw;
  }
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

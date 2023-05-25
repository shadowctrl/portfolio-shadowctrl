import React from "react";
import styled from "styled-components";

const aboutme = () => {
  return (
    <Parent>
      <Head>
        <span>#</span>About-Me
        <Dash />
      </Head>
      <Container>
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
        <img src="/images/dp.jpg" alt="Shadowctrl" />
      </Container>
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

const Container = styled.div`
  display: flex;
  margin-right: 20vw;
  img {
    width: 18vw;
    height: 55vh;
    border-radius: 1vw;
    opacity: 0.8;
    box-shadow: 2vw 2vh 2vw;
  }
`;
const About = styled.div`
  padding-left: 10vw;
  padding-top: 5vh;
  padding-right: 5vw;
  text-align: justify;
  color: #abb2bf;
  font-family: Fira Code;
`;

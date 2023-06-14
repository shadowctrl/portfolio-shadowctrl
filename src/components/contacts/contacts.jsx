import React from "react";
import styled from "styled-components";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const IconDiscord = (size = "1.3vw", pr = "0.5vw", pb = "1vh") => {
  return (
    <>
      <BsDiscord
        size={size}
        style={{
          verticalAlign: "middle",
          paddingRight: pr,
          paddingBottom: pb,
        }}
      />
      Raghav#4530
    </>
  );
};

const IconEmail = (size = "1.3vw", pr = "0.5vw") => {
  return (
    <>
      <MdEmail
        size={size}
        style={{
          verticalAlign: "middle",
          paddingRight: pr,
        }}
      />
      shadowctrl@outlook.com
    </>
  );
};
const Contacts = () => {
  return (
    <Parent>
      <Head>
        <span>#</span>Contacts
        <Dash />
      </Head>

      <Contact>
        <p>
          {" "}
          I'm Interested in freelance oppurtunities. However, if you have any
          other queries don't hesitate to contact me.{" "}
        </p>
        <span>
          <h3> Message Me Here</h3>
          {/* <br /> */}
          <Container>
            <Mobile>{IconDiscord("5vw", "0.5vw", "0vw")}</Mobile>
            <Desktop>{IconDiscord()}</Desktop>
          </Container>

          <Container>
            <Mobile>{IconEmail("5vw")}</Mobile>
            <Desktop>{IconEmail()}</Desktop>
          </Container>
        </span>
      </Contact>
    </Parent>
  );
};

export default Contacts;

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

const Contact = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2vh;
  margin-left: 10vw;

  p {
    font-family: Fira Code;
    color: #abb2bf;
    padding-right: 3vw;
  }
  span {
    color: #abb2bf;
    font-size: 1vw;
    font-family: Fira Code;
    margin-right: 10vw;
    border: 1px solid #bdbdbd;
    padding: 0.8vw;
    text-align: left;

    h3 {
      font-family: Fira code;
      color: #c77;
      font-size: 1.2vw;
      margin-top: -1vh;
      margin-bottom: 1vh;
      text-align: center;
    }
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    flex-direction: column;
    margin-left: 5vw;
    margin-right: 5vw;
    p {
      padding: 0;
    }
    span {
      padding: 2.5vw;

      h3 {
        font-size: 4vw;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Fira Code;
  font-size: 1.1vw;
  MdEmail {
    size: "2vw";
  }
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    font-size: 4vw;
  }
`;

const Mobile = styled.div`
  display: none;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    align-items: center;
  }
`;
const Desktop = styled.div`
  display: flex;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
`;

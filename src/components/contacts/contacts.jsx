import React from "react";
import styled from "styled-components";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
            <BsDiscord
              size="1.3vw"
              style={{
                verticalAlign: "middle",
                paddingRight: "0.5vw",
                paddingBottom: "1vh",
              }}
            />
            Raghav#4530
          </Container>
          {/* <br /> */}
          <Container>
            <MdEmail
              size="1.3vw"
              style={{
                verticalAlign: "middle",
                paddingRight: "0.5vw",
              }}
            />
            shadowctrl@outlook.com
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
      margin-bottom: 1vh;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Fira Code;
  font-size: 1.1vw;
`;

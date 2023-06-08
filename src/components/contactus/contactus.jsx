import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import Contacts from "../contacts/contacts";
import VerifiedIcon from "@mui/icons-material/Verified";
const contactus = () => {
  return (
    <Parent>
      <Contacts />

      <Head>
        <span>#</span>All-media
      </Head>
      <Media>
        <li onClick={() => window.open("https://instagram.com/_.shadowctrl._")}>
          <img src="/images/instagram.png" alt="" width="50vw" />
          _.shadowctrl._{" "}
          <VerifiedIcon
            style={{
              // color: "#4FB6EC",
              fontSize: "1vw",
              marginLeft: "0.02vw",
            }}
          />
        </li>
        <li onClick={() => window.open("https://github.com/shadowctrl")}>
          <img src="/images/github.png" alt="" width="50vw" />
          shadowctrl
          <VerifiedIcon
            style={{
              // color: "#4FB6EC",
              fontSize: "1vw",
              marginLeft: "0.02vw",
            }}
          />
        </li>
        <li onClick={() => window.open("https://youtube.com/@shadowctrl")}>
          <span>
            <img src="/images/youtube.png" alt="" width="35vw" />
          </span>
          shadowctrl
          <VerifiedIcon
            style={{
              // color: "#4FB6EC",
              fontSize: "1vw",
              marginLeft: "0.02vw",
            }}
          />
        </li>
      </Media>
    </Parent>
  );
};

export default contactus;

const Parent = styled.div`
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

const Media = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10vw;
  margin-top: 5vh;
  font-family: Source Code Pro;
  span {
    margin-right: 0.3vw;
    margin-left: 1vw;
  }
  li {
    display: flex;
    align-items: center;
    color: #abb2bf;
    font-family: Source Code Pro;
    margin-right: 1vw;
  }

  li:hover {
    color: #c778dd;
    cursor: pointer;
    transition: all ease-in-out;
  }
`;

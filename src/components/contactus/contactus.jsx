import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import Contacts from "../contacts/contacts";
import VerifiedIcon from "@mui/icons-material/Verified";

const Insta = (width = "50vw", size = "1vw", ml = "0.02vw") => {
  return (
    <li onClick={() => window.open("https://instagram.com/_.shadowctrl._")}>
      <img src="/images/instagram.webp" alt="Instagram" width={width} />
      _.shadowctrl._{" "}
      <VerifiedIcon
        style={{
          // color: "#4FB6EC",
          fontSize: size,
          marginLeft: ml,
        }}
      />
    </li>
  );
};

const Github = (width = "50vw", size = "1vw", ml = "0.02vw") => {
  return (
    <li onClick={() => window.open("https://github.com/shadowctrl")}>
      <img src="/images/github.webp" alt="Github" width={width} />
      shadowctrl
      <VerifiedIcon
        style={{
          // color: "#4FB6EC",
          fontSize: size,
          marginLeft: ml,
        }}
      />
    </li>
  );
};

const Youtube = (width = "50vw", size = "1vw", ml = "0.02vw") => {
  return (
    <li onClick={() => window.open("https://youtube.com/@shadowctrl")}>
      <span>
        <img src="/images/youtube.webp" alt="Youtube" width={width} />
      </span>
      shadowctrl
      <VerifiedIcon
        style={{
          // color: "#4FB6EC",
          fontSize: size,
          marginLeft: ml,
        }}
      />
    </li>
  );
};
const contactus = () => {
  return (
    <Parent>
      <Contacts />
      <Head>
        <span>#</span>All-media <Dash />
      </Head>
      <Media>
        <Mobile>
          {Insta("50vw", "4vw")}
          {Github("50vw", "4vw")}
          {Youtube("35vw", "4vw")}
        </Mobile>
        <Desktop>
          {Insta()}
          {Github()}
          {Youtube()}
        </Desktop>
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
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: block;
    margin: 0;
    margin-top: 2vh;
  }
`;

const Mobile = styled.div`
  display: none;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
const Desktop = styled.div`
  display: flex;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
`;

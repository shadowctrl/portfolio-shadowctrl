import React from "react";
import styled from "styled-components";
import union from "../../assets/Union.svg";
import discord from "../../assets/Discord.svg";
import thm from "../../assets/thm.svg";
import items from "./components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  return (
    <Parent>
      <Line></Line>
      <Socials>
        <InstagramIcon
          onClick={() => window.open("https://instagram.com/_.shadowctrl._")}
        />
        <br />
        <GitHubIcon
          onClick={() => window.open("https://github.com/shadowctrl")}
        />
        <br />
        <img
          src={thm}
          onClick={() => window.open("https://tryhackme.com/p/shadowctrl")}
        />
      </Socials>
      <Img onClick={() => window.open("/", "_self")}>
        <img src={union} />
        <h1> shadowctrl </h1>
      </Img>

      <Components>
        <ul>
          {items.map((value, index) => (
            <li key={value} onClick={() => window.open(`/${value}`, "_self")}>
              <span>#</span>
              {value}
            </li>
          ))}
        </ul>
      </Components>
    </Parent>
  );
};

export default Navbar;

const Parent = styled.div`
  padding-left: 10vw;
  padding-top: 5vh;
  padding-right: 10vw;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    width: 1.2vw;
  }
  h1 {
    padding-top: 0.5vh;
    font-size: 1vw;
    margin-left: 0.4vw;
    color: #c778dd;
    font-family: mars;
  }
`;

const Line = styled.div`
  border-left: 1px solid #abb2bf;
  position: absolute;
  margin-left: -6.3vw;
  margin-top: -10vh;
  height: 19vh;
`;
const Socials = styled.div`
  cursor: pointer;
  position: absolute;
  margin-top: 10vh;
  color: #abb2bf;
  margin-left: -7vw;
  img {
    width: 1.8vw;
  }
`;
const Components = styled.div`
  color: #e8dcdc;
  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
  li {
    margin-right: 1vw;
    cursor: pointer;
  }
  li:hover {
    animation: bounce 0.1s infinite linear;
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-0.3vh);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  span {
    color: #c778dd;
  }
`;

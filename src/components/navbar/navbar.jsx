import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import union from "../../assets/Union.svg";
import thm from "../../assets/thm.svg";
import items from "./components";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbarParent">
      <div className="navbarLine"></div>
      <div className="navbarSocials">
        <Link href="https://instagram.com/_.shadowctrl._" target="_blank">
          <InstagramIcon
            className="navbarSocialItem1"
            style={{ fontSize: "1.8vw" }}
          />
        </Link>
        <br />
        <Link href="https://github.com/shadowctrl" target="_blank">
          <GitHubIcon
            className="navbarSocialItem2"
            style={{ fontSize: "1.8vw" }}
          />
        </Link>
        <br />
        <Link href="https://tryhackme.com/p/shadowctrl" target="_blank">
          <Image alt="Try Hack Me" className="navbarSocialItem3" src={thm} />
        </Link>
      </div>
      <Link href="/">
        <div className="navbarImg">
          <Image src={union} alt="Logo Union" />
          <h1> shadowctrl </h1>
        </div>
      </Link>

      <div className="navbarComponents">
        <ul>
          {items.map((value, index) => (
            <li key={value.name}>
              <Link href={value.path}>
                <span>#</span>
                {value.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

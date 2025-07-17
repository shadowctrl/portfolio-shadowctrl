import "./navbar.css";
import union from "../../assets/Union.svg";
import items from "./components";
import Link from "next/link";
import Image from "next/image";
import Navmob from "./navMob";

const Navbar = () => {
  return (
    <div>
      <div className="navbarParent" id="nav-parent">
        <Link href="/">
          <div className="navbarImg">
            <Image src={union} alt="Logo Union" width={18} height={14} />
            <h1> shadowctrl </h1>
          </div>
        </Link>

        <div className="navbarComponents">
          <ul>
            {items.map((value, index) => (
              <Link href={value.path} key={value.name}>
                <span>#</span>
                {value.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>{" "}
      <div className="navbar-navmob">
        <Navmob />
      </div>
    </div>
  );
};

export default Navbar;

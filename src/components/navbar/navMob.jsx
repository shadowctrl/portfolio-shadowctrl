"use client";
import "./navmob.css";
import items from "./components";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import union from "../../assets/Union.svg";

const handleIconClick = () => {
  const navmobParent = document.querySelector(".navmob-parent");
  const navmobIcon = document.querySelector(".navmob-icon");
  const navmobComp = document.querySelector(".navmob-components");

  if (navmobParent.classList.contains("navmob-parent-active")) {
    navmobComp.classList.remove("fade-in");
    navmobComp.classList.add("fade-out");
    setTimeout(() => {
      navmobParent.classList.remove("navmob-parent-active");
      navmobIcon.classList.remove("navmob-icon-active");
      navmobComp.classList.add("navcomp-disable");
    }, 1000);
  } else {
    navmobIcon.classList.add("navmob-icon-active");
    navmobParent.classList.add("navmob-parent-active");
    navmobComp.classList.add("fade-in");
    navmobComp.classList.remove("fade-out");
    navmobComp.classList.remove("navcomp-disable");
  }
};

const Navmob = ({}) => {
  return (
    <div className="navmob-parent">
      <div className="navMob-head">
        <Link href="/">
          <div className="navbarImg">
            <Image src={union} alt="Logo Union" width={18} height={14} />
            <h1> shadowctrl </h1>
          </div>
        </Link>
        <RxCross2 className="navmob-icon" onClick={handleIconClick} />
      </div>

      <div className="navmob-components">
        <ul>
          {items.map((value, index) => (
            <Link href={value.path} key={value.name}>
              <span>#</span>
              {value.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navmob;

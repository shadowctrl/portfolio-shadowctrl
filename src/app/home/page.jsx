import "./home.css";
import "../works/works.css";
import Link from "next/link";
import Image from "next/image";
import projects from "../works/projects";
import Skills from "../../components/skills/skills";
import Contactme from "../contactme/page";

const Home = () => {
  const ViewAll = (size) => {
    return (
      <div className="homeViewall">
        View all
        <span style={{ fontSize: size }}></span>
      </div>
    );
  };
  return (
    <div className="homeParent">
      <div className="homeMain1">
        <div className="homeIntro">
          <h1>
            Shadowctrl is a <span> Security Professional </span>
            <br />
            and a <span>Mern Stack Developer</span>
          </h1>
          <p>
            He develops robust security mechanisms to protect critical systems
            and crafts responsive websites that meet creativity
          </p>
          <Link href="/contactme">
            <button className="homeContact">Contact Me</button>
          </Link>
        </div>
        <div className="homeImg">
          <Image
            src="/assets/anonymous.webp"
            alt="Anonymous"
            width={500}
            height={500}
          />
          <p className="homePara">
            <span className="homeBox"></span>
            Currently working as Freelancer
          </p>
        </div>
      </div>
      <div className="homeMain2">
        {/* <div className="homeFormatQuoteTop">
          <div className="homeFormatQuoteIcon"></div>
        </div> */}
        <div className="homeQuote">
          The Quieter You Become The More You Able To Hear
        </div>
        {/* <div className="homeFormatQuoteBottom">
          <div className="homeFormatQuoteIcon"></div>
        </div> */}
        <div className="homeProjectPadding">
          <div className="homeHead">
            <span>#</span>
            Projects
            <div className="homeDash"></div>
            <div className="homeMobile">{ViewAll("4vw")}</div>
            <div className="homeDesktop">{ViewAll("1.5vw")}</div>
          </div>

          <div className="worksProjectsRenderer">
            {projects.slice(0, 3).map((value, index) => (
              <div className="worksProjectContainer" key={value.title}>
                <div className="worksProjectImage">
                  <Image
                    src={value.image}
                    alt="Projects"
                    width="500"
                    height="500"
                  />
                </div>
                <div className="worksProjectLang">{value.languages}</div>
                <div className="worksProjectTitle">{value.title}</div>
                <div className="worksProjectDes">{value.description}</div>
                <div className="worksProjectButtons">
                  {value.live ? (
                    <button className="worksProjectLiveButton">
                      <Link href={value.live} target="_blank">
                        {" "}
                      </Link>
                      Live{" "}
                      {/* <ArrowOutwardSharpIcon
                      style={{ fontSize: "1vw", marginLeft: "0.3vw" }}
                    /> */}
                    </button>
                  ) : (
                    ""
                  )}

                  {value.cached ? (
                    <button className="worksProjectCachedButton">
                      <Link href={value.cached} target="_blank">
                        Cached{" "}
                        {/* <AutorenewSharp
                        style={{ fontSize: "1vw", marginLeft: "0.3vw" }}
                      /> */}
                      </Link>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skills />
        <div className="homeHead">
          <span>#</span>About Me
          <div className="homeDash" />
        </div>
        <div className="homeContainer">
          <div className="homeBorder">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>D</span>
            <span>O</span>
            <span>W</span>
            <span>C</span>
            <span>T</span>
            <span>R</span>
            <span>L</span>
          </div>
          <div className="homeAbout">
            With over 3+ years of learnings in the field of cybersecurity, I
            bring a wealth of knowledge to the table. Since 2018, I have been
            immersing myself in the world of cybersecurity, continuously
            expanding my skills and staying ahead of emerging threats. My
            passion lies in securing digital assets and ensuring the utmost
            protection of sensitive information.
            <br /> <br />
            In addition to my cybersecurity prowess, I am also proficient in
            developing websites using the MERN stack. This combination of skills
            allows me to not only create dynamic and engaging web applications
            but also integrate robust security measures into their foundation. I
            pride myself on delivering secure software solutions that prioritize
            the confidentiality and integrity of user data.
            <br /> <br />
            With excellent communication skills, a strong work ethic, and a
            dedication to delivering projects on time and within budget, I am
            confident that I can exceed your expectations as a freelancer.
          </div>
          <Image
            src="/assets/shadowctrl.webp"
            alt="Shadowctrl"
            width={500}
            height={200}
            className="profileImage"
          />
        </div>
      </div>
      <Contactme />
    </div>
  );
};

export default Home;

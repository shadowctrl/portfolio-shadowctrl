import "./home.css";
import "./works/works.css";
import Link from "next/link";
import Image from "next/image";
import projects from "./works/projects";
import Skills from "../components/skills/skills";
import Contactme from "./contact/page";
import { FaArrowCircleRight } from "react-icons/fa";

export const metadata = {
  title:
    "Shadowctrl Home | Next.js Developer | Full-stack Developer | Freelancer",
  description:
    "Vijayaraghavan N - Skilled Full stack developer | Next.js Developer | React.js Developer | Freelancer",
};

const Home = () => {
  const ViewAll = (size) => {
    return (
      <Link className="homeViewall" href={"/works"}>
        View all
        <span style={{ fontSize: size }}>
          <FaArrowCircleRight />
        </span>
      </Link>
    );
  };
  return (
    <div className="homeParent">
      <div className="homeMain1">
        <div className="homeIntro">
          <h1>
            shadowctrl is a <span> next.js </span>
            <br />
            and a <span>full-stack Developer</span>
          </h1>
          <p>Fueling Your Vision with Code, Coffee, and Creativity</p>
          <Link
            href="https://www.upwork.com/freelancers/~01701539e14beb9820"
            target="_blank"
          >
            <button className="homeContact">Get Quote</button>
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
            Freelancer
          </p>
        </div>
      </div>
      <div className="homeMain2">
        <div className="homeQuote">
          The Quieter You Become The More You Able To Hear
        </div>
        <div className="homeProjectPadding">
          <div className="homeHead">
            <span>#</span>
            Projects
            <div className="homeDash"></div>
            <div className="homeMobile">{ViewAll("4vw")}</div>
            <div className="homeDesktop">{ViewAll("1.2vw")}</div>
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
                        Live
                      </Link>
                    </button>
                  ) : (
                    ""
                  )}

                  {value.cached ? (
                    <button className="worksProjectCachedButton">
                      <Link href={value.cached} target="_blank">
                        Cached
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
            I'm a Full-Stack Developer, specializing in Next.js and the MERN
            stack. With experience in Linux, API integration, Firebase, and
            frontend technologies like Tailwind CSS, Ant Design etc..., I
            Develop secure and responsive web applications. My expertise
            includes building SEO friendly Next.js applications, Structured Code
            and I’m keen to understand your project needs and collaborate
            effectively. Let's work together to bring your vision to life!
          </div>
          {/* <Image
            src="/assets/shadowctrl.webp"
            alt="Shadowctrl"
            width={500}
            height={200}
            className="profileImage"
          /> */}
        </div>
      </div>
      <Contactme />
    </div>
  );
};

export default Home;

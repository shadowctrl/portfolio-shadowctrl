import Skills from "../../components/skills/skills";
import Image from "next/image";
import { OnGoingWorks } from "../works/page";
import "./aboutme.css";

export const metadata = {
  title: "shadowctrl | About Me",
  description:
    "A web developer fueled by a passion for crafting exceptional online experiences. Get to know more about me here!",
};

const Aboutme = () => {
  return (
    <div className="aboutParent">
      <div className="aboutHead">
        <span>/</span>About Me
        <div className="aboutDash"></div>
      </div>
      <div className="aboutContainer">
        <div className="aboutBorder">
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
        <div className="aboutAbout">
          I'm a Full-Stack Developer, specializing in Next.js and the MERN
          stack. With experience in Linux, API integration, Firebase, and
          frontend technologies like Tailwind CSS, Ant Design etc..., I Develop
          secure and responsive web applications. My expertise includes building
          SEO friendly Next.js applications, Structured Code and I’m keen to
          understand your project needs and collaborate effectively.
          <br /> <br />
          Let's work together to bring your vision to life!
        </div>
        <Image
          src="/assets/shadowctrl.webp"
          alt="Shadowctrl"
          width={500}
          height={500}
        />
      </div>
      <Skills />
      <OnGoingWorks />
      <div className="aboutPersonalTouch">
        <div className="aboutPersonalTouchHobbies">
          <div className="aboutPersonalTouchHead">
            <span>#</span>Hobbies <span>/</span> Interests
            <div className="aboutDash" />
          </div>
          <p>
            I am not completely immersed in the Tech World, you could find me
            exploring outdoors. I have a deep love for traveling and bike rides
            which helps me recharge.
          </p>
        </div>
        <div className="aboutPersonalTouchFacts">
          <div className="aboutPersonalTouchHead">
            <span>#</span>My-Fun-Facts <div className="aboutDash" />
            {/* <AllInclusiveIcon style="margin-left: 1vw; font-size: 3vw; color: slategray;" /> */}
            <div className="aboutStraightLine2" />
          </div>
          <div className="aboutStraightLine" />
          <div className="aboutPersonalTouchFactsContainer">
            <div className="aboutPersonalTouchFactsItem">
              I winter more than summer
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I often go for a short ride
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I love to Travel places
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I listen to music when I work
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I used to play basketball
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I love to play PC games
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I am not a mobilized
            </div>
            <div className="aboutPersonalTouchFactsItem">
              I am not an avid mobile device user
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

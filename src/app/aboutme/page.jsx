import Skills from "../../components/skills/skills";
import Image from "next/image";
import { OnGoingWorks } from "../works/page";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutParent">
      <div className="aboutHead">
        <span>/</span>About-Me
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
          As a MERN stack developer with expertise in Discord API, Google API,
          Firebase, and Cyber Security, I am excited to offer my services as a
          freelancer. With a proven track record of building robust and scalable
          applications using cutting-edge technologies, I am confident that I
          can deliver high-quality work to clients with diverse needs.
          <br /> <br />
          Whether building a custom web application, integrating third-party
          APIs, or managing a database on Firebase, I have the skills and
          experience to get the job done. As a Cyber Security graduate, I
          understand the importance of building secure and resilient
          applications and am committed to implementing industry best practices
          in all my projects.
          <br /> <br />
          With excellent communication skills, a strong work ethic, and a
          dedication to delivering projects on time and within budget, I am
          confident that I can exceed your expectations as a freelancer.
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
            I am not completely immersed in the Cyber World, you could find me
            exploring outdoors. I have a deep love for traveling and bike rides
            which helps me recharge and gain fresh perspectives.
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

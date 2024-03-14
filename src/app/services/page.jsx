import "./services.css";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiSharpIcon from "@mui/icons-material/ApiSharp";

export const metadata = {
  title: "shadowctrl | Services Offered",
  description:
    "I offer custom web development services using React.js, Next.js, and more. Bring your vision to life!",
};

const IconCode = (size = "10vw") => {
  return (
    <span>
      <CodeIcon
        style={{
          fontSize: size,
        }}
      />
    </span>
  );
};

const IconSecurity = (size = "10vw") => {
  return (
    <SecurityIcon
      style={{
        fontSize: size,
      }}
    />
  );
};

const IconApi = (size = "9vw") => {
  return (
    <ApiSharpIcon
      style={{
        fontSize: size,
      }}
    />
  );
};
const services = () => {
  return (
    <div class="serviceParent">
      <div class="serviceHead">
        <span>/</span>Services
        <div class="serviceDash"></div>
      </div>
      <div class="serviceServices">
        <div class="serviceServiceItems">
          <div class="serviceMobile">{IconCode("30vw")}</div>
          <div class="serviceDesktop">{IconCode()}</div>
          <br />
          <span>WEB DEVELOPMENT</span>
          <p>
            {" "}
            I utilize my expertise in coding languages such as HTML, CSS, and
            JavaScript to build a website that ensures optimal performance
            across different browsers and devices. my primary focus is on
            creating and designing websites that are user-friendly.
          </p>
        </div>
        <div class="serviceServiceItems">
          <div class="serviceMobile">{IconSecurity("30vw")}</div>
          <div class="serviceDesktop">{IconSecurity()}</div>
          <br />
          <span>VAPT</span>
          <p>
            As a passion towards CyberSecurity, I could idenfy and analyze
            potential security flaws in a system, networks. Through the
            assesments, i uncover vulnerabilities and assess the impact on the
            security of the system.{" "}
          </p>
        </div>
        <div class="serviceServiceItems">
          <div class="serviceMobile">{IconApi("30vw")}</div>
          <div class="serviceDesktop">{IconApi()}</div>
          <br />
          <span>DISCORD BOT</span>
          <p>
            I am proficient in developing Discord bots, crafting tailored
            solutions that automate tasks and enhance interactive experiences
            within the Discord ecosystem.I create bots that performs
            moderations, role management and integrating with external services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;

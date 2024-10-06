import "./services.css";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiSharpIcon from "@mui/icons-material/ApiSharp";
import Link from "next/link";

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

const IconSecurity = (size = "8vw") => {
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
          <span>Front-end DEVELOPMENT</span>
        </div>
        <div class="serviceServiceItems">
          <div class="serviceMobile">{IconApi("30vw")}</div>
          <div class="serviceDesktop">{IconApi()}</div>
          <br />
          <span>Full Stack DEVELOPMENT</span>
        </div>
        <div class="serviceServiceItems">
          <div class="serviceMobile">{IconSecurity("30vw")}</div>
          <div class="serviceDesktop">{IconSecurity()}</div>
          <br />
          <span>Code Maintenance</span>
        </div>
      </div>
      <div className="service-contact">
        <h3>
          Having anything in mind?{" "}
          <Link href={"https://upwork.com/freelancers/shadowctrl"}>
            Let's talk about it!{" "}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default services;

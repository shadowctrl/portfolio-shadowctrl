import "./services.css";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiSharpIcon from "@mui/icons-material/ApiSharp";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services Offered | Project Catalog | shadowctrl",
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
      <div className="service-projects">
        <div class="serviceHead">
          <span>#</span>Project Catalog
          <div class="serviceDash"></div>
        </div>
        <h2 className="service-projects-head">
          Buy Custom Website Programming services, priced and ready to go.
        </h2>
        <div className="service-project-container">
          <p className="service-project-price">From $99</p>
          <Image
            src={"/images/nextjs-reactjs-upwork-shadowctrl.jpg"}
            width={350}
            height={750}
          />

          <h2 className="service-project-container-headline">
            You will get a Custom Full-stack Website | Next.js | Auth | Firebase
            | API & more
          </h2>

          <p className="service-project-container-desc">
            ⭐FOR CLIENTS: Each client has custom requirements, So let's have a
            chat to decide project requirements, budget and delivery time before
            buying. Please feel free to contact. <br />
            <br /> I offer Next.js/React.js services, ranging from simple
            single-page websites to complex applications. I also specialize in
            API integration, authentication, payment gateways, Responsive
            designs and more. <br /> <br />
            Please feel free to contact regarding any information you may need.
          </p>

          <Link
            className="service-project-container-button"
            target="_blank"
            href={
              "https://www.upwork.com/services/product/development-it-next-js-website-all-in-one-customization-pack-1818179802536424028?ref=project_share"
            }
          >
            Continue
          </Link>
        </div>
      </div>
      <div className="service-contact">
        <h3>
          Having anything in mind?{" "}
          <Link
            href={"https://upwork.com/freelancers/shadowctrl"}
            target="_blank"
          >
            Let's talk about it!{" "}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default services;

import Link from "next/link";
import "./contactme.css";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title: "shadowctrl | Let's Connect",
  description:
    "Have a project in mind? Let's discuss!, using the options below or reach out for a coffee chat.",
};

const IconDiscord = (size = "1.3vw", pr = "0.5vw", pb = "1vh") => {
  return (
    <>
      <BsDiscord
        size={size}
        style={{
          verticalAlign: "middle",
          paddingRight: pr,
          paddingBottom: pb,
        }}
      />
      Raghav#4530
    </>
  );
};

const IconEmail = (size = "1.3vw", pr = "0.5vw") => {
  return (
    <>
      <MdEmail
        size={size}
        style={{
          verticalAlign: "middle",
          paddingRight: pr,
        }}
      />
      admin@shadowctrl.me
    </>
  );
};
const Contactme = () => {
  return (
    <div className="contactparent">
      <div className="contacthead">
        <span>#</span>Contacts
        <div className="contactdash"></div>
      </div>

      <div className="contact">
        <p>
          {`I'm`} Interested in freelance opportunities. However, if you have
          any other queries feel free to {""}
          <Link
            href="https://www.upwork.com/freelancers/~01701539e14beb9820"
            target="_blank"
          >
            contact me.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contactme;

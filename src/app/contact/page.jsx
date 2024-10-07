import Link from "next/link";
import "./contactme.css";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title:
    "Shadowctrl | Let's Connect | Next.js Developer | Full-stack Developer | Freelancer",
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

const Contactme = () => {
  return (
    <div className="contactparent">
      <div className="contacthead">
        <span>#</span>Contacts
        <div className="contactdash"></div>
      </div>

      <div className="contact">
        <p>
          {`I'm`} available for freelance and part-time opportunities. If you
          have any other inquiries, feel free to{" "}
          <Link href="mailto:admin@shadowctrl.me" target="_blank">
            get in touch.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contactme;

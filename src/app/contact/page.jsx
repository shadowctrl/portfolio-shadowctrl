import "./contactme.css";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
          I'm Interested in freelance opportunities. However, if you have any
          other queries don't hesitate to contact me.
        </p>
        <span>
          <h3>Message Me Here</h3>
          <div className="contactcontainer">
            <div className="contactmobile">
              {IconDiscord("5vw", "0.5vw", "0vw")}
            </div>
            <div className="contactdesktop">{IconDiscord()}</div>
          </div>

          <div className="contactcontainer">
            <div className="contactmobile">{IconEmail("5vw")}</div>
            <div className="contactdesktop">{IconEmail()}</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contactme;

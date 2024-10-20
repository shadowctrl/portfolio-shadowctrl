import Link from "next/link";
import "./contactme.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiDiscordLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSquareUpwork,
} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export const metadata = {
  title: "Contact Me | shadowctrl",
  description:
    "Have a project in mind? Let's discuss!, using the options below or reach out for a coffee chat.",
};

const handleSubmit = async (formData) => {
  "use server";
  const rawFormData = {
    name: formData.get("name"),
    mail: formData.get("mail"),
    description: formData.get("description"),
  };

  const res = await fetch("https://shadowctrl.me/api/sendMail", {
    method: "POST",
    body: JSON.stringify({ data: rawFormData }),
  });

  console.log(res.status);
};
const Contactme = () => {
  return (
    <div className="contactparent">
      <div className="contacthead">
        <span>/</span>Contact
        <div className="contactdash"></div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-left-top">
            <div className="contact-options">
              <div className="contact-options-item">
                <Link href="mailto:admin@shadowctrl.me" target="_blank">
                  <IoChatbubblesOutline className="contact-icon" />
                </Link>
                Chat
              </div>
              <p>Our friendly team is here to help!</p>
            </div>
            <div className="contact-options">
              <div className="contact-options-item">
                <Link href="https://discord.gg/vJ8b9AB8G2" target="_blank">
                  <RiDiscordLine className="contact-icon" />{" "}
                </Link>
                Discord Community
              </div>
              <p>Join the Conversation</p>
            </div>
          </div>

          <div className="contact-social-icons">
            <Link href={"https://facebook.com/shadwoctrl"} target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://x.com/_shadowctrl_" target="_blank">
              <BsTwitterX />
            </Link>
            <Link href="https://linkedin.com/in/shadowctrl" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://youtube.com/@shadowctrl" target="_blank">
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com/_.shadowctrl._" target="_blank">
              <FaInstagram />
            </Link>
            <Link
              href="https://upwork.com/freelancers/shadowctrl"
              target="_blank"
            >
              <FaSquareUpwork />
            </Link>
          </div>
        </div>
        <div className="contact-right">
          <div>
            <h1>Got ideas? We've got the skills. Let's team up.</h1>
            <p>Tell us more about yourself and what you got in mind.</p>
          </div>

          <form action={handleSubmit}>
            <input type="text" placeholder="Your name" name="name" required />
            <input
              type="text"
              placeholder="you@company.com"
              name="mail"
              required
            />
            <div className="form-desc" required>
              <label htmlFor="desc">Tell us little about the project...</label>
              <br />
              <input type="text" id="desc" name="description" />
            </div>
            <button type="submit">Let's get Started</button>
          </form>
        </div>
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

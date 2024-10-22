"use client";
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
import { handleAction } from "./action";
import { useState } from "react";

const Contactme = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mail", email);
    formData.append("description", description);

    setLoading(true);
    const re = await handleAction(formData);
    setLoading(false);

    if (re === 200) {
      setSuccess(true);
      // Clear the form fields
      setName("");
      setEmail("");
      setDescription("");
    }
  };

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
                  <RiDiscordLine className="contact-icon" />
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

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="you@company.com"
              name="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="form-desc">
              <label htmlFor="desc">Tell us little about the project...</label>
              <br />
              <input
                type="text"
                id="desc"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {loading ? (
              <button type="submit" disabled>
                <div className="loader" />
              </button>
            ) : success ? (
              <button type="submit" disabled>
                Done ✅
              </button>
            ) : (
              <button type="submit">Let's get Started</button>
            )}
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

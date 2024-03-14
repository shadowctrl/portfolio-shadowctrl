import "./footer.css";
// const Icon = (size = "1.5vw", mr = "1vw") => {
//   return (
//     <>
//       <InstagramIcon
//         style={{
//           marginRight: mr,
//           cursor: "pointer",
//           fontSize: size,
//         }}
//         onClick={() => window.open("https://instagram.com/_.shadowctrl._")}
//       />
//       <GitHubIcon
//         style={{
//           marginRight: mr,
//           cursor: "pointer",
//           fontSize: size,
//         }}
//         onClick={() => window.open("https://github.com/shadowctrl")}
//       />
//       <LinkedInIcon
//         style={{
//           cursor: "pointer",
//           fontSize: size,
//         }}
//         onClick={() => window.open("https://linkedin.com/in/shadowctrl")}
//       />
//     </>
//   );
// };
const Footer = () => {
  return (
    <div className="footerParent">
      <div className="footerMedia">
        {/* <div className="footerMobile">{Icon("5vw", "3vw")}</div>
        <div className="footerDesktop">{Icon()}</div> */}
      </div>
      <div className="footerText"> Made by Shadowctrl </div>
    </div>
  );
};

export default Footer;

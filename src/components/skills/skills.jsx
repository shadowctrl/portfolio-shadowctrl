import "./skills.css";

const Skills = () => {
  return (
    <div className="skillsMain">
      <div className="skillsHead">
        <span>#</span> Skills
        <div className="skillsDash" />
      </div>

      <div className="skillsParent">
        <div className="skills">
          <div className="languages">
            <div className="skillsTitle"> LANGUAGES</div>
            <ul>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Python3</li>
              <li>Html</li>
              <li>Css</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="databases">
            <div className="skillsTitle">FRAMEWORKS</div>
            <ul>
              <li>TAILWIND</li>
              <li>BOOTSTRAP</li>
              <li>METASPLOIT</li>
            </ul>
          </div>

          <div className="os">
            <div className="skillsTitle">OPERATING SYSTEMS</div>
            <ul>
              <li>Kali Linux</li>
              <li>Parrot Security</li>
              <li>Black Arch</li>
              <li>Garuda Linux</li>
              <li>Windows</li>
            </ul>
          </div>

          <div className="other">
            <div className="skillsTitle">OTHERS</div>
            <ul>
              <li>Cyber Security</li>
              <li>Networking</li>
              <li>Discord API</li>
              <li>Google API</li>
              <li>Instagram API</li>
              <li>Linux System Administration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

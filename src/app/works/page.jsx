import "./works.css";
import projects from "./projects";
import { onGoingProjects } from "./projects";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Shadowctrl | Showcasing my Works | Next.js Developer | Full-stack Developer | Freelancer",
  description:
    "Explore my portfolio of web development projects built with React.js, Next.js, and other cutting-edge technologies.",
};

export const OnGoingWorks = (Title) => {
  return (
    <div>
      <div className="worksChild2">
        <span>#</span>Currently Working On
      </div>
      <div className="worksProjectsRenderer">
        {onGoingProjects.map((value, index) => (
          <div key={value.title} className="worksProjectContainer">
            <div className="worksProjectImage">
              <Image
                src={value.image}
                alt="Projects"
                width="500"
                height="500"
              />
            </div>
            <div className="worksProjectLang">{value.languages}</div>
            <div className="worksProjectTitle">{value.title}</div>
            <div className="worksProjectDes">{value.description}</div>
            <div className="worksProjectButtons">
              {value.live ? (
                <Link href={value.live} className="worksProjectLiveButton">
                  <p>Live</p>
                </Link>
              ) : (
                ""
              )}

              {value.progress ? (
                <Link
                  href={value.progress}
                  target="_blank"
                  className="worksProjectCachedButton"
                >
                  Progress
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="worksParent">
      <div className="worksHead">
        <span>/</span>Projects
      </div>

      <div className="worksChild">
        <span>#</span>Completed Projects
      </div>

      <div className="worksProjectMain">
        {/* <Box1 />
    <Box /> */}
        <div className="worksProjectsRenderer">
          {projects.map((value, index) => (
            <div className="worksProjectContainer" key={value.title}>
              <div className="worksProjectImage">
                <Image
                  src={value.image}
                  alt="Projects"
                  width="500"
                  height="500"
                />
              </div>
              <div className="worksProjectLang">{value.languages}</div>
              <div className="worksProjectTitle">{value.title}</div>
              <div className="worksProjectDes">{value.description}</div>
              <div className="worksProjectButtons">
                {value.live ? (
                  <Link
                    href={value.live}
                    target="_blank"
                    className="worksProjectLiveButton"
                  >
                    Live
                  </Link>
                ) : (
                  ""
                )}

                {value.cached ? (
                  <Link
                    href={value.cached}
                    target="_blank"
                    className="worksProjectCachedButton"
                  >
                    Cached{" "}
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <OnGoingWorks />
    </div>
  );
};

export default Works;

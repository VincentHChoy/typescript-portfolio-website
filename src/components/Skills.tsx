import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import {
  DiCss3,
  DiRuby,
  DiPython,
  DiReact,
  DiJqueryLogo,
  DiNpm,
  DiDatabase,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiGit,
  SiExpress,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      Title: "Markup/Styling",
      names: ["HTML5", "CSS", "Tailwind CSS", "BootStrap"],
      icons: [
        <AiFillHtml5 className="text-orange-400 text-6xl" />,
        <DiCss3 className="text-blue-400 text-6xl" />,
        <SiTailwindcss className="text-teal-400 text-6xl" />,
        <FaBootstrap className="text-purple-400 text-6xl" />,
      ],
    },
    {
      Title: "Programing Languages",
      names: ["Javascript", "Ruby", "Python"],
      icons: [
        <SiJavascript className="text-yellow-400 text-6xl" />,
        <DiRuby className="text-red-400 text-6xl" />,
        <DiPython className="text-blue-400 text-6xl" />,
      ],
    },
    {
      Title: "Javascript Frameworks",
      names: ["React", "Redux", "jQuery"],
      icons: [
        <DiReact className="text-teal-400 text-6xl" />,
        <SiRedux className="text-blue-400 text-6xl" />,
        <DiJqueryLogo className="text-blue-400 text-6xl" />,
      ],
    },
    {
      Title: "Package Manager",
      names: ["Node Package Manager"],
      icons: [<DiNpm className="text-red-400 text-6xl" />],
    },
    {
      Title: "Database Management",
      names: ["MySQl"],
      icons: [<DiDatabase className="text-blue-400 text-6xl" />],
    },
    {
      Title: "Database Management",
      names: ["Github", "Git"],
      icons: [<AiFillGithub size={75} />, <SiGit size={75} />],
    },
    {
      Title: "Backend",
      names: ["NodeJs", "Firebase", "ExpressJS"],
      icons: [
        <FaNodeJs className="text-green-400 text-6xl" />,
        <SiFirebase className="text-orange-400 text-6xl" />,
        <FaNodeJs className="text-green-400 text-6xl" />,
      ],
    },
  ];

  const skillContainer = () => {
    return skills.map((skill) => {
      return (
        <main className="flex flex-col justify-center items-center w-full md:w-1/3">
          <h1 className="text-2xl my-2">{skill.Title}</h1>
          <ul className="flex flex-row w-full md:w-2/3 items-center justify-around">
            {skill.icons.map((icon, index) => {
              return (
                  <ul className="flex flex-col items-center justify-center">
                    <a>{icon}</a>
                    <h1 className="text-sm">{skill.names[index]}</h1>
                  </ul>
              );
            })}
          </ul>
        </main>
      );
    });
  };
  const skilledContainer: any = skillContainer();

  return (
    <section
      className={`p-2 mt-1/2 h-screen w-screen md:w-1/ text-4xl from-inherit`}
    >
      <div>
        <Fade>
          <h1 id="skills" className="text-center text-4xl break-words">
            Skills
          </h1>
          <main className="flex flex-col flex-wrap items-start md:items-center justify-center md:flex-row">
            {skilledContainer}
          </main>
        </Fade>
      </div>
    </section>
    // <section className="h-screen text-4xl bg-gradient-to-b from-third text-white">
    //   <h1 className='mx-10'>Skills and Technologies</h1>
    // </section>
  );
}

export default Skills;

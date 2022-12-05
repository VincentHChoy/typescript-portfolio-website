import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import {
  DiCss3,
  DiRuby,
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
  SiTypescript,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      Title: "Markup/Styling",
      names: ["HTML5", "CSS", "Tailwind CSS", "BootStrap"],
      icons: [
        <AiFillHtml5 className="text-6xl text-orange-400" />,
        <DiCss3 className="text-6xl text-blue-400" />,
        <SiTailwindcss className="text-6xl text-teal-400" />,
        <FaBootstrap className="text-6xl text-purple-400" />,
      ],
    },
    {
      Title: "Programing Languages",
      names: ["Javascript", "Typescript", "Ruby"],
      icons: [
        <SiJavascript className="text-6xl text-yellow-400" />,
        <SiTypescript className="text-6xl text-blue-400" />,
        <DiRuby className="text-6xl text-red-400" />,
      ],
    },
    {
      Title: "Javascript Frameworks",
      names: ["React", "Redux", "jQuery"],
      icons: [
        <DiReact className="text-6xl text-teal-400" />,
        <SiRedux className="text-6xl text-blue-400" />,
        <DiJqueryLogo className="text-6xl text-blue-400" />,
      ],
    },
    {
      Title: "Package Manager",
      names: ["Node Package Manager"],
      icons: [<DiNpm className="text-6xl text-red-400" />],
    },
    {
      Title: "Database Management",
      names: ["MySQl"],
      icons: [<DiDatabase className="text-6xl text-blue-400" />],
    },
    {
      Title: "Database Management",
      names: ["Github", "Git"],
      icons: [
        <AiFillGithub className="text-6xl text-white" />,
        <SiGit className="text-6xl text-white" />,
      ],
    },
    {
      Title: "Backend",
      names: ["NodeJs", "Firebase", "ExpressJS"],
      icons: [
        <FaNodeJs className="text-6xl text-green-400" />,
        <SiFirebase className="text-6xl text-orange-400" />,
        <FaNodeJs className="text-6xl text-green-400" />,
      ],
    },
  ];

  const skillContainer = () => {
    return skills.map((skill) => {
      return (
        <main className="mx-auto my-2 flex h-40 w-5/6 flex-col items-center justify-around rounded-md bg-gray-400 bg-opacity-30 px-4 shadow-xl lg:my-4 lg:mx-4 lg:w-1/4">
          <h1 className="my-2 text-center text-2xl italic">{skill.Title}</h1>
          <ul className="flex w-screen flex-row items-center justify-around px-4 lg:w-full">
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
    <section id="skills">
      <Fade>
        <div className="flex flex-col items-center justify-around">
          <h1 className="break-words text-center font-mont text-4xl font-bold">
            Skills
          </h1>
          <main className="flex flex-col flex-wrap justify-center p-10 lg:p-0 lg:w-full lg:flex-row lg:flex-wrap lg:items-center">
            {skilledContainer}
          </main>
        </div>
      </Fade>
    </section>
    // <section className="h-screen text-4xl bg-gradient-to-b from-third text-white">
    //   <h1 className='mx-10'>Skills and Technologies</h1>
    // </section>
  );
}

export default Skills;

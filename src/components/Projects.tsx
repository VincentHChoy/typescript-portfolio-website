import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { DiCss3, DiReact } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      name: "Climbr",
      preview:
        "https://user-images.githubusercontent.com/63982069/198501902-06712884-d394-46d7-838c-552e9d037dde.png",
      link: "https://climbr.netlify.app/",
      github: "https://github.com/VincentHChoy/climbr",
      desc: "Client-side app for logging Marc Bourdon's Top 100 Squamish Boulders with a beautiful interface and intuitive user experience.",
      icons: [
        <AiFillHtml5 className="text-orange-400" size={30} />,
        <DiCss3 className="text-blue-400" size={30} />,
        <DiReact className="text-teal-400" size={30} />,
        <SiJavascript className="text-yellow-400" size={30} />,
        <SiTailwindcss className="text-teal-400" size={30} />,
      ],
      stack: ["HTML5", "CSS5", "Javascript", "React", "Tailwind"],
    },
    {
      name: "Ketchup",
      preview: "https://i.imgur.com/Z0P5Elz.png",
      link: "https://ketchup-demo.netlify.app/",
      github: "https://github.com/VincentHChoy/ketchup-demo",
      desc: "Full stack real-time chat/work collabration app with Google API integration. Allows chatting, google sheets and google docs without ever leaving the app.",
      icons: [
        <AiFillHtml5 className="text-orange-400" size={30} />,
        <DiCss3 className="text-blue-400" size={30} />,
        <SiJavascript className="text-yellow-400" size={30} />,
        <DiReact className="text-teal-400" size={30} />,
        <SiRedux className="text-blue-400" size={30} />,
        <SiTailwindcss className="text-teal-400" size={30} />,
      ],
      stack: ["HTML5", "CSS5", "Javascript", "React", "Redux", "Tailwind"],
    },
    {
      name: "Portfolio Website",
      preview:
        "https://user-images.githubusercontent.com/63982069/202014816-8c24d181-54cd-410e-b878-61fe1177384c.png",
      github: "https://github.com/VincentHChoy/typescript-portfolio-website",
      desc: "Website provides professional information about myself and presents a showcase of my work.",
      link: "https://www.vincentchoy.ca/",
      icons: [
        <AiFillHtml5 className="text-orange-400" size={30} />,
        <DiCss3 className="text-blue-400" size={30} />,
        <SiTypescript className="text-blue-400" size={30} />,
        <DiReact className="text-teal-400" size={30} />,
        <SiTailwindcss className="text-teal-400" size={30} />,
      ],
      stack: ["HTML5", "CSS5", "Typescript", "React", "Tailwind"],
    },
  ];

  const projectContainers = () => {
    return projects.map((project) => {
      return (
        <main className="mx-auto my-4 flex h-full w-5/6 transform flex-col items-center justify-center rounded-md border-b-4 border-b-white bg-[#3e363f] bg-opacity-80 p-10 shadow-xl transition duration-500 ease-in-out hover:-translate-y-10 lg:mx-4 lg:w-1/3 lg:justify-between ">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <a href={project.link} target="_blank">
            <img className="my-4 h-40 w-fit rounded-md" src={project.preview} />
          </a>
          <p className="text-center text-lg">{project.desc}</p>
          <section className="my-2 flex w-full flex-row flex-wrap items-start justify-center">
            {project.icons.map((icon, index) => {
              return (
                <div className="m-2 flex flex-col items-center">
                  {icon}
                  <h1 className="text-sm">{project.stack[index]}</h1>
                </div>
              );
            })}
          </section>
          <footer>
            <a href={project.github}>
              <AiFillGithub
                className="cursor-pointer hover:text-primary"
                size={45}
              />
              <a
                href={project.link}
                target="_blank"
                className="cursor-pointer hover:text-primary hover:underline"
              >
                demo
              </a>
            </a>
          </footer>
        </main>
      );
    });
  };

  const containers = projectContainers();

  return (
    <section id="projects">
      <Fade>
        <div className="flex flex-col items-center justify-around lg:h-screen">
          <h1 className="break-words text-center font-mont text-4xl font-bold">
            Projects
          </h1>
          <main className="flex h-5/6 flex-col items-start justify-around lg:w-5/6 lg:flex-row lg:items-center">
            {containers}
          </main>
        </div>
      </Fade>
    </section>
  );
}

export default Projects;

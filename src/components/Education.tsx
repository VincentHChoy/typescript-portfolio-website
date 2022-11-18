import { Fade } from "react-awesome-reveal";

function Education() {
  const projects = [
    {
      name: "University of Alberta",
      preview: "Logo_Engg2.png",
      link: "https://www.ualberta.ca/engineering/civil-environmental-engineering/index.html",
      desc: "Bachelors of Civil Engineering Co-op Program 2020",
      stack: ["HTML5", "CSS5", "Javascript", "React", "Tailwind"],
    },
    {
      name: "Lighthouse Labs",
      preview:
        "https://mms.businesswire.com/media/20200915005320/en/821159/23/lhl-logo.jpg",
      link: "https://www.lighthouselabs.ca/en/web-development-bootcamp",
      desc: "Diploma: Full-Stack Web Development Program 2022",
      stack: ["HTML5", "CSS5", "Javascript", "React", "Redux", "Tailwind"],
    },
  ];

  const educationContainers = () => {
    return projects.map((project) => {
      return (
        <main className="mx-auto my-4 flex h-2/3 w-5/6 flex-col items-center justify-center rounded-md bg-gray-400 bg-opacity-30 p-10 shadow-xl lg:mx-4 lg:w-1/3 lg:items-center lg:justify-between">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <a href={project.link} target="_blank">
            <img className="my-4 w-fit rounded-md" src={project.preview} />
          </a>
          <p className="break-normal text-2xl font-bold lg:text-xl">
            {project.desc}
          </p>
          {/* <section className="my-2 flex w-full flex-row flex-wrap items-start justify-center"></section>
          <footer></footer> */}
        </main>
      );
    });
  };

  const containers = educationContainers();

  return (
    <section className="mt-8" id="education">
      <Fade>
        <div className="flex flex-col items-center justify-around lg:h-screen">
          <h1 className="break-words text-center font-mont text-4xl font-bold">
            Education
          </h1>
          <main className="flex h-5/6 flex-col justify-center lg:w-5/6 lg:flex-row lg:items-start">
            {containers}
          </main>
        </div>
      </Fade>
    </section>
  );
}

export default Education;

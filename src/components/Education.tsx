import { Fade } from "react-awesome-reveal";

export function Education() {
  interface School {
    name: string;
    preview: string;
    link: string;
    desc: string;
    stack: string[];
  }

  const schools = [
    {
      name: "University of Alberta",
      preview: "Logo_Engg2.png",
      link: "https://www.ualberta.ca/engineering/civil-environmental-engineering/index.html",
      desc: "Bachelors of Civil Engineering Co-op Program 2020",
      stack: ["HTML5", "CSS5", "Javascript", "React", "Tailwind"],
    },
    {
      name: "Lighthouse Labs",
      preview: "https://mms.businesswire.com/media/20200915005320/en/821159/23/lhl-logo.jpg",
      link: "https://www.lighthouselabs.ca/en/web-development-bootcamp",
      desc: "Diploma: Full-Stack Web Development Program 2022",
      stack: ["HTML5", "CSS5", "Javascript", "React", "Redux", "Tailwind"],
    },
  ];

  const educationContainers = () => {
    return schools.map((school: School) => {
      return (
        <main className="mx-auto my-4 flex h-2/3 w-5/6 transform flex-col items-center justify-center rounded-md border-b-4 border-b-white bg-[#3e363f] bg-opacity-80 p-10 shadow-xl transition duration-500 ease-in-out hover:-translate-y-10 lg:mx-4 lg:w-1/3 lg:items-center lg:justify-between">
          <h1 className="text-3xl font-bold">{school.name}</h1>
          <a href={school.link} rel="noreferrer" target="_blank">
            <img alt={school.name} className="my-4 h-fit w-fit rounded-md" src={school.preview} />
          </a>
          <p className="break-normal text-2xl font-bold lg:text-xl">{school.desc}</p>
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
          <h1 className="break-words text-center font-mont text-4xl font-bold">Education</h1>
          <main className="flex h-5/6 flex-col justify-center lg:w-5/6 lg:flex-row lg:items-start">
            {containers}
          </main>
        </div>
      </Fade>
    </section>
  );
}

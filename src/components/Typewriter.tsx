import { useState } from "react";
import TypewriterClass from "typewriter-effect";
import { AiFillGithub, AiFillLinkedin, AiFillDownCircle } from "react-icons/ai";

function Typewriter() {
  const textColor = "#B4C5F8";
  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center text-center font-mont">
      <h1 className="text-4xl md:text-5xl ">
        <TypewriterClass
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello, I am <span style="color: ${textColor}">Vincent Choy</span>`
              )
              .pauseFor(2000)
              .deleteChars(12)
              .typeString(
                `a <span style="color: ${textColor}">full-stack developer</span>`
              )
              .pauseFor(2000)
              .deleteChars(22)
              .typeString(
                `passionate for <span style="color: ${textColor}"> front-end development</span>`
              )
              .pauseFor(2000)
              .start();
          }}
        />
      </h1>
      {
        <>
          <div className="flex h-1/6 w-40 animate-fade-in-down flex-row items-center justify-around">
            <a
              href={"https://resume.creddle.io/resume/cdt4ump48qv"}
              target="_blank"
            >
              <button className="text-opacity-0.5 h-1/6 rounded-md bg-white p-2 text-secondary hover:bg-secondary hover:text-white">
                Resume
              </button>
            </a>
            <a
              href={"https://github.com/VincentHChoy"}
              aria-label="github"
              className="hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href={"https://www.linkedin.com/in/vincent-choy/"}
              aria-label="linkedin"
              className="hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </>
      }
      <AiFillDownCircle
        size={50}
        className="mx-auto h-1/6 animate-bounce cursor-pointer text-white hover:text-secondary"
        onClick={(e) => {
          console.log("here");
          e.preventDefault();
          document?.getElementById("skills")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      />
    </div>
  );
}

export default Typewriter;

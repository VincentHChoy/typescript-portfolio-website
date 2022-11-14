import { useState } from "react";
import TypewriterClass from "typewriter-effect";

function Typewriter() {
  const [paragraph, setParagraph] = useState(false);
  const [paragraph2, setParagraph2] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-5/6 text-center mx-4">
      <h1 className="text-4xl md:text-5xl">
        <TypewriterClass
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello, I am <span style="color: #93C5FD;">Vincent Choy</span>`
              )
              .callFunction(() => {
                setParagraph(true);
              })
              .start();
          }}
        />
      </h1>
      {paragraph && (
        <TypewriterClass
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I am full-stack web developer with a passion for front-end development."
              )
              .callFunction(() => {
                setParagraph2(true);
              })
              .start();
          }}
        />
      )}
      {paragraph2 && (
        <p className="my-5 animate-fade-in-down overflow-auto md:w-1/2">
          I graduated from the{" "}
          <b className="text-blue-300"> University of Alberta </b> with a
          bachelors degree in{" "}
          <b className="text-blue-300"> Civil Engineering </b> and alumni of the
          accredited <b className="text-blue-300">Lighthouse Labs </b>!
        </p>
      )}
    </div>
  );
}

export default Typewriter;

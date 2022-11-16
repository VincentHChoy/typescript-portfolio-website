import React from "react";
import {
  AiFillPhone,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <section className="flex flex-col items-center">
      <a id="contact">
        <h1 className="mt-10 break-words text-center text-4xl font-bold">Contact Me!</h1>
      </a>
      <img className="w-5/6 rounded-full shadow-2xl lg:w-1/6" src={"/me.jpg"} />
      <ul className="w-full p-10 text-center lg:w-1/4">
        <li className="flex flex-row items-center justify-between">
          <AiFillPhone size={30} />
          <a>(780) 200-5180</a>
        </li>
        <li className="flex flex-row items-center justify-between">
          <AiFillMail size={30} />
          <a href="mailto: vincenthchoyy@gmail.com">vincenthchoyy@gmail.com</a>
        </li>
        <li className="flex flex-row items-center justify-between">
          <AiFillGithub size={30} />
          <a href={"https://github.com/VincentHChoy"} target="_blank">
            github.com/VincentHChoy
          </a>
        </li>
        <li className="flex flex-row items-center justify-between">
          <AiFillLinkedin size={30} />
          <a href={"https://www.linkedin.com/in/vincent-choy/"} target="_blank">
            linkedin.com/in/vincent-choy/
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Contact;

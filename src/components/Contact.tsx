import { Fade } from "react-awesome-reveal";
import {
  AiFillPhone,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <Fade>
      <section className="flex h-screen flex-col items-center">
        <a id="contact">
          <h1 className="my-5 break-words text-center font-mont text-4xl font-bold">
            Contact Me!
          </h1>
        </a>
        <img
          className="w-5/6 rounded-full shadow-2xl lg:w-1/6"
          src={"/me.jpg"}
        />
        <ul className="w-full p-10 text-center lg:w-1/3 lg:text-2xl">
          <li className="flex flex-row items-center justify-between">
            <AiFillPhone size={30} />
            <a>(780) 200-5180</a>
          </li>
          <li className="flex flex-row items-center justify-between">
            <AiFillMail size={30} />
            <a href="mailto: vincenthchoyy@gmail.com">
              vincenthchoyy@gmail.com
            </a>
          </li>
          <li className="flex flex-row items-center justify-between">
            <AiFillGithub size={30} />
            <a href={"https://github.com/VincentHChoy"} target="_blank">
              github.com/VincentHChoy
            </a>
          </li>
          <li className="flex flex-row items-center justify-between">
            <AiFillLinkedin size={30} />
            <a
              href={"https://www.linkedin.com/in/vincent-choy/"}
              target="_blank"
            >
              linkedin.com/in/vincent-choy/
            </a>
          </li>
        </ul>
      </section>
    </Fade>
  );
}
export default Contact;

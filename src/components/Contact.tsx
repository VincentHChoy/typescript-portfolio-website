// import { Fade } from "react-awesome-reveal";
// import {
//   AiFillPhone,
//   AiFillMail,
//   AiFillGithub,
//   AiFillLinkedin,
// } from "react-icons/ai";

// function Contact() {
//   return (
//     <Fade>
//       <section className="flex h-screen flex-col mx-auto items-center">
//         <a id="contact">
//           <h1 className="my-5 break-words text-center font-mont text-4xl font-bold">
//             Contact Me!
//           </h1>
//         </a>
// <img
//   className="w-5/6 rounded-full shadow-2xl lg:w-1/6"
//   src={"/me.jpg"}
// />
//         <ul className="w-full p-10 mx-auto text-center lg:w-1/2 lg:text-2xl">
//           <li className="flex flex-row items-start justify-center">
//             <a>(780) 200-5180</a>
//           </li>
//           <li className="flex flex-row items-start justify-center">
//             <a href="mailto: vincenthchoyy@gmail.com">
//               vincenthchoyy@gmail.com
//             </a>
//           </li>
//           <li className="flex flex-row items-start justify-center">
//             <a href={"https://github.com/VincentHChoy"} target="_blank">
//               github.com/VincentHChoy
//             </a>
//           </li>
//           <li className="flex flex-row items-start justify-center">
//             <a
//               href={"https://www.linkedin.com/in/vincent-choy/"}
//               target="_blank"
//             >
//               linkedin.com/in/vincent-choy/
//             </a>
//           </li>
//         </ul>
//       </section>
//     </Fade>
//   );
// }

import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xyyaylva");
  if (state.succeeded) {
    return (
      <div className="mb-16 flex flex-row items-center justify-center">
        <p className="text-3xl">Thanks for reach out!</p>
      </div>
    );
  }

  return (
    <>
      <h1 id="contact" className="my-5 break-words text-center font-mont text-4xl font-bold">
        Contact Me!
      </h1>
      <img
        className="mx-auto my-10 w-5/6 rounded-full shadow-2xl shadow-white/30 border-4 lg:w-1/6"
        src={"/me.jpg"}
      />
      <section className="mx-auto mb-32 flex h-1/2 w-4/5 flex-col items-center justify-center rounded-md border-b-4 border-b-white bg-[#3e363f] bg-opacity-80 p-10 shadow-xl">
        <form
          action="https://formspree.io/f/xyyaylva"
          className="flex h-full w-full flex-col justify-around"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email Address:</label>
          <input
            className="rounded-md p-2"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label>Message:</label>
          <textarea
            className="h-1/2 w-full rounded-md p-2 text-black"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="text-opacity-0.5 my-3 h-1/6 rounded-md bg-white p-2 text-secondary hover:bg-secondary hover:text-white lg:w-1/6"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
export default Contact;

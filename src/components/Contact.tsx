import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
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
        alt="Vincent Choy"
        className="mx-auto my-10 w-5/6 rounded-full border-4 shadow-2xl shadow-white/30 lg:w-1/6"
        src={"/me.jpg"}
      />
      <section className="mx-auto mb-32 flex h-1/2 w-4/5 flex-col items-center justify-center rounded-md border-b-4 border-b-white bg-[#3e363f] bg-opacity-80 p-10 shadow-xl">
        <form
          action="https://formspree.io/f/xyyaylva"
          className="flex h-full w-full flex-col justify-around"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email Address:</label>
          <input className="rounded-md p-2" id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label>Message:</label>
          <textarea
            className="h-1/2 w-full rounded-md p-2 text-black"
            id="message"
            name="message"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
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

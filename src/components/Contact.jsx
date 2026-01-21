import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 xl:text-5xl">
            Contact
          </p>
          <p className="py-6 xl:text-xl">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://formspree.io/f/xzzaqnbg"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            {/* Anti-spam honeypot (recommended) */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {/* Submit */}
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300 xl:text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

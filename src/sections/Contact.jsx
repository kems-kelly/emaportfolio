import { FiMail, FiMapPin } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yzhq3ar", "template_a32mwf3", form.current, {
        publicKey: "UmXwliJ2ZefabHN1Y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatusMessage("Message sent successfully ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusMessage("Something went wrong. Try again ❌");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Title and Intro */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-heading">
            Get <span className="text-primary font-medium">InTouch</span>
          </h2>
          <p className="text-paragraph mt-2">
            Have a project in mind or just want to chat about design and
            technology? I’d love to hear from you.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-heading">
              Let's Connect
            </h3>
            <p className="text-paragraph mb-6">
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about UX design and technology
              trends.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiMail className="text-cyan-400 w-6 h-6" />
                <span className="text-paragraph">schidiuto@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin className="text-cyan-400 w-6 h-6" />
                <span className="text-paragraph">Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="flex flex-col">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your full name"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project or say hello"
                rows="5"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg
                 bg-gradient-to-r from-[#10ABFF] to-[#4B45FF]
                 text-paragraph font-semibold shadow-lg
                 transition-transform duration-300 hover:scale-105
                 text-center text-sm sm:text-base md:text-lg cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-white">
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

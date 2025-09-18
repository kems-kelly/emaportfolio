// import { FiMail, FiMapPin } from "react-icons/fi";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();
//   console.log("Sending...", form.current);

//   emailjs
//     .sendForm("service_25qpaxn", "template_t80baho", form.current, {
//       publicKey: "UmXwliJ2ZefabHN1Y",
//     })
//     .then(
//       (result) => {
//         console.log("SUCCESS!", result.text);
//         alert("Message sent successfully!");
//       },
//       (error) => {
//         console.log("FAILED...", error.text);
//         alert("Something went wrong. Try again!");
//       }
//     );

//   e.target.reset();
// };

// export default function Contact() {
//   return (
//     <section id="contact" className="section">
//       <div className="container">
//         {/* Title and Intro (Full Width) */}
//         <div className="text-center mb-12 max-w-2xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-heading">
//             Get <span className="text-cyan-400">InTouch</span>
//           </h2>
//           <p className="text-paragraph mt-2">
//             Have a project in mind or just want to chat about design and
//             technology? I’d love to hear from you.
//           </p>
//         </div>

//         {/* Grid Section */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Side */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
//             <p className="text-paragraph mb-6">
//               I'm always open to discussing new opportunities, collaborations,
//               or just having a conversation about UX design and technology
//               trends.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <FiMail className="text-cyan-400 w-6 h-6" />
//                 <span className="text-paragraph">schidiuto@gmail.com</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FiMapPin className="text-cyan-400 w-6 h-6" />
//                 <span className="text-paragraph">Abuja, Nigeria</span>
//               </div>
//             </div>

//             {/* Response Time */}
//             <div className="mt-6 p-4 border rounded-lg border-gray-600">
//               <h4 className="font-semibold mb-2">Response Time</h4>
//               <p className="text-paragraph text-sm">
//                 I typically respond within 24 hours during weekdays. For urgent
//                 inquiries, feel free to include "URGENT" in your subject line.
//               </p>
//             </div>
//           </div>

//           {/* Right Side (Form) */}
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your full name"
//               className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
//             />
//             <textarea
//               placeholder="Tell me about your project or say hello"
//               rows="5"
//               className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-cyan-400 text-black font-medium py-3 rounded-lg hover:bg-cyan-500 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import { FiMail, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending...", form.current);

    emailjs
      .sendForm("service_25qpaxn", "template_t80baho", form.current, {
        publicKey: "UmXwliJ2ZefabHN1Y",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Try again!");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Title and Intro (Full Width) */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-thin text-heading">
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
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
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

            {/* Response Time */}
            <div className="mt-6 p-4 border rounded-lg border-gray-800">
              <h4 className="font-semibold mb-2 text-heading">Response Time</h4>
              <p className="text-paragraph text-sm">
                I typically respond within 24 hours during weekdays. For urgent
                inquiries, feel free to include "URGENT" in your subject line.
              </p>
            </div>
          </div>

          {/* Right Side (Form) */}
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
              className="w-full bg-primary/80 text-black font-medium py-3 rounded-lg hover:bg-primary/50 cursor-pointer transition  transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

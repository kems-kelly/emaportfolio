// import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";
// import { motion } from "framer-motion";
// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-gray-800 pt-10">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-2xl font-bold">
//             Ema<span className="text-cyan-400">Kelly</span>
//           </h2>
//           <p className="text-gray-400 mt-2 max-w-md">
//             UX Engineer crafting digital experiences that bridge design and
//             technology.
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.3, duration: 0.8 }}
//             href="https://www.linkedin.com/in/chidiuto-emmanuela-kelechi-771907244/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
//           >
//             <FiLinkedin className="w-5 h-5" />
//           </motion.a>
//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.3, duration: 0.8 }}
//             href="https://github.com/kems-kelly"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
//           >
//             <FiGithub className="w-5 h-5" />
//           </motion.a>
//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.4, duration: 0.8 }}
//             href="https://x.com/ChidiutoN"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
//           >
//             <FaXTwitter className="w-5 h-5" />
//           </motion.a>
//           <motion.a
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.5, duration: 0.8 }}
//             href="mailto:schidiuto@gmail.com"
//             className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
//           >
//             <FiMail className="w-5 h-5" />
//           </motion.a>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between mt-10 text-sm text-gray-500">
//         <p>© 2025 EmaKelly. All Rights Reserved</p>
//         <div className="flex gap-6 mt-2 md:mt-0">
//           <a href="#" className="hover:text-cyan-400 transition">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-cyan-400 transition">
//             Terms of Services
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-gray-800 pt-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">
            Ema<span className="text-cyan-400">Kelly</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-md">
            UX Engineer crafting digital experiences that bridge design and
            technology.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/chidiuto-emmanuela-kelechi-771907244/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/kems-kelly"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://x.com/ChidiutoN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
          >
            <FaXTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:schidiuto@gmail.com"
            className="bg-gray-800 hover:bg-cyan-400 hover:text-black p-3 rounded-lg transition"
          >
            <FiMail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between mt-10 text-sm text-gray-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>© 2025 EmaKelly. All Rights Reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-cyan-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Terms of Services
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { DataCV } from "../data/DataCV";

type Props = {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
};

export default function Header({ lang, setLang }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-gray-700 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div className="flex items-center gap-6">
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h1 className="text-3xl font-bold">
            {DataCV.name}
          </h1>

          <p className="text-gray-400 mt-1">
            {DataCV.role[lang]}
          </p>
          <div className="flex gap-4 mt-3 text-lg">
            <a href={`mailto:${DataCV.email}`} className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>

            <a href={DataCV.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <motion.button
          onClick={() => setLang("es")}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-1 rounded-lg border transition ${
            lang === "es"
              ? "bg-white text-black"
              : "border-gray-600 hover:bg-gray-800"
          }`}
        >
          ES
        </motion.button>

        <motion.button
          onClick={() => setLang("en")}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-1 rounded-lg border transition ${
            lang === "en"
              ? "bg-white text-black"
              : "border-gray-600 hover:bg-gray-800"
          }`}
        >
          EN
        </motion.button>
      </div>
    </motion.section>
  );
}
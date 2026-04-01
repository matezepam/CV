import { useState } from "react";
import Header from "./components/Header";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import SoftSkills from "./sections/SoftSkills";
import Education from "./sections/Education";
import Languages from "./sections/Languages";

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="bg-black text-white min-h-screen p-8 max-w-4xl mx-auto">

      <Header lang={lang} setLang={setLang} />
      <Experience lang={lang} />
      <Skills />
      <SoftSkills lang={lang} />
      <Education lang={lang} />
      <Languages />

    </div>
  );
}

export default App;
import { DataCV } from "../data/DataCV";

type Props = {
  lang: "es" | "en";
};

export default function SoftSkills({ lang }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        {lang === "es" ? "Habilidades Blandas" : "Soft Skills"}
      </h2>

      <ul className="list-disc ml-5 space-y-2 text-gray-300">
        {DataCV.softSkills.map((skill, i) => (
          <li key={i}>{skill[lang]}</li>
        ))}
      </ul>
    </section>
  );
}
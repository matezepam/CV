import { DataCV } from "../data/DataCV";

type Props = {
  lang: "es" | "en";
};

export default function Education({ lang }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        {lang === "es" ? "Educación" : "Education"}
      </h2>

      {DataCV.education.map((edu, i) => (
        <div key={i} className="mb-4">
          <h3 className="font-semibold">
            {edu.institution}
          </h3>
          <p className="text-gray-400 text-sm">
            {edu.name[lang]} ({edu.period})
          </p>
        </div>
      ))}
    </section>
  );
}
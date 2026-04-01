import { DataCV } from "../data/DataCV";

type Props = {
  lang: "es" | "en";
};

export default function Experience({ lang }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        {lang === "es" ? "Experiencia" : "Experience"}
      </h2>

      <div className="space-y-6">
        {DataCV.experience.map((job, index) => (
          <div key={index}>
            <h3 className="font-semibold">
              {job.company} — {job.location}
            </h3>

            <p className="text-gray-400 text-sm">
              {job.role[lang]} ({job.period[lang]})
            </p>

            <ul className="list-disc ml-5 mt-2">
              {job.achievements[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
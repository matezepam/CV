import { DataCV } from "../data/DataCV";

export default function Languages() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Idiomas
      </h2>

      <ul className="list-disc ml-5 space-y-2 text-gray-300">
        {DataCV.languages.map((lang, i) => (
          <li key={i}>
            {lang.name} — {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
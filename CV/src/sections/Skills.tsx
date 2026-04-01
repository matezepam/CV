import { DataCV } from "../data/DataCV";

export default function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Habilidades Técnicas
      </h2>

      <div className="space-y-6">

        <SkillGroup title="Lenguajes" items={DataCV.skills.languages} />
        <SkillGroup title="Frameworks & Librerías" items={DataCV.skills.frameworks} />
        <SkillGroup title="UI / Estilos" items={DataCV.skills.ui} />
        <SkillGroup title="Bases de Datos" items={DataCV.skills.databases} />
        <SkillGroup title="Herramientas" items={DataCV.skills.tools} />
        <SkillGroup title="Metodologías" items={DataCV.skills.methodologies} />
        <SkillGroup title="Otros" items={DataCV.skills.others} />

      </div>
    </section>
  );
}

type Props = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: Props) {
  return (
    <div>
      <h3 className="text-gray-400 mb-2">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="bg-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
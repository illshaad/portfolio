import { presentation, experiences, projets } from "../../data/portfolio/data";

export function Code() {
  return (
    <div className="bg-sky-950 h-full flex items-center justify-center sm: p-12 ">
      <div>
        <code className="font-bold text-[#8C52FF] sm: text-sm">
          Presentation : {"{"}
        </code>
        {Object.entries(presentation).map(([key, value], index) => (
          <div key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code className="text-green-600 sm: text-sm">{key}</code>:{" "}
            <code className="text-blue-600 sm: text-sm">"{value}",</code>
          </div>
        ))}
        <code className="font-bold text-[#8C52FF]">{"}"},</code>
        <div className="my-2" />
        <code className="font-bold text-[#8C52FF]  sm: text-sm">
          Experience : {"{"}{" "}
        </code>
        {experiences.map((experience, index) => (
          <div key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code className="text-green-600  sm: text-sm">
              {experience.year}
            </code>
            :{" "}
            <code className="text-blue-600  sm: text-sm">
              "{experience.role} @ {experience.company}",
            </code>
          </div>
        ))}
        <code className="font-bold text-[#8C52FF]">{"}"},</code>
        <div className="my-2" />
        <code className="font-bold text-[#8C52FF]  sm: text-sm">
          Projets : {"{"}{" "}
        </code>
        {Object.entries(projets).map(([key, value], index) => (
          <div key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code className="text-green-600  sm: text-sm">{key}</code>:{" "}
            <code className="text-blue-600  sm: text-sm ">
              <a href={value} target="_blank" rel="noreferrer">
                "{value}"
              </a>
              ,
            </code>
          </div>
        ))}
        <code className="font-bold text-[#8C52FF]">{"}"}</code>
      </div>
    </div>
  );
}

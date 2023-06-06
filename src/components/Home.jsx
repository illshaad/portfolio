import Logo from "../assets/logo.png";
import { presentation, experiences, projets } from "../data/data";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="animate__animated animate__fadeInLeft bg-slate-50 h-full w-full flex flex-col items-center justify-center">
        <img src={Logo} alt="logo" width={250} />
        <p className="text-center px-4 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]">
          En tant que développeur web full-stack, j'utilise React, React-Native,
          Next.js et Node.js pour créer des applications performantes et
          interactives.
        </p>
      </div>
      <div className="bg-sky-950 h-full px-4 flex items-center justify-center">
        <div>
          <code className="font-bold text-[#8C52FF]">Présentation : {"{"}</code>
          {Object.entries(presentation).map(([key, value], index) => (
            <pre key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <code className="text-green-600">{key}</code>:{" "}
              <code className="text-blue-600">"{value}",</code>
            </pre>
          ))}
          <code className="font-bold text-[#8C52FF]">{"}"},</code>
          <br />
          <br />
          <code className="font-bold text-[#8C52FF]">Experience : {"{"} </code>
          {experiences.map((experience, index) => (
            <pre key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <code className="text-green-600">{experience.year}</code>:{" "}
              <code className="text-blue-600">
                "{experience.role} @ {experience.company}",
              </code>
            </pre>
          ))}
          <code className="font-bold text-[#8C52FF]">{"}"},</code>
          <br />
          <br />
          <code className="font-bold text-[#8C52FF]">Projets : {"{"} </code>
          {Object.entries(projets).map(([key, value], index) => (
            <pre key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <code className="text-green-600">{key}</code>:{" "}
              <code className="text-blue-600">
                <a href={value} target="_blank" rel="noreferrer">
                  "{value}"
                </a>
                ,
              </code>
            </pre>
          ))}
          <code className="font-bold text-[#8C52FF]">{"}"}</code>
        </div>
      </div>
    </div>
  );
}

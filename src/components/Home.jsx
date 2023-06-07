import Logo from "../assets/logo.png";
import { presentation, experiences, projets } from "../data/data";
import Button from "./Button";

export default function Home() {
  return (
    <div className="md:flex-row sm: flex flex-col items-center justify-center h-screen">
      <div className="animate__animated animate__fadeInLeft bg-slate-50  w-full flex flex-col items-center justify-center sm:pb-6">
        <img src={Logo} alt="logo" width={250} />
        <p className=" text-center px-4 pb-6 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]  sm: text-sm ">
          En tant que développeur web full-stack, j'utilise React, React-Native,
          Next.js et Node.js pour créer des applications performantes et
          interactives.
        </p>
        <Button />
      </div>
      <div className="bg-sky-950 h-full px-4 py-4 flex items-center justify-center sm: h-screen">
        <div>
          <code className="font-bold text-[#8C52FF] sm: text-sm">
            Présentation : {"{"}
          </code>
          {Object.entries(presentation).map(([key, value], index) => (
            <div key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <code className="text-green-600 sm: text-sm">{key}</code>:{" "}
              <code className="text-blue-600 sm: text-sm">"{value}",</code>
            </div>
          ))}
          <code className="font-bold text-[#8C52FF]">{"}"},</code>
          <br />
          <br />
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
          <br />
          <br />
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
    </div>
  );
}

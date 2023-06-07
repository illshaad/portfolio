import Logo from "../assets/logo.png";
import Button from "./Button";

export default function Home({ nextStep }) {
  return (
    <div className="animate__animated animate__fadeInLeft bg-slate-50  w-full h-screen flex flex-col items-center justify-center sm:pb-6">
      <img src={Logo} alt="logo" width={250} />
      <p className=" text-center px-4 pb-6 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]  sm: text-sm ">
        En tant que développeur web full-stack, j'utilise React, React-Native,
        Next.js et Node.js pour créer des applications performantes et
        interactives.
      </p>
      <Button />

      <span
        onClick={() => nextStep(1)}
        className="cursor-pointer px-4 pt-2 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]  sm: text-sm "
      >
        Venez m'ecrire un message je ne mort pas !
      </span>
    </div>
  );
}

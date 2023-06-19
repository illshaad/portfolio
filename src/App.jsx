import "animate.css";
import { useState } from "react";
import ContactUs from "./components/portfolio/ContactUs";
import { Code } from "./components/portfolio/Code";
import Home from "./components/portfolio/Home";
import Blog from "./components/blog/Blog";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = (step, data) => {
    setStep(step, data);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const stepComponent = [
    <Home key="0" nextStep={nextStep} />,
    <ContactUs key="1" nextStep={nextStep} prevStep={prevStep} />,
    <Blog key="2" nextStep={nextStep} prevStep={prevStep} />,
  ];

  return (
    <div className="md:flex-row sm:flex flex-col items-center justify-center h-screen">
      <>
        {stepComponent[step]}
        <Code />
      </>
    </div>
  );
}

export default App;

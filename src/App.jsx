import "animate.css";
import { useState } from "react";
import ContactUs from "./components/ContactUs";
import { Code } from "./components/Code";
import Home from "./components/Home";

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
  ];

  return (
    <div className="md:flex-row sm: flex flex-col items-center justify-center sm: h-screen">
      <>
        {stepComponent[step]}
        <Code />
      </>
    </div>
  );
}

export default App;

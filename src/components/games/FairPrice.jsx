import { useState } from "react";

export default function FairPrice({ prevStep }) {
  const [state, setState] = useState({
    message: "",
    command: "",
    output: [],
    random: Math.floor(Math.random() * 10) + 1,
  });

  const { message, command, output, random } = state;
  const handleInputChange = (e) => {
    setState((prevState) => ({ ...prevState, command: e.target.value }));
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      executeCommand();
      fairPrice(command);
    }
  };

  const executeCommand = () => {
    setState((prevState) => ({
      ...prevState,
      output: [...prevState.output, { command, output: message }],
      command: "",
    }));
  };

  const fairPrice = (number) => {
    const transform = parseInt(number);
    if (isNaN(transform)) {
      return setState((prevState) => ({
        ...prevState,
        message: "Veuillez entrer un nombre",
      }));
    }
    if (transform < random) {
      setState((prevState) => ({ ...prevState, message: "C'est plus !" }));
    } else if (transform > random) {
      setState((prevState) => ({ ...prevState, message: "C'est moins !" }));
    } else {
      setState((prevState) => ({
        ...prevState,
        message: "Bravo tu as trouvé le juste prix !",
      }));
    }
  };

  const reset = () => {
    setState({
      message: "",
      command: "",
      output: [],
      random: Math.floor(Math.random() * 10) + 1,
    });
  };

  return (
    <div className="animate__animated animate__fadeInLeft w-full flex flex-col items-center justify-center sm:pb-6">
      <div className="mx-auto max-w-screen-xl py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center ">
          <h1 className="text-2xl font-bold sm:text-1xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]">
            Mini jeux
          </h1>
          <p className="mt-2 sm:text-sm text-gray-500 pb-6">
            Trouve le juste prix ! <br />* Prix compris entre 1 à 10
          </p>
        </div>

        <div
          className="bg-gray-900 text-white p-4 rounded-lg h-96 w-96"
          style={{ overflowY: "scroll", maxHeight: "300px" }}
        >
          <div>
            {output.map((item, index) => (
              <div key={index}>
                <span className="text-green-400">$ {item.command}</span>
              </div>
            ))}
          </div>
          <div className="mb-2">
            $ {message ? message : "Entrez un nombre"}
            <input
              className="bg-transparent border-none focus:outline-none text-green-400"
              type="text"
              value={command}
              onChange={handleInputChange}
              onKeyDown={handleEnterKey}
              autoFocus
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => reset()}
          className=" cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]"
        >
          Reset
        </button>
        <button
          onClick={() => prevStep()}
          className=" cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]"
        >
          Retour
        </button>
      </div>
    </div>
  );
}

import "animate.css";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <div className="relative">
      <Home />
      <div className="absolute bottom-10 left-[655px]">
        <Button />
      </div>
    </div>
  );
}

export default App;

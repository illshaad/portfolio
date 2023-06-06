import "animate.css";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <div className="h-screen">
      <Home />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm: top-10">
        <Button />
      </div>
    </div>
  );
}

export default App;

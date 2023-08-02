import { useState } from "react";
import diceIcon from "./assets/images/icon-dice.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);
  const getAdvice = async () => {
    const response: Response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  };
  return (
    <main className="bg-darkBlue w-full h-full flex justify-center items-center  ">
      <div className="bg-darkGrayishBlue p-5 rounded-lg flex flex-col items-center justify-center max-w-sm sm:max-w-lg">
        <p className="uppercase text-neonGreen tracking-widest">advice #{id}</p>
        <p className="text-lightCyan mt-5 ">{advice}</p>
        <div className="mb-14 mt-5 sm:hidden">
          <img src={patternDividerMobile} alt="" />
        </div>
        <div className="mb-14 mt-5 hidden sm:inline-block">
          <img src={patternDividerDesktop} alt="" className="" />
        </div>
        <button className="z-10 -mb-14 overflow-visible bg-neonGreen rounded-full p-5">
          <img src={diceIcon} alt="" onClick={getAdvice} />
        </button>
      </div>
    </main>
  );
}

export default App;

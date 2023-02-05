import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? `relative dark` : "relative"}>
      <div className="bg-light dark:bg-darkbg text-darktext dark:text-lighttext min-h-[100vh]">
        <div className=" w-[80%] sm:w-[70%] m-auto pb-8 font-Poppins">
          <Header dark={dark} setDark={setDark} />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

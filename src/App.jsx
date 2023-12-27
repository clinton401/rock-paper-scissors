import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Bonus from "./Components/Bonus/Bonus";
import { AnimatePresence } from "framer-motion";
import Normal from "./Components/normal/Normal";
import { useState, createContext, useEffect } from "react";

export const MyContext = createContext();

function App() {
  const [userScore, setUserScore] = useState(() => {
    const uscore = JSON.parse(window.localStorage.getItem("user_score"));
    return uscore !== null ? uscore : 0;
  });

  const [computerScore, setComputerScore] = useState(() => {
    const cscore = JSON.parse(window.localStorage.getItem("computer_score"));
    return cscore !== null ? cscore : 0;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "computer_score",
      JSON.stringify(computerScore)
    );
  }, [computerScore]);

  useEffect(() => {
    window.localStorage.setItem("user_score", JSON.stringify(userScore));
  }, [userScore]);

  const values = {
    userScore,
    setUserScore,
    computerScore,
    setComputerScore,
  };

  const location = useLocation();

  return (
    <>
      <MyContext.Provider value={values}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="hard" element={<Bonus />} />
            <Route path="normal" element={<Normal />} />
          </Routes>
        </AnimatePresence>
      </MyContext.Provider>
    </>
  );
}

export default App;

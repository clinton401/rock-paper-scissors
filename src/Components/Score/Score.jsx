import React, { useContext } from "react";
import { MyContext } from "../../App";
import scss from "./Score.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,

        y: -200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}


function Score({setActive, active, setResponse, setDecision, setImageSwitch, setComputerClass, setComputerChoice, setHumanChoice}) {
  const { userScore, setUserScore, computerScore, setComputerScore } =
        useContext(MyContext);


    
  function restart() {
    setUserScore(0);
      setComputerScore(0);
      setActive(false);
      setResponse(false);
      setDecision(false);
      setImageSwitch(false);
      setComputerClass("");
      setComputerChoice("");
      setHumanChoice("");
      
  }
  

  return (
    <motion.div
      className={scss.score}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <span>
        <FontAwesomeIcon
          icon={faRotateLeft}
          className={scss.restart}
          onClick={restart}
        />
        <h4>User</h4>
        <h1>{userScore}</h1>
      </span>
      <span>
        <h4>Computer</h4>
        <h1>{computerScore}</h1>
      </span>
    </motion.div>
  );
}

export default Score;

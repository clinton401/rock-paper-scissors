import { motion } from "framer-motion";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../App";
import Score from "../Score/Score";
import bcss from "./Bonus.module.css";
import pentagon from "../../assets/bg-pentagon.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import rock from "../../assets/icon-rock.svg";
import spock from "../../assets/icon-spock.svg";
import lizard from "../../assets/icon-lizard.svg";
import imgLocation from "../../assets/image-rules-bonus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Rules from "../About/Rules";

const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const leftAnimation = {
  hidden: {
    opacity: 0,
    x: -200,
    rotate: 360,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,

      ease: "easeInOut",
    },
  },
};
const rightAnimation = {
  hidden: {
    opacity: 0,
    x: 200,
    rotate: -360,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const upAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
    rotate: -360,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const btnAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function Bonus() {
  const [rulesActive, setRulesActive] = useState("false");
  const [computerChoice, setComputerChoice] = useState("");
  const [humanChoice, setHumanChoice] = useState("");
  const [active, setActive] = useState(false);
  const [decision, setDecision] = useState(false);
  const [response, setResponse] = useState(false);
  const [imageSwitch, setImageSwitch] = useState(false);
  const [computerClass, setComputerClass] = useState("");
  const {  setUserScore, setComputerScore } =
    useContext(MyContext);
  const [captions, setCaptions] = useState("");
  const navigate = useNavigate();
  let availableChoices = ["paper", "rock", "scissors", "spock", "lizard"];

  const rulesHandler = () => {
    setRulesActive(!rulesActive);
  };
  const choiceHandler = (choice) => {
    const randomIndex = Math.floor(Math.random() * availableChoices.length);
    const computerRandomChoice = availableChoices[randomIndex];
    setActive(!active);
    setTimeout(() => {
      setDecision(!decision);
    }, 1000);
    setTimeout(() => {
      setImageSwitch(!imageSwitch);
    }, 1100);
    setTimeout(() => {
      setResponse(!response);
    }, 1500);
    setHumanChoice(choice);
    setComputerChoice(computerRandomChoice);
  };

  useEffect(() => {
    // The logic for updating scores and captions
    setTimeout(() => {
      if (humanChoice === computerChoice) {
        setCaptions("Tie");
      } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "lizard") ||
        (humanChoice === "lizard" && computerChoice === "spock") ||
        (humanChoice === "spock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "lizard") ||
        (humanChoice === "lizard" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "spock") ||
        (humanChoice === "spock" && computerChoice === "rock")
      ) {
        setUserScore((prevScore) => prevScore + 1);
        setCaptions("You Win");
      } else {
        setComputerScore((prevScore) => prevScore + 1);
        setCaptions("You Lose");
      }
    }, 1500);
  }, [humanChoice, computerChoice, setUserScore, setComputerScore]);

  function setHumanImage() {
    if (humanChoice === "paper") {
      return paper;
    } else if (humanChoice === "scissors") {
      return scissors;
    } else if (humanChoice === "rock") {
      return rock;
    }
    else if (humanChoice === 'spock') {
      return spock
    }
    else if (humanChoice === 'lizard') {
      return lizard
    }
    else {
      return ""
    }
  }
  function setHumanClass() {
    if (humanChoice === "paper") {
      return "paper";
    } else if (humanChoice === "scissors") {
      return "scissors";
    } else if (humanChoice === "rock") {
      return "rock";
    
    } else if (humanChoice === "spock") {
      return "spock";
    
    } else if (humanChoice === "lizard") {
      return "lizard";
    } else {
      return "";
    }
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your existing logic for setting the computer class
      if (computerChoice === "paper") {
        setComputerClass("paper");
      } else if (computerChoice === "scissors") {
        setComputerClass("scissors");
      } else if (computerChoice === "rock") {
        setComputerClass("rock");
      } else if (computerChoice === "lizard") {
        setComputerClass("lizard");
      } else if (computerChoice === "spock") {
        setComputerClass("spock");
      } else {
        setComputerClass("");
      }
    }, 1000);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if the computerChoice changes before 1 second
  }, [computerChoice]);
  function setComputerImage() {
    if (computerChoice === "paper") {
      return paper;
    } else if (computerChoice === "scissors") {
      return scissors;
    } else if (computerChoice === "rock") {
      return rock;
    } else if (computerChoice === "spock") {
      return spock;
    } else if (computerChoice === "lizard") {
      return lizard;
    } else {
      return "";
    }
  }
  // console.log({ humanChoice, computerChoice, captions });

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className={bcss.bonus}
      exit="exit"
    >
      <Score
        setActive={setActive}
        active={active}
        setResponse={setResponse}
        setDecision={setDecision}
        setImageSwitch={setImageSwitch}
        setComputerClass={setComputerClass}
        setComputerChoice={setComputerChoice}
        setHumanChoice={setHumanChoice}
      />
      {/* <div> */}

      <div
        className={`hard-choices ${active ? "activeClass" : ""}`}
        id="hard-choices"
      >
        <img src={pentagon} alt="pentagon" />
        <motion.button
          variants={btnAnimation}
          aria-label="scissors"
          className="scissors"
          onClick={() => choiceHandler("scissors")}
        >
          <img src={scissors} alt="paper image" />
        </motion.button>
        <div className="scs-rk">
          {" "}
          <motion.button
            variants={leftAnimation}
            aria-label="spock"
            className="spock"
            onClick={() => choiceHandler("spock")}
          >
            <img src={spock} alt="scissors image" />
          </motion.button>
          <motion.button
            variants={rightAnimation}
            aria-label="paper"
            className="paper"
            onClick={() => choiceHandler("paper")}
          >
            <img src={paper} alt="rock image" />
          </motion.button>
        </div>
        <div className="sp-li">
          <motion.button
            variants={upAnimation}
            aria-label="lizard"
            className="lizard"
            onClick={() => choiceHandler("lizard")}
          >
            <img src={lizard} alt="rock image" />
          </motion.button>
          <motion.button
            variants={rightAnimation}
            aria-label="rock"
            className="rock"
            onClick={() => choiceHandler("rock")}
          >
            <img src={rock} alt="rock image" />
          </motion.button>
        </div>
      </div>
      <div
        className={`second-choices ${active ? "activeClass" : ""}`}
        id="second-choices"
      >
        <nav>
          <h4>YOU </h4>
          <h4>COMPUTER</h4>
        </nav>
        <div>
          <button
            aria-label={humanChoice}
            className={`second-btns ${setHumanClass()}`}
          >
            <img src={setHumanImage()} alt="" />
          </button>
          {response ? (
            <span>
              <h3>{captions}</h3>
              <button
                className="re-do"
                onClick={() => {
                  setActive(false);
                  setResponse(!response);
                  setDecision(!decision);
                  setImageSwitch(!imageSwitch);
                  setComputerClass("");
                  setComputerChoice("");
                  setHumanChoice("");
                }}
              >
                PLAY AGAIN
              </button>
            </span>
          ) : null}

          <button
            aria-label={humanChoice}
            className={`second-btns ${computerClass}`}
            id={computerClass}
          >
            {!decision ? (
              <div className="loader"></div>
            ) : (
              <img src={setComputerImage()} alt="" />
            )}
          </button>
        </div>
        {response ? (
          <span className="mobile-span">
            <h3>{captions}</h3>
            <button
              className="re-do"
              onClick={() => {
                setActive(false);
                setResponse(!response);
                setDecision(!decision);
                setImageSwitch(!imageSwitch);
                setComputerClass("");
                setComputerChoice("");
                setHumanChoice("");
              }}
            >
              PLAY AGAIN
            </button>
          </span>
        ) : null}
      </div>
      <div className={bcss.aboutRules}>
        <motion.button
          className={bcss.leftBtn}
          onClick={() => navigate("/")}
          variants={btnAnimation}
        >
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} className={bcss.left} />
        </motion.button>

        <motion.button
          className={bcss.button}
          onClick={rulesHandler}
          variants={btnAnimation}
        >
          {" "}
          RULES
        </motion.button>
      </div>
      {!rulesActive ? (
        <Rules
          imgLocation={imgLocation}
          rulesActive={rulesActive}
          setRulesActive={setRulesActive}
        />
      ) : null}
    </motion.div>
  );
}

export default Bonus;

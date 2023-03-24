import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import leftRock from "../img/left-rock.png";
import leftPaper from "../img/left-paper.png";
import leftScissors from "../img/left-scissors.png";
import rightRock from "../img/right-rock.png";
import rightPaper from "../img/right-paper.png";
import rightScissors from "../img/right-scissors.png";
import "./Game.scss";
import ScoreBoard from "../components/ScoreBoard";
import { useNavigate } from "react-router-dom";
import {
  clearScore,
  incrementPc,
  incrementUser,
  setScore,
} from "../redux/gameSlice/gameSlice";
function Game() {
  const userScore = useSelector((state) => state.counter.userScore);
  const pcScore = useSelector((state) => state.counter.pcScore);
  const name = useSelector((state) => state.counter.name);
  const [draw, setDraw] = useState(false);
  const [userMove, setUserMove] = useState("");
  const [pcMove, setPcMove] = useState("");
  const [winnerPc, setWinnerPc] = useState(false);
  const [winnerUser, setWinnerUser] = useState(false);
  const dispatch = useDispatch();

  function saveResults() {
    localStorage.setItem("score", JSON.stringify({ pcScore, userScore }));
    window.location.reload(false);
  }

  function getPcMove() {
    let pcMoves = ["Rock", "Paper", "Scissors"];
    let pcMoveNumber = Math.floor(Math.random() * pcMoves.length);
    return pcMoves[pcMoveNumber];
  }
  function battleClickHandler(e) {
    setDraw(false);
    let pcMove = getPcMove();
    let move = e.target.id.slice(4, e.target.length);
    setUserMove(move);
    setWinnerPc(false);
    setWinnerUser(false);
    setPcMove(pcMove);
    console.log(move);
    console.log(pcMove);
    if (pcMove && move) {
      if (pcMove === "Rock" && move === "Scissors") {
        dispatch(incrementPc());
        setWinnerPc(true);
      }
      if (pcMove === "Paper" && move === "Scissors") {
        dispatch(incrementUser());
        setWinnerUser(true);
      }
      if (pcMove === "Scissors" && move === "Rock") {
        dispatch(incrementUser());
        setWinnerUser(true);
      }

      if (pcMove === "Scissors" && move === "Paper") {
        dispatch(incrementPc());
        setWinnerPc(true);
      }
      if (pcMove === "Paper" && move === "Rock") {
        dispatch(incrementPc());
        setWinnerPc(true);
      }
      if (pcMove === "Rock" && move === "Paper") {
        dispatch(incrementUser());
        setWinnerUser(true);
      }
      if (pcMove === move) {
        setDraw(true);
      }
    }
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate("/");
    } else {
      navigate("name");
    }
  }, []);

  useEffect(() => {
    // getPcMove();
    let score = localStorage.getItem("score");
    if (score) {
      let parsed = JSON.parse(score);
      console.log(parsed);
      dispatch(setScore(parsed));
    }
  }, []);

  return (
    <>
      <div className="scoreboard__wrapper">
        <h3 style={{ color: "white", fontSize: "30px" }}>{name}</h3>
        <ScoreBoard pc={false} winner={winnerUser} />
        <h3 style={{ color: "red", fontSize: "30px" }}>PC</h3>
        <ScoreBoard pc={true} winner={winnerPc} />
        <button onClick={saveResults}>Save Result</button>
        <button onClick={() => dispatch(clearScore())}>Clear score</button>
      </div>
      {draw && (
        <div className="game__draw">
          <h3>DRAW</h3>
        </div>
      )}
      <div className="game">
        <div className="game__left">
          <img
            id="leftRock"
            src={leftRock}
            onClick={(e) => battleClickHandler(e)}
            alt=""
            className={userMove === "Rock" ? "game__left__slide" : null}
          />
          <img
            id="leftPaper"
            src={leftPaper}
            onClick={(e) => battleClickHandler(e)}
            alt=""
            className={userMove === "Paper" ? "game__left__slide" : null}
          />
          <img
            id="leftScissors"
            src={leftScissors}
            onClick={(e) => battleClickHandler(e)}
            alt=""
            className={userMove === "Scissors" ? "game__left__slide" : null}
          />
        </div>

        <div className="game__right">
          <img
            id="rightRock"
            src={rightRock}
            alt=""
            className={pcMove === "Rock" ? "game__right__slide" : null}
          />
          <img
            id="rightPaper"
            src={rightPaper}
            alt=""
            className={pcMove === "Paper" ? "game__right__slide" : null}
          />
          <img
            id="rightScissors"
            src={rightScissors}
            alt=""
            className={pcMove === "Scissors" ? "game__right__slide" : null}
          />
        </div>
      </div>
    </>
  );
}

export default Game;

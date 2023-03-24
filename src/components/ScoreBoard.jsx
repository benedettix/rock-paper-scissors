import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ScoreBoard.scss";
function ScoreBoard({ pc, winner }) {
  const userScore = useSelector((state) => state.counter.userScore);
  const pcScore = useSelector((state) => state.counter.pcScore);

  console.log(winner);
  return (
    <>
      <div className={`scoreboard  ${winner === true && "scoreboard--green"}`}>
        <div className="scoreboard__left">
          <h3>ROCK</h3>
          <h3>PAPER</h3>
          <h3>SCISSORS</h3>
        </div>
        <div className="scoreboard__right">
          <h3>Score</h3>
          <h4 style={{ color: pc ? "red" : "black" }}>
            {pc ? pcScore : userScore}
          </h4>
          {/* if pc red 0 */}
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;

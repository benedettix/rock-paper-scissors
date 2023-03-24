import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNameValue } from "../redux/gameSlice/gameSlice";
import "./Username.scss";
function Username() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="username">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="enter your name..."
      />
      <Link
        onClick={() => {
          dispatch(setNameValue({ name: name }));
        }}
        to={"/"}
      >
        Save
      </Link>
    </div>
  );
}

export default Username;

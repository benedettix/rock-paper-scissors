import { configureStore } from "@reduxjs/toolkit";
import gameRedcer from "../redux/gameSlice/gameSlice";

export default configureStore({
  reducer: {
    counter: gameRedcer,
  },
});

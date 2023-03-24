import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Game from "./pages/Game";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Username from "./pages/Username";
import { useEffect } from "react";

function App() {
  // const dispatch = useDispatch();
  const name = useSelector((state) => state.counter.name);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Game />} />

        <Route path="/name" element={<Username />} />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

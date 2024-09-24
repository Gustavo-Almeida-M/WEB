import { createBrowserRouter } from "react-router-dom";

import Link from "./pages/Link";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Generations from "./pages/Generations";
import MyPokedex from "./pages/Pokedex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokemons",
        element: <Pokemon />,
      },
      {
        path: "myPokedex",
        element: <MyPokedex />,
      },
      {
        path: "geracoes",
        element: <Generations />,
      },
    ],
  },
]);

export default router;

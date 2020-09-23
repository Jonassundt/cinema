import React from "react";

import { ReactComponent as Bond } from "./bond.svg";
import { ReactComponent as Interstellar } from "./interstellar.svg";
import { ReactComponent as Batman } from "./batman.svg";
import { ReactComponent as Inception } from "./inception.svg";
import { ReactComponent as Starwars } from "./starwars.svg";
import { ReactComponent as Shawshank } from "./shawshank.svg";

const height = 400;

const posters = [
  <Bond name="Bond" height={height} width={height / 1.333} />,
  <Inception name="Inception" height={height} width="265" />,
  <Interstellar name="Interstellar" height={height} width={height / 1.333} />,
  <Batman name="Batman" height={height} width="265" />,
  <Shawshank name="Shawshank" height={height} width={height / 1.333} />,
  <Starwars name="Starwars" height={height} width={height / 1.333} />,
];

export default posters;

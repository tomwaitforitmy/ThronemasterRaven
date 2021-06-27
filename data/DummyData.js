import Game from "../models/Game";
import { houses } from "./Houses";

export function FillDummyData() {
  return [
    new Game(
      "123",
      "just a game",
      "ThisGuy",
      "any time",
      "necrach",
      houses.BARATHEON
    ),
    new Game("12", "just any game", "ThisGuy", "any time", "tom", houses.STARK),
    new Game(
      "24",
      "just another game",
      "ThisGuy",
      "any time",
      "We_Do_Not_Sow",
      houses.GREYJOY
    ),
    new Game(
      "25",
      "just yet another game",
      "ThisGuy",
      "any time",
      "Ser Hodor",
      houses.BARATHEON
    ),
    new Game(
      "125",
      "just a last game",
      "ThisGuy",
      "any time",
      "necrach",
      houses.BARATHEON
    ),
  ];
}

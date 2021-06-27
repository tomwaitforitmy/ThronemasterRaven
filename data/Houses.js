export const houses = {
  BARATHEON: "baratheon",
  GREYJOY: "greyjoy",
  LANNISTER: "lannister",
  MARTELL: "martell",
  STARK: "stark",
  TRYELL: "tyrell",
};

export const getHouseSigil = (house) => {
  switch (house) {
    case houses.BARATHEON:
      return "https://game.thronemaster.net/images/houseB.gif";
    case houses.GREYJOY:
      return "https://game.thronemaster.net/images/houseG.gif";
    case houses.LANNISTER:
      return "https://game.thronemaster.net/images/houseL.gif";
    case houses.STARK:
      return "https://game.thronemaster.net/images/houseS.gif";
    case houses.TRYELL:
      return "https://game.thronemaster.net/images/houseT.gif";
    default:
      throw new Error("Invalid house!");
  }
};

import { useCallback } from "react";
import { filterByTerm, loadThrones } from "../file";

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    let x = 1;
    let y = 2;

    expect(filterByTerm(input, "link")).toEqual(output);
  });

  test("get some json/html", () => {
    const input = "https://www.thronemaster.net/?goto=gaming&sub=my_games";

    const output = "???";

    loadThrones(input, () => {
      console.log("test");
    });
  });
});

export function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

export function fillDummyData() {
  var dummyData = [
    ["tom", "https://game.thronemaster.net/images/houseS.gif", "1"],
    ["necrach", "https://game.thronemaster.net/images/houseB.gif", "2"],
    ["We_Do_Not_Sow", "https://game.thronemaster.net/images/houseG.gif", "3"],
    ["Ser Hodor", "https://game.thronemaster.net/images/houseL.gif", "4"],
  ];
  return dummyData;
}

export function loadThrones(link) {
  const https = require("https");

  https
    .get(link, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log(JSON.parse(data).explanation);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });

  console.log("tommy");
}

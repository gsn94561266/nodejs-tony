const axios = require("axios");
const fs = require("fs/promises");

(async () => {
  try {
    let stockNo = await fs.readFile("stock.txt", "utf-8");
    let date = "20221111";
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();
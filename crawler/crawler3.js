const fs = require("fs");
const axios = require("axios");
// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
//2618, 2330, 2412
let p = new Promise((resolve, reject) => {
  fs.readFile("stock.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

(async () => {
  try {
    let stockNo = await p;
    let date = "20221111";
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
    console.log("await", response.data);
  } catch (e) {
    console.error(e);
  }
})();
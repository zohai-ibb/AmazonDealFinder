import fetch from "node-fetch";
const username = "zohaib";
const password = "Johaibansari002";

const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


try {

  const body = {
    source: "amazon_search",
    "domain": 'com',
    url: "deal of the day",
    "parse": true,
    "pages": 1
  };
  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
  });

  console.log(await response.json());
} catch (error) {
    console.log(error);
}

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})

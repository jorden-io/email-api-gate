const express = require("express");
const cors = require("cors");
const emailjs = require("@emailjs/nodejs"); // use this for server-side


const app = express();
//const PORT = 3000;

app.use(cors());
emailjs.init("QYDiP8OprjWL_B0gV");

app.post("/submit", async(req, res) => {
  const {name, email, message} = req.body;
  const templateParams = {
  name: name,
  email: email,
  message: message
};
await res.json(data.rows)
  emailjs.send("service_w5echny", "template_xukz8of", templateParams)
  .then(response => {
    console.log("SUCCESS!", response.status, response.text);
  })
  .catch(error => {
    console.log("FAILED...", error);
  });
})
module.exports.handler = serverless(app);


const express = require("express");
const cors = require("cors");
//const emailjs = require("@emailjs/browser"); // use this for server-side
const serverless = require("serverless-http");


const app = express();
//const PORT = 3000;

app.use(cors());
app.use(express.json());

//emailjs.init("QYDiP8OprjWL_B0gV");
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from your site’s REST endpoint!' });
});
// app.post("/submit", async(req, res) => {
//   const {name, email, message} = req.body;
//   const templateParams = {
//   name: name,
//   email: email,
//   message: message
// };
// await res.json(data.rows)
//   emailjs.send("service_w5echny", "template_xukz8of", templateParams)
//   .then(response => {
//     console.log("SUCCESS!", response.status, response.text);
//   })
//   .catch(error => {
//     console.log("FAILED...", error);
//   });
// })
module.exports.handler = serverless(app);


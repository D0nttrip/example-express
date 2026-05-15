const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set('trust proxy', true);

app.get("/", (req, res) => {
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];
  const time = new Date().toLocaleString();

  console.log("New visitor:");
  console.log("IP:", ip);
  console.log("Device:", userAgent);
  console.log("Time:", time);
  console.log("----------------------");

  res.send(`
    <h1>Welcome 👋</h1>
    <p>This page logs basic visitor data for educational purposes.</p>
    <p>Your visit has been recorded.</p>
  `);
});

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);

});

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
    <h1>YOUR IP is mine now</h1>
    <iframe src="https://giphy.com/embed/W2BaHNYfOBGuKHjlZO" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/TruRebelsDistro-69-6ix9ine-sixnine-W2BaHNYfOBGuKHjlZO">via GIPHY</a></p>
    <p>Your visit has been recorded.</p>
  `);
});

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);

});

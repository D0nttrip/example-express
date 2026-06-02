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
    <h1>BlueFace Baby</h1>
    <<div class="tenor-gif-embed" data-postid="26529836" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/nleblue123-gif-26529836">Nleblue123 GIF</a>from <a href="https://tenor.com/search/nleblue123-gifs">Nleblue123 GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>>

    <p>Your visit has been recorded.</p>
  `);
});

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);

});

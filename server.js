const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./db/connectionDB");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

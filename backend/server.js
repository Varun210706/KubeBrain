const express = require("express");
const cors = require("cors");

const app = express();

const metricsRoute = require("./routes/metrics");

app.use(cors());
app.use("/api/metrics", metricsRoute);

app.get("/", (req, res) => {
  res.json({ message: "KubeMind AI Backend Running" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
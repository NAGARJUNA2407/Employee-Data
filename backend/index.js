const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;



// CORS Configuration
var cors = require("cors");
app.use(
  cors({
    origin: "https://employee-data-omega.vercel.app/",
  })
);
// Middleware
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);


app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.json(`<h1>Backend is Running and this is '/' Route</h1>`);
});

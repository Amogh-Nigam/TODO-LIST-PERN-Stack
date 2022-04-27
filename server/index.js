const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());  // frontend can interact with backend
app.use(express.json());  // 

//routes

app.use("/authentication", require("./routes/jwtAuth")); //login & register routes

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});

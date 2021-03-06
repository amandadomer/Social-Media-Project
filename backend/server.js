const express = require("express");
const connectDB = require("./config/db");
const cors = require ('cors');


// middleware
const app = express();
app.use(
  express.json({ extended: false })
); /* Allows us to get data in req.body */
app.use(cors());

// connect database
connectDB();

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/posts"));

// port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express')
const app = express()
const connectDB = require('./config/db'); 
const userRoutes = require("./routers/authRoutes");
const postRoutes = require("./routers/postRoutes");
app.use(express.json());

connectDB();

app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/api/test", (req, res) => {
    res.json({ message: "MongoDB connection successful!" });
});

const port = process.env.PORT || 3000;
app.listen(port);
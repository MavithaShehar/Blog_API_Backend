const express = require('express')
const app = express()
const connectDB = require('./config/db'); 
const userhRoutes = require('./routers/userRoutes')
const postRoutes = require('./routers/postRoutes')
app.use(express.json());

connectDB();

app.use('/api/users',userhRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
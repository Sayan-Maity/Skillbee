import express from 'express';
const PORT = 3001
import allRoutes from './routes/all.route.js';

const app = express();
// Middleware
app.set ("view engine", "ejs")
app.use(express.static("public"))
app.use("/", allRoutes);




app.listen(3001, () => {
    console.log(`server is running at port ${PORT}`)
})


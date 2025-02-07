

import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import projectRoutes from './routes/project.route.js';

import cors from "cors"

connect()
const app = express();
app.use(cors({ origin: "http://localhost:3000",  // Adjust to match your frontend URL
  credentials: true}))
app.use(morgan("dev"))


app.use(express.json());  // Keep this

app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use("/users" ,userRoutes)
app.use("/projects" ,projectRoutes)


app.get("/", (req, res) =>{
  res.send("hello ");
})
export default app;
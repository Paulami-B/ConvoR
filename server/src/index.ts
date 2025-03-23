import express from "express";
import morgan from "morgan";    //http request logger middleware for nodejs
import http from "http";
import helmet from "helmet";    // Use Helmet to secure HTTP headers
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import { prismaClient } from "./utils/db";
const authRoutes = require("./routes/auth.route")

dotenv.config();

const app = express();
app.use(express.json({limit: "100kb"}));
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true       //   Access-Control-Allow-Credentials is a header that, when set to true , tells browsers to expose the response to the frontend JavaScript code. The credentials consist of cookies, authorization headers, and TLS client certificates.
}));
app.use(helmet())

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

const limiter = rateLimit({
    max: 3000,
    windowMs: 60*60*1000,
    message: "Too many requests from this IP. Please try again in one hour"
});

async function checkConnection() {
    try {
      // Attempt a simple query to verify connection
      await prismaClient.$queryRaw`SELECT 1`;
      console.log('Connected to the database successfully.');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
checkConnection();

app.use('/convor', limiter);

app.use('/convor/auth', authRoutes);

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Listening on running on PORT ${PORT}`)
})
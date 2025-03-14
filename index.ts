import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { PORT, connectMongoDB } from "./config";
import http from "http";
import setupSocketServer from "./service/wsService";
import UserRouter from "./routes/userRoutes";
// import TokenRouter from "./routes/tokenRoute";
// import TransactionRouter from "./routes/transactionRoute";
// import setupSocketServer from "./utils/wsServer";
// import CommentRouter from "./routes/CommentRoute";


// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectMongoDB();

// Create an instance of the Express application
const app = express();

const server = http.createServer(app);
setupSocketServer(server)

const whitelist = ["http://localhost:5173", "https://bondr-new-frontend.vercel.app"];

// Parse incoming JSON requests using body-parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up Cross-Origin Resource Sharing (CORS) options
app.use(cors({
    origin: whitelist,
}));

// Define routes for different API endpoints
app.use("/api/users", UserRouter);
// app.use("/api/tokens", TokenRouter);
// app.use("/api/transactions", TransactionRouter);
// app.use("/api/comment", CommentRouter);


// Define a route to check if the backend server is running
app.get("/", async (req: any, res: any) => {
    res.send("Backend Server is Running now!");
});

// Start the Express server to listen on the specified port
server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});

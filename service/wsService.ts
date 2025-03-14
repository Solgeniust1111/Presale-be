import { Server, Socket } from "socket.io";
// import { formatRealTimeData } from '../Services/TransactionService';
// import { fetchPriceChartData } from "./chart";

// Function to set up the WebSocket server
const setupSocketServer = (server: any): void => {
    const io = new Server(server, {
        cors: {
            origin: [
                "http://localhost:5173",
                // "https://bondr-new-frontend.vercel.app",
            ],
            methods: ["GET", "POST"],
        },
    });

    // io.on('connection', (socket: Socket) => {
    //     console.log('Client connected to WebSocket');

    // socket.on("SubAdd", async (data: any) => {
    //     const { subs } = data;
    //     if (!subs || subs.length === 0) return;

    //     const token = subs[0];
    //     socket.join(token);

    //     const historicalData = await fetchPriceChartData(10, 15788, 1568568, 1, token);
    //     socket.emit("historyData", historicalData);
    // });

    // socket.on("SubRemove", (data: any) => {
    //     const { subs } = data;
    //     if (!subs || subs.length === 0) return;

    //     socket.leave(subs[0]);
    // });

    // socket.on("disconnect", () => {
    //     console.log(`❌ Client disconnected: ${socket.id}`);
    // });
    // });
};

export default setupSocketServer;

// @ts-check
import express, { static as static_tatic } from "express";
import { join, dirname } from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
app.use(static_tatic(join(__dirname, "public")));

const io = new Server(httpServer);

io.on("connection", (socket) => {
    socket.on("newuser", (username) => {
        socket.broadcast.emit("update", `${username} joined the conversation`);
    });

    socket.on("exituser", (username) => {
        socket.broadcast.emit("update", `${username} left the conversation`);
    });

    socket.on("chat", (message) => {
        socket.broadcast.emit("chat", message);
    });
});

// Start the server
httpServer.listen(5001, () => {
  console.log("Server is running on port 5001");
});


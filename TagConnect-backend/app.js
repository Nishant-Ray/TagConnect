import express from "express";
import { createServer } from "node:http"
import bodyParser from 'body-parser';
import router  from "./routes.js";

// Port that the server API is listening to
const app = express();
const server = createServer(app);

// Middleware
app.use(bodyParser.json());

// Routes
// When calling routes inside of these router files call it as such "http://${address}:${port}/test/"
// You have to specify the specific sub-router you want to access and then call the routes in that sub-router
app.use("/", router);

const portNum = 8080;
const hostName = "localhost";

server.listen(portNum, hostName, async () => {
  const { port } = server.address();
  // const ipAddress = await getLocalIP(); // Assuming getLocalIP is an async function

  console.log(`Server running at http://${hostName}:${port}`);
});

const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env.PORT_;
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

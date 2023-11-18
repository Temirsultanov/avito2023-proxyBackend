import * as http from "node:http";
import { sleep } from "./sleep.mjs";
import { getPreparedGames } from "./games.mjs";
import { getPreparedGameById } from "./game.mjs";

const config = {
  port: 8000,
  hostname: "127.0.0.1",
  allowedClient: "http://localhost:3001"
}

const routes = {
  "games": getPreparedGames,
  "game": getPreparedGameById
}

const bodies = {
  "404": "Error: 404 Not found",
  "500": "Error: 500 Server is broken"
}

const splitURL = (url) => {
  const fullURL = new URL(url, `http://${config.hostname}:${config.port}`)
  return {
    route: fullURL.pathname.slice(1),
    params: fullURL.searchParams
  }
}

const server = http.createServer((request, response) => {
  console.log("Request to:", request.url);

  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", config.allowedClient);  
  
  const { route, params } = splitURL(request.url);

  if (!routes[route]) {
    response.statusCode = 404;
    response.end(bodies["404"])
    return;
  }

  sleep(2000).then(routes[route](params)).then((data) => {
    response.statusCode = 200;
    response.end(data);  
  }).catch((error) => {
    response.statusCode = error.code;
    response.end(bodies[error.code] || bodies[404]);
  })
})

server.listen(config.port, config.hostname, () => {
  console.log(`Server started at ${config.hostname}:${config.port}`);
})
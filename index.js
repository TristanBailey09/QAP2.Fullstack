const http = require("http");

const routes = require("./routes.js");
global.DEBUG = false;

const server = http.createServer((request, response) => {
  if (DEBUG) console.log(request.url, request.method);
  let path = "/views/";
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      routes.indexPage;
      break;
    case "/tarkov":
      path += "tarkov.html";
      response.statusCode = 200;
      routes.tarkovPage;
      break;
    case "/maps":
      path += "maps.html";
      response.statusCode = 200;
      routes.mapsPage(path, response);
      break;
    case "/wipe":
      path += "wipe.html";
      response.statusCode = 200;
      routes.wipePage(path, response);
      break;
    case "/guns":
      path += "guns.html";
      response.statusCode = 200;
      routes.gunsPage(path, response);
      break;
    case "/ammo":
      path += "ammo.html";
      response.statusCode = 200;
      routes.ammoPage(path, response);
      break;
    default:
      path += "four.html";
      response.statusCode = 404;
      routes.fourPage(path, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});

const fs = require("fs");

function indexPage(path, response) {
  if (DEBUG) console.log(`index.html page was requested.`);
  displayFile(path, response);
}

function tarkovPage(path, response) {
  if (DEBUG) console.log(`tarkov.html page was requested.`);
  displayFile(path, response);
}

function wipePage(path, response) {
  if (DEBUG) console.log(`wipe.html page was requested.`);
  displayFile(path, response);
}

function mapsPage(path, response) {
  if (DEBUG) console.log(`maps.html page was requested.`);
  displayFile(path, response);
}

function gunsPage(path, response) {
  if (DEBUG) console.log(`guns.html page was requested.`);
  displayFile(path, response);
}

function ammoPage(path, response) {
  if (DEBUG) console.log(`ammo.html page was requested.`);
  displayFile(path, response);
}

function fourPage(path, response) {
  if (DEBUG) console.log(`four.html page was requested.`);
  displayFile(path, response);
}

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      if (DEBUG) console.log("file was successfully opened.");
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}
module.exports = {
  indexPage,
  tarkovPage,
  wipePage,
  mapsPage,
  gunsPage,
  ammoPage,
  fourPage,
};

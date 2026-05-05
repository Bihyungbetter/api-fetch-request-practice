const http = require("http");
const fs = require("fs");
const path = require("path");

let notes = [
  { id: 1, title: "First note", complete: false },
  { id: 2, title: "Fetch practice", complete: false },
];

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data, null, 2));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function serveFile(response, filePath, contentType) {
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(file);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, "http://localhost:3000");
  const noteMatch = url.pathname.match(/^\/api\/notes\/(\d+)$/);

  if (request.method === "GET" && url.pathname === "/") {
    serveFile(response, path.join(__dirname, "public", "index.html"), "text/html");
    return;
  }

  if (request.method === "GET" && url.pathname === "/app.js") {
    serveFile(response, path.join(__dirname, "public", "app.js"), "text/javascript");
    return;
  }

  if (request.method === "GET" && url.pathname === "/styles.css") {
    serveFile(response, path.join(__dirname, "public", "styles.css"), "text/css");
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/notes") {
    sendJson(response, 200, { notes });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/notes") {
    const body = await readBody(request);
    const note = {
      id: Date.now(),
      title: body.title || "Untitled note",
      complete: false,
    };

    notes.push(note);
    sendJson(response, 201, { note });
    return;
  }

  if (noteMatch) {
    const id = Number(noteMatch[1]);
    const note = notes.find((item) => item.id === id);

    if (!note) {
      sendJson(response, 404, { error: "Note not found" });
      return;
    }

    if (request.method === "PUT") {
      const body = await readBody(request);
      note.title = body.title || "Untitled note";
      note.complete = Boolean(body.complete);
      sendJson(response, 200, { note });
      return;
    }

    if (request.method === "PATCH") {
      const body = await readBody(request);
      Object.assign(note, body);
      sendJson(response, 200, { note });
      return;
    }

    if (request.method === "DELETE") {
      notes = notes.filter((item) => item.id !== id);
      sendJson(response, 200, { deleted: note });
      return;
    }
  }

  sendJson(response, 404, { error: "Route not found" });
});

server.listen(3000, () => {
  console.log("Practice API running at http://localhost:3000");
});

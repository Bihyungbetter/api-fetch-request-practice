const output = document.querySelector("#output");

function show(data) {
  output.textContent = JSON.stringify(data, null, 2);
}

document.querySelector("#getBtn").addEventListener("click", async () => {
  // TODO: Write a GET request to /api/notes.
  // 1. Store the fetch result in a variable named response.
  // 2. Convert the response to JSON.
  // 3. Pass the data into show(data).
});

document.querySelector("#postBtn").addEventListener("click", async () => {
  // TODO: Write a POST request to /api/notes.
  // Include:
  // method: "POST"
  // headers with "Content-Type": "application/json"
  // body with a title value
});

document.querySelector("#putBtn").addEventListener("click", async () => {
  // TODO: Write a PUT request to /api/notes/1.
  // PUT replaces the whole note.
  // Include a title and complete value in the body.
});

document.querySelector("#patchBtn").addEventListener("click", async () => {
  // TODO: Write a PATCH request to /api/notes/1.
  // PATCH updates only part of the note.
  // Send only the field that should change.
});

document.querySelector("#deleteBtn").addEventListener("click", async () => {
  // TODO: Write a DELETE request to /api/notes/1.
  // DELETE does not need a body for this activity.
});

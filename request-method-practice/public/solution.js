const output = document.querySelector("#output");

function show(data) {
  output.textContent = JSON.stringify(data, null, 2);
}

document.querySelector("#getBtn").addEventListener("click", async () => {
  const response = await fetch("/api/notes");
  const data = await response.json();
  show(data);
});

document.querySelector("#postBtn").addEventListener("click", async () => {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New note from POST",
    }),
  });

  const data = await response.json();
  show(data);
});

document.querySelector("#putBtn").addEventListener("click", async () => {
  const response = await fetch("/api/notes/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Replaced note from PUT",
      complete: true,
    }),
  });

  const data = await response.json();
  show(data);
});

document.querySelector("#patchBtn").addEventListener("click", async () => {
  const response = await fetch("/api/notes/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      complete: false,
    }),
  });

  const data = await response.json();
  show(data);
});

document.querySelector("#deleteBtn").addEventListener("click", async () => {
  const response = await fetch("/api/notes/1", {
    method: "DELETE",
  });

  const data = await response.json();
  show(data);
});

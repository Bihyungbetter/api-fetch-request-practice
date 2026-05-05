const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function runRequests() {
  // GET reads data from the API.
  const getResponse = await fetch(`${API_URL}/1`);
  const getData = await getResponse.json();
  print("GET: read one post", getData);

  // POST sends new data to the API.
  const postResponse = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New post",
      body: "This post was created with POST.",
      userId: 1,
    }),
  });
  
  // PUT replaces an entire item.
  const putResponse = await fetch(`${API_URL}/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "Replaced post",
      body: "PUT replaces the whole post.",
      userId: 1,
    }),
  });
  // PATCH updates part of an item.
  const patchResponse = await fetch(`${API_URL}/1`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Updated title only",
    }),
  });

  // DELETE removes an item.
  const deleteResponse = await fetch(`${API_URL}/1`, {
    method: "DELETE",
  });
}

runRequests();

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function print(title, data) {
  console.log(`\n--- ${title} ---`);
  console.log(data);
}

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
  const postData = await postResponse.json();
  print("POST: create a post", postData);

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
  const putData = await putResponse.json();
  print("PUT: replace a post", putData);

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
  const patchData = await patchResponse.json();
  print("PATCH: update part of a post", patchData);

  // DELETE removes an item.
  const deleteResponse = await fetch(`${API_URL}/1`, {
    method: "DELETE",
  });
  const deleteData = await deleteResponse.json();
  print("DELETE: delete a post", deleteData);
}

runRequests();

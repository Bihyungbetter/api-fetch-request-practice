const API_URL = "https://jsonplaceholder.typicode.com/posts";

function print(title, data) {
  console.log(`\n--- ${title} ---`);
  console.log(data);
}

async function practiceRequests() {
  // 1. GET
  const getResponse = await fetch(`${API_URL}/1`);
  const getData = await getResponse.json();
  print("GET", getData);

  // 2. POST
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
  print("POST", postData);

  // 3. PUT
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
  print("PUT", putData);

  // 4. PATCH
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
  print("PATCH", patchData);

  // 5. DELETE
  const deleteResponse = await fetch(`${API_URL}/1`, {
    method: "DELETE",
  });
  const deleteData = await deleteResponse.json();
  print("DELETE", deleteData);
}

practiceRequests();

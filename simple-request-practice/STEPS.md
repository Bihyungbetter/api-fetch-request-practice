# Student Steps

## 1. Clone the Repo

```bash
git clone REPO_URL_HERE
cd REPO_FOLDER_HERE/simple-request-practice
```

## 2. Open the Practice File

Open:

```txt
practice.js
```

## 3. Write One Request at a Time

Start with the GET request.

```js
const response = await fetch(`${API_URL}/1`);
const data = await response.json();
print("GET", data);
```

Run:

```bash
node practice.js
```

## 4. Add POST

```js
const response = await fetch(API_URL, {
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

const data = await response.json();
print("POST", data);
```

Run again:

```bash
node practice.js
```

## 5. Add PUT, PATCH, and DELETE

Use `solution.js` only to check answers.

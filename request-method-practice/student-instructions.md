# Student Instructions

The API is already created. The goal is to write the request syntax.

Open:

```txt
public/app.js
```

Complete each button function.

## 1. GET

Write a request that reads all notes:

```js
const response = await fetch("/api/notes");
const data = await response.json();
show(data);
```

## 2. POST

Write a request that creates a note:

```js
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
```

## 3. PUT

Write a request that replaces note 1:

```js
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
```

## 4. PATCH

Write a request that updates part of note 1:

```js
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
```

## 5. DELETE

Write a request that deletes note 1:

```js
const response = await fetch("/api/notes/1", {
  method: "DELETE",
});

const data = await response.json();
show(data);
```

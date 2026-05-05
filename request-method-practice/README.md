# Request Method Practice

This activity uses a ready-made local API. The API is already built. The goal is
to practice sending different request methods with `fetch()`.

## Start the API

```bash
cd request-method-practice
node server.js
```

Open:

```txt
http://localhost:3000
```

## Practice Goals

- `GET`: read all notes
- `POST`: create a new note
- `PUT`: replace a whole note
- `PATCH`: update part of a note
- `DELETE`: remove a note

## Main API Endpoints

```txt
GET    /api/notes
POST   /api/notes
PUT    /api/notes/1
PATCH  /api/notes/1
DELETE /api/notes/1
```

The browser page has buttons for each request method, but the request code in
`public/app.js` is intentionally incomplete. Students write the `fetch()` syntax
for each method.

Use `public/solution.js` only after the activity or when checking answers.

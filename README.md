# API Fetch Request Practice

This practice shows the five common request methods:

```txt
GET
POST
PUT
PATCH
DELETE
```

The file uses a free fake API:

```txt
https://jsonplaceholder.typicode.com/posts
```

Nothing is saved permanently. This API is only for practice.

## 1. Clone the Repository

```bash
git clone https://github.com/BihyungBetter/api-fetch-request-practice.git
```

## 2. Go Into the Folder

```bash
cd api-fetch-request-practice
```

## 3. Run the Practice File

```bash
node practice.js
```

The terminal will print the result of each request.

## What the File Does

`practice.js` sends five requests:

```txt
GET     reads one post
POST    creates a fake post
PUT     replaces a fake post
PATCH   updates part of a fake post
DELETE  deletes a fake post
```

## Important Notes

`fetch()` sends a request to an API.

`await` waits for the API response.

`response.json()` converts the API response into JavaScript data.

`console.log()` prints the result in the terminal.

## Run Again

The file can be run as many times as needed:

```bash
node practice.js
```

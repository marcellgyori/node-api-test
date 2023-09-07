# Node API Test Application

## Overview

The Node API Test application is a simple Node.js and Express-based backend application that provides a REST API to interact with a predefined dataset. The API allows you to retrieve posts, comments, and tags from a JSON file.

## Setup

To set up the Node API Test application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary npm packages using the following command:

```sh
npm install
```

Copy the `.env.template` file and rename the copy to `.env`. Update the `.env` file with the necessary environment variable, such as your preferred port number:

```sh
PORT=3000
```

## Running the Application

To run the application, use the following command in your terminal:

```sh
npm start
```

Your API should now be running at [http://localhost:3000] (or whatever port number you specified in your `.env` file).

## API Endpoints

Here are the available API endpoints you can use:

### Posts

-   **GET** `/api/posts`: Retrieve a list of all posts
-   **GET** `/api/posts/:id`: Retrieve a single post by its ID

### Comments

-   **GET** `/api/posts/:id/comments`: Retrieve all comments associated with a specific post ID

### Tags

-   **GET** `/api/tags/:name`: Retrieve all posts associated with a specific tag name

## Running Tests

To run the tests, use the following command in your terminal:

```sh
npm test
```

## Linting

To lint the project files, use the following command in your terminal:

```sh
npm run lint
```

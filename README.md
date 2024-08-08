# MERN Task Project

This project is a task management application with authentication, developed using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register, log in, and manage their tasks efficiently. The application includes features such as creating, editing, and deleting tasks, as well as route protection using JWT authentication.

## Features

- **User Authentication**: Secure registration and login using JWT.
- **Task Management**: Create, edit, and delete tasks.
- **Responsive User Interface**: Developed with React and Vite for a fast and smooth user experience.
- **RESTful API**: Backend built with Express and MongoDB to handle CRUD operations.
- **Modern Styling**: Uses Tailwind CSS for modern and responsive design.

## Technologies Used

- **MongoDB**: NoSQL database to store users and tasks.
- **Express**: Node.js framework to build the server API.
- **React**: JavaScript library to build the user interface.
- **Node.js**: Runtime environment for the backend server.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Tailwind CSS**: CSS framework for quick and responsive styling.

## Installation and Usage

For more details on how to install and use the application, refer to the [Installation](#installation) and [Usage](#usage) sections in the [main README](README.md).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/mern-task-project.git
    ```

2. Navigate to the server and client directories and install the dependencies:
    ```sh
    cd mern-task-project
    npm install
    cd client
    npm install
    ```

3. Create a `.env` file in the root of the project and add the necessary environment variables (see [Environment Variables](#environment-variables)).

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. Start the client:
    ```sh
    cd client
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```plaintext
.env
.env.example
client/
    .eslintrc.cjs
    .gitignore
    index.html
    package.json
    postcss.config.js
    public/
    README.md
    src/
        api/
        App.jsx
        assets/
        components/
        context/
        index.css
        main.jsx
        pages/
        ProtectedRoute.jsx
    tailwind.config.js
    vite.config.js
package.json
README.md
src/
    .gitignore
    app.js
    config/
        config.js
    controllers/
        auth.controller.js
        tasks.controller.js
    db.js
    index.js
    libs/
        jwt.js
    middlewares/
        validateToken.js
    models/
    routes/
    schemas/

## Environment Variables

Create a .env file in the root of the project with the following variables:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=MERNDBe
TOKEN_SECRET=your-token-secret
PORT=3000
You can also use the .env.example file as a reference.

## Scripts

The following scripts are defined in the package.json file:

dev: Starts the server in development mode using nodemon.

## Dependencies

The main dependencies of the project are:

bcryptjs
cookie-parser
cors
dotenv
express
jsonwebtoken
mongoose
morgan
zod
For more details, see the package.json file.
# American Football Blogging Site

The **American Football Blogging Site** is a full-stack application where users can share, interact with, and manage thoughts on American football. This project features a RESTful API backend with Node.js and MongoDB, paired with a modern React front end for an engaging user experience.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [GitHub](#github)
6. [Email](#email)

---

## Features

- **Create, Read, Update, and Delete (CRUD) Thoughts**: Share and manage your football-related thoughts.
- **Reactions**: Add and delete reactions to thoughts for user engagement.
- **Friend Management**: Add and remove friends to build your network.
- **Responsive Design**: A modern front-end built with React, styled for usability on all devices.
- **RESTful API**: A robust backend using Node.js, Express, and MongoDB with Mongoose for seamless database interactions.

---

## Installation

Follow these steps to install and set up the application:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/football-blog.git
   cd football-blog
2. Set up the backend:
    - Navigate to the server directory:
    ``` bash
    cd server
    ```
    - Install Dependencies
    ```bash
    npm i
    ```
    - Create a .env file
    ```bash
    touch .env
    ```
    - Add the following environment variables to the .env file:
    ```bash
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/football_blog
    ```
3. Set up frontend
    - Navigate to the client directory
    ```bash
    npm i
    ```
4. Start the application
    - Start the backend server:
    ```bash
    cd ../server
    npm run start
    ```
    - Start the react from the front end
    ```bash
    cd ../client
    npm start
    ```
## Usage

1. Navigate to the application in your browser
2. Features to explore:
    - View all Thoughts: Browse recent thoughts from users.
    - Create a Thought: Share your football insights.
    - React to Thoughts: Engage with others by adding reactions.
    - Manage Friends: Build your network by adding or removing friends.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
- Github: github.com/aangus98
- Email: mrangus298@gmail.com

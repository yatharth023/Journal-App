# MiniJournal 📝

A clean and modern full-stack web application for your daily thoughts. Built with the MERN stack (MongoDB, Express, React, Node.js), MiniJournal provides a serene, minimalist interface to help you focus on what matters: your reflections.

![MiniJournal Screenshot](https://i.imgur.com/k6lFpA9.png)
*(You should replace this with a screenshot of your own running application!)*

## ✨ Key Features

* **Secure User Authentication**: JWT-based authentication ensures your journal is private and secure.
* **Full CRUD Functionality**: Create, read, update, and delete your journal entries with ease.
* **Mood Tracking**: Associate each entry with a mood (😄, 😢, 🎉, etc.) for better self-reflection.
* **Slick & Responsive UI**: A calming, minimalist design that works beautifully on both desktop and mobile devices.
* **Chronological View**: Entries are automatically sorted by date, with the newest appearing first.

## 🛠️ Tech Stack

This project is built using the MERN stack and other modern web technologies.

| Frontend                               | Backend                                     | Database                               |
| -------------------------------------- | ------------------------------------------- | -------------------------------------- |
| **[React.js](https://reactjs.org/)** | **[Node.js](https://nodejs.org/)** | **[MongoDB](https://www.mongodb.com/)** |
| **[React Router](https://reactrouter.com/)** | **[Express.js](https://expressjs.com/)** | **[Mongoose](https://mongoosejs.com/)** |
| **[Axios](https://axios-http.com/)** | **[JSON Web Token](https://jwt.io/)** |                                        |
| **[React Icons](https://react-icons.github.io/react-icons/)** | **[Bcrypt.js](https://github.com/kelektiv/bcrypt.js)** |                                |

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
* [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/minijournal.git](https://github.com/your-username/minijournal.git)
    cd minijournal
    ```

2.  **Backend Setup**
    ```sh
    # Navigate to the backend folder
    cd minijournal-backend

    # Install dependencies
    npm install

    # Create a .env file in the backend root
    touch .env
    ```
    Add the following environment variables to your `.env` file. Get your `MONGO_URI` from MongoDB Atlas.
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_and_long_key
    PORT=5000
    ```
    ```sh
    # Start the backend server
    npm start
    ```
    Your backend API will be running at `http://localhost:5000`.

3.  **Frontend Setup**
    ```sh
    # Navigate to the frontend folder from the root directory
    cd minijournal-frontend

    # Install dependencies
    npm install

    # Start the React development server
    npm start
    ```
    Your frontend application will be running at `http://localhost:3000`.

##  API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint             | Description                      | Auth Required |
| :----- | :------------------- | :------------------------------- | :-----------: |
| `POST` | `/api/auth/register` | Register a new user.             |      No       |
| `POST` | `/api/auth/login`    | Log in an existing user.         |      No       |
| `GET`  | `/api/entries`       | Get all entries for the user.    |      Yes      |
| `POST` | `/api/entries`       | Create a new journal entry.      |      Yes      |
| `PATCH`| `/api/entries/:id`   | Update a specific entry.         |      Yes      |
| `DELETE`| `/api/entries/:id`   | Delete a specific entry.         |      Yes      |

## 💡 Future Improvements

This is an ongoing project with plans for future enhancements:
- [ ] Search and filter entries by keyword or mood.
- [ ] Implement a tagging system for entries.
- [ ] Add a dark mode / light mode toggle.
- [ ] Allow users to export their journal data as a PDF or text file.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
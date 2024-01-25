## Task App with Flutter, Express.js, and MySQL

This project is a task management application built using Flutter for the frontend, Express.js for the backend, and MySQL for the database. The app allows users to manage their tasks efficiently, including creating, updating, deleting, and marking tasks as completed.

### Features

- **User Authentication**: Users can sign up and log in securely to access their tasks.
- **Task Management**: Users can create, update, delete, and mark tasks as completed.
- **Real-time Updates**: Changes made by one user are instantly reflected for all users viewing the same task.
- **Data Persistence**: Tasks are stored in a MySQL database, ensuring data integrity and reliability.

### Technologies Used

![Flutter](https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png) ![Express.js](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png) ![MySQL](https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1920px-MySQL.svg.png)

- **Flutter**: A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MySQL**: An open-source relational database management system.

### Installation

#### Frontend (Flutter)

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the `frontend` directory:

   ```
   cd frontend
   ```

3. Install dependencies:

   ```
   flutter pub get
   ```

4. Run the app:

   ```
   flutter run
   ```

#### Backend (Express.js with MySQL)

1. Clone the repository (if not already done):

   ```
   git clone <repository-url>
   ```

2. Navigate to the `backend` directory:

   ```
   cd backend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up MySQL database:
   - Create a MySQL database and table for storing tasks. You can use the provided SQL script (`tasks.sql`) to create the necessary table.
   - Update the database connection details in `config.js` file to match your MySQL database configuration.

5. Start the server:

   ```
   npm start
   ```

### Usage

1. Once the frontend and backend are running, access the application through a web browser or on a mobile device.
2. Sign up for a new account or log in if you already have an account.
3. Start managing your tasks by creating, updating, deleting, or marking tasks as completed.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the [MIT License](LICENSE).

### Acknowledgements

Special thanks to the developers and contributors of Flutter, Express.js, and MySQL for providing robust frameworks and tools that simplify the development of modern web and mobile applications with database integration.

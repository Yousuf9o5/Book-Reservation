**Book Reservation**

This is a simple Express.js application for managing book reservations. Users can view available books, make reservations, and view their reservations. This README will guide you through setting up and running the application.

### Prerequisites

- Node.js installed on your machine
- npm package manager

### Installation

1. Clone this repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd book-reservation
   ```

3. Install dependencies using npm:
   ```
   npm install
   ```

### Database Setup

This application uses Sequelize ORM with MySQL as its database. Make sure you have MySQL installed and running on your local machine.

#### Steps to Setup MySQL

1. Install MySQL on your local machine if you haven't already. You can download MySQL from the [official website](https://dev.mysql.com/downloads/).

2. Start the MySQL server.

3. Create a new MySQL database for the application (book_reservations).

### Usage

To start the server, run:

```
npm run dev
```

The server will start running on `http://localhost:3000` by default.

### Running Seeding Data

To set up the database schema and seed initial data, run the following command:

```
npm run seed
```

The seeding process will add the following admin and user data to the database:

```javascript
export const adminData = {
  fullName: "Yousif Ahmed",
  email: "yousif@email.com",
  password: "9351151945",
  role: "admin",
};

export const userData = {
  fullName: "John Doe",
  email: "john@email.com",
  password: "12345678Jd",
  role: "user",
};
```

These entries include an admin user with full administrative privileges and a regular user for testing and demonstration purposes.

### Usage

To start the server, run:

```
npm run dev
```

The server will start running on `http://localhost:3000` by default.

Below are the endpoints you requested, along with a brief description of their functionality:

### Book Endpoints

- `GET /api/v1/book/{id}`: Get details of a specific book by its ID.
- `GET /api/v1/book/`: Get a list of all books.
- `POST /api/v1/book/create`: Create a new book.
- `PUT /api/v1/book/update/{id}`: Update details of a book by its ID.
- `DELETE /api/v1/book/delete/{id}`: Delete a book by its ID.

### User Endpoints

- `GET /api/v1/user/{id}`: Get details of a specific user by their ID.
- `GET /api/v1/user/`: Get a list of all users.
- `POST /api/v1/user/create`: Create a new user.
- `PUT /api/v1/user/update/{id}`: Update details of a user by their ID.
- `DELETE /api/v1/user/delete/{id}`: Delete a user by their ID.

### Authentication Endpoints

- `POST /api/v1/auth/signup`: Register a new user.
- `POST /api/v1/auth/signin`: Sign in with email and password.
- `POST /api/v1/auth/change_password`: Change the password for the authenticated user.

### Reservation Endpoints

- `GET /api/v1/reservation`: Get a list of all reservations.
- `GET /api/v1/reservation/my_reservations`: Get reservations made by the authenticated user.
- `POST /api/v1/reservation/create`: Create a new reservation only (admin).

These endpoints will allow users to interact with the application to manage books, users, reservations, and authentication.

### Happy Reading! 📚📖

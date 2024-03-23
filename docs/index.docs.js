import swaggerJSDoc from "swagger-jsdoc";
import getAllBooks from "./books/getAll.books.js";
import createBooks from "./books/create.books.js";
import updateBooks from "./books/update.books.js";
import deleteBooks from "./books/delete.books.js";
import getAllUsers from "./users/getAll.users.js";
import createUsers from "./users/create.users.js";
import updateUsers from "./users/update.users.js";
import deleteUsers from "./users/delete.users.js";
import byIdBooks from "./books/byId.books.js";
import byIdUsers from "./users/byId.users.js";
import signupAuth from "./auth/signup.auth.js";
import signinAuth from "./auth/signin.auth.js";
import changePasswordAuth from "./auth/change.password.auth.js";
import getAllReservation from "./reservations/getAll.reservation.js";
import createReservation from "./reservations/create.reservation.js";
import getMyReservation from "./reservations/getMy.reservation.js";
import usersSchema from "./users/users.schema.js";
import booksSchema from "./books/books.schema.js";
import reservationsSchema from "./reservations/reservations.schema.js";

/** @type {swaggerJSDoc.Tag[]} */
const tags = [
  {
    name: "Auth",
    description: "Auth API",
  },
  {
    name: "Users",
    description: "CRUD API for user",
  },
  {
    name: "Books",
    description: "CRUD API for books",
  },
  {
    name: "Reservations",
    description: "CRUD API for reservations",
  },
];

/** @type {swaggerJSDoc.Options} */
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        User: usersSchema,
        Book: booksSchema,
        Reservation: reservationsSchema,
      },
    },
    security: [{ bearerAuth: [] }],
    info: {
      title: "Book Reservation",
      version: "1.0.0",
      description: "Book Reservation API",
    },
    servers: [
      { url: "http://localhost:3000", description: "Development Server" },
    ],
    tags: tags,
    paths: {
      "/api/v1/book/{id}": byIdBooks,
      "/api/v1/book/": getAllBooks,
      "/api/v1/book/create": createBooks,
      "/api/v1/book/update/{id}": updateBooks,
      "/api/v1/book/delete/{id}": deleteBooks,

      "/api/v1/user/{id}": byIdUsers,
      "/api/v1/user/": getAllUsers,
      "/api/v1/user/create": createUsers,
      "/api/v1/user/update/{id}": updateUsers,
      "/api/v1/user/delete/{id}": deleteUsers,

      "/api/v1/auth/signup": signupAuth,
      "/api/v1/auth/signin": signinAuth,
      "/api/v1/auth/change_password": changePasswordAuth,

      "/api/v1/reservation": getAllReservation,
      "/api/v1/reservation/my_reservations": getMyReservation,
      "/api/v1/reservation/create": createReservation,
    },
  },
  apis: [],
};

export default swaggerOptions;

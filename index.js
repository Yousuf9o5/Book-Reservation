import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import morgan from "morgan";
import swaggerOptions from "./docs/index.docs.js";
import { databaseConnection } from "./database/db.index.js";
import BookRouter from "./src/routers/book.router.js";
import UserRouter from "./src/routers/user.router.js";
import ReservationRouter from "./src/routers/reservation.router.js";

dotenv.config();

const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// env vars
const PORT = process.env.PORT || 3001;

//setup connection
databaseConnection(true)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const isAllowedOrigin = (origin, callback) => {
  const isAllowed = "*";
  callback(null, isAllowed);
};

const corsOptions = {
  origin: isAllowedOrigin,
  optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
  // res.redirect("/public/index.html");
  res.send("server is running");
});

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/public", express.static("./public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//routers
app.use("/api/v1/book", BookRouter);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/reservation", ReservationRouter);

// Listen for connections
app.listen(PORT, () => {
  console.log(`App:
  http://localhost:${PORT}
Docs:
  http://localhost:${PORT}/api-docs`);
});

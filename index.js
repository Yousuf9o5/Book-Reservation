import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import morgan from "morgan";
import swaggerOptions from "./docs/index.js";
import { databaseConnection } from "./database/db.index.js";

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

// Listen for connections
app.listen(PORT, () => {
  console.log(`App:
  http://localhost:${PORT}
Docs:
  http://localhost:${PORT}/api-docs`);
});

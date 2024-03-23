import { DataTypes } from "sequelize";
import sequelize from "../db.index.js";

const Book = sequelize.define(
  "Book",
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "books",
    timestamps: true,
  }
);

// Book.sync({ force: false })
//   .then(() => console.log("Done sync this Model to the DB"))
//   .catch((err) => console.log("Error", err));

export default Book;

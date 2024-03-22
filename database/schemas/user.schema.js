import { DataTypes } from "sequelize";
import sequelize from "../db.index";
import Book from "./book.schema";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "users",
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

// Define associations
User.hasMany(Book, { foreignKey: "userId", as: "books" });

export default User;

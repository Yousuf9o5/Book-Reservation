import faker from "faker";
import Book from "../../database/schemas/book.schema.js";
import User from "../../database/schemas/user.schema.js";
import bcrypt from "bcrypt";
import { adminData, userData } from "./data.seed.js";

class Seeder {
  static async BookSeed() {
    for (let i = 1; i <= 1000; i++) {
      const bookData = {
        // Add productName for search so i can use search not just for book title
        name: `Book Title ${faker.commerce.productName()}`,
        description: faker.lorem.paragraph(),
      };

      await Book.create({ ...bookData });
    }
  }

  static async UserSeeder(data) {
    const password = await bcrypt.hash(data.password, 10);

    await User.create({ ...data, password });
  }
}

try {
  const booksCount = await Book.count();
  const usersCount = await User.count();

  if (booksCount == 0) {
    await Seeder.BookSeed();
  }

  if (usersCount == 0) {
    await Seeder.UserSeeder(adminData);
    await Seeder.UserSeeder(userData);
  }

  console.log("Database seeded successfully.");
} catch (error) {
  console.error("Error seeding database:", error);
}

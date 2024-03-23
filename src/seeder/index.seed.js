import faker from "faker";
import Book from "../../database/schemas/book.schema.js";
import User from "../../database/schemas/user.schema.js";
import bcrypt from "bcrypt";

try {
  //counts
  const booksCount = await Book.count();
  const usersCount = await User.count();

  for (let i = 1; i <= 1000; i++) {
    if (booksCount >= 1000) break;

    // Add productName for search so i can use search not just for book title
    await Book.create({
      name: `Book Title ${faker.commerce.productName()}`,
      description: faker.lorem.paragraph(),
    });
  }

  if (!usersCount) {
    await User.create({
      fullName: "Yousif ahmed",
      email: "yousif@email.com",
      password: await bcrypt.hash("9351151945", 10),
      role: "admin",
    });
  }

  console.log("Database seeded successfully.");
} catch (error) {
  console.error("Error seeding database:", error);
}

import faker from "faker";
import Book from "../../database/schemas/book.schema.js";

try {
  for (let i = 1; i <= 1000; i++) {
    // Add productName for search so i can use search not just for book title
    await Book.create({
      name: `Book Title ${faker.commerce.productName()}`,
      description: faker.lorem.paragraph(),
    });
  }

  console.log("Database seeded successfully.");
} catch (error) {
  console.error("Error seeding database:", error);
}

import faker from "faker";
import Book from "../../database/schemas/book.schema.js";

try {
  for (let i = 0; i < 1000; i++) {
    await Book.create({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
    });
  }

  console.log("Database seeded successfully.");
} catch (error) {
  console.error("Error seeding database:", error);
}

import User from "../../database/schemas/user.schema.js";

/**
 * Retrieves paginated list of users.
 * @param {{limit:number, offset:number}} options - Options for pagination (limit, offset).
 * @returns {Promise<{ users: Object[], totalPages: number }>} A promise that resolves to an object containing the list of users and total pages.
 */
export async function GetUsersService({ limit, offset }) {
  try {
    const { count } = await User.findAndCountAll();
    const totalPages = Math.ceil(count / limit);

    const users = await User.findAll({
      limit: limit,
      offset: offset - 1,
    });

    return { users, totalPages };
  } catch (error) {
    throw new Error(`Failed to retrieve users: ${error.message}`);
  }
}

/**
 * Retrieves a user by their ID.
 * @param {number | string} id - The ID of the user to retrieve.
 * @returns {Promise<Object | null>} A promise that resolves to the user object if found, or null otherwise.
 */
export async function GetUserByIdService(id) {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error(`Failed to retrieve user with ID ${id}: ${error.message}`);
  }
}

/**
 * Retrieves a user based on provided fields.
 * @param {Object} fields - The fields to match for user retrieval.
 * @returns {Promise<Object | null>} A promise that resolves to the user object if found, or null otherwise.
 * @throws {Error} Throws an error if the retrieval process fails.
 */
export async function GetUserByFieldsService(fields) {
  try {
    return await User.findOne({ where: { ...fields } });
  } catch (error) {
    throw new Error(`Failed to retrieve user with ID ${id}: ${error.message}`);
  }
}

/**
 * Creates a new user.
 * @param {Object} userData - Data of the user to be created (fullName, email, password, role).
 * @returns {Promise<Object>} A promise that resolves to the created user object.
 */
export async function CreateUserService(userData) {
  try {
    return await User.create({ ...userData });
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

/**
 * Updates a user by their ID.
 * @param {number} id - The ID of the user to update.
 * @param {Object} newData - New data to update the user with (fullName, email, password, role).
 * @returns {Promise<Object | null>} A promise that resolves to the updated user object if found, or null otherwise.
 */
export async function UpdateUserByIdService(id, newData) {
  try {
    const { fullName, email, password, role } = newData;

    const user = await User.findByPk(id);

    if (fullName) {
      user.set("fullName", fullName);
    }
    if (email) {
      user.set("email", email);
    }
    if (password) {
      user.set("password", password);
    }
    if (role) {
      user.set("role", role);
    }

    await user.save();

    return user;
  } catch (error) {
    throw new Error(`Failed to update user with ID ${id}: ${error.message}`);
  }
}

/**
 * Deletes a user by their ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the user is deleted successfully, or false otherwise.
 */
export async function DeleteUserByIdService(id) {
  try {
    const user = await User.findByPk(id);

    await user.destroy();
    return true;
  } catch (error) {
    throw new Error(`Failed to delete user with ID ${id}: ${error.message}`);
  }
}

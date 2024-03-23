import { dateRegex } from "./regex.js";

/**
 * Checks if the provided date string is a valid future date.
 * @param {string} date - The date string to validate.
 * @returns {boolean} Returns true if the date is valid and in the future, otherwise false.
 */
export function isValidDate(date) {
  if (!dateRegex.test(date)) {
    return false;
  }

  const dateTime = new Date(date);
  const now = Date.now();

  if (dateTime.getTime() < now) {
    return false;
  }

  return true;
}

/**
 * Checks if the provided date is a valid future date.
 * @param {string | Date} date - The date to be checked.
 * @returns {boolean} Returns true if the date is valid and in the future, otherwise returns false.
 */
export function isValidFutureDate(date) {
  const dateTime = new Date(date);
  const now = Date.now();

  if (dateTime.getTime() < now) {
    return false;
  }

  return true;
}

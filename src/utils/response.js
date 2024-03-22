/**
 * Generates a success response for API requests.
 *
 * @param {number} status - The HTTP status code of the response (200, 201, 400, 402, 403, 500)
 * @param {*} data - The data to be included in the response (use generics if using TypeScript)
 * @param {string} msg - A message describing the response or indicating what is happening 🤔
 * @returns {object} - The success response object containing the status code, data, and message
 * */
export function success(status, data, msg) {
  return {
    status,
    data,
    msg,
  };
}

/**
 * Error response for API response
 *
 * @param {number} status - API response status code (e.g., 400, 404, 500)
 * @param {string} msg - Message describing the error
 * @param {object} data - Additional data related to the error (optional)
 * @returns {object} - Error response object containing status, message, and optional data
 */
export function error(status, msg, data = null) {
  return {
    status,
    msg,
    data,
  };
}

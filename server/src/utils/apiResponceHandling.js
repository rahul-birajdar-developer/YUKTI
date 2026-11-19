
/*
 * ApiResponse class
 *
 * Provides a consistent structure for successful API responses.
 */

class ApiResponse {
    constructor(statusCode, data, message = "Success") {

        // HTTP status code (200, 201, etc.)
        this.statusCode = statusCode;

        // Actual response data returned by the API.
        this.data = data;

        // Message describing the result.
        this.message = message;

        // Determines whether the operation was successful.
        this.success = statusCode < 400;
    }
}

// Export the class so it can be reused in controllers.
export default ApiResponse;

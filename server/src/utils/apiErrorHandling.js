
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        // Initialize the parent Error class with the error message.
        super(message);

        // HTTP status code, such as 400, 401, 404, or 500.
        this.statusCode = statusCode;

        // No response data when an API error occurs.
        this.data = null;

        // Indicates whether the operation was successful.
        this.success = false;

        // Additional error details, such as validation errors.
        this.errors = errors;

        // Preserve the provided stack trace or capture a new one.
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;

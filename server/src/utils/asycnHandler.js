
/*
 * Higher-Order Function (HOF)
 *
 * asyncHandler accepts another function (controller)
 * and returns a new asynchronous middleware function.
 *
 * It automatically catches errors from async controllers.
 */

const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            // Execute the controller function.
            await fn(req, res, next);
        } catch (error) {
            // Pass the error to Express error-handling middleware.
            next(error);
        }
    };
};

export default asyncHandler;

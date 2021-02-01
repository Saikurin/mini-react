export const RouteNotFoundException = function (route) {
    const error = new Error(`Route ${route} doesn't found`);

    if (Error.captureStackTrace){
        Error.captureStackTrace(error, RouteNotFoundException);
    }

    return error;
}

export const PathNotFound = function(path, object) {
    const error = new Error(`Path ${path} not found in ${JSON.stringify(object)}`);

    if (Error.captureStackTrace){
        Error.captureStackTrace(error, ComponentCantDisplay)
    }

    return error;
}

export const PropsInvalid = function (component) {
    const error = new Error(`Problem when adding the parameters of the component ${component}`);

    if (Error.captureStackTrace){
        Error.captureStackTrace(error, ComponentCantDisplay)
    }

    return error;
}

export const ComponentCantDisplay = function(component) {
    const error = new Error(`The component ${component} cannot be displayed because it does not implement the display() function.`);

    if (Error.captureStackTrace){
        Error.captureStackTrace(error, ComponentCantDisplay)
    }

    return error;
}

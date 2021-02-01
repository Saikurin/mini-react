import {type_check, type_check_v2} from "./Helpers";
import {PathNotFound} from "./Exceptions/Component";

Object.prototype.type_check = function(arg, types) {
    let isChecked = type_check_v2(arg, types);

    if(!types.properties) return isChecked;

    for (const key in types.properties) {
        isChecked = type_check(type_check(arg, 'object') ? arg[key] : arg, types.properties[key]);
        if (!isChecked) break;
    }

    return isChecked;
}

Object.prototype.prop_access = function(props) {
    let obj = this;

    if (obj === "undefined" || !obj) return obj;
    if (typeof props !== "string" || !props) return obj;

    let propPath = "";

    for (const accessKey of props.split(".")) {
        propPath += propPath.length > 0 ? `.${accessKey}` : accessKey;

        if (!obj[accessKey]) {
            throw new PathNotFound(propPath, obj);
        }
        obj = obj[accessKey];
    }

    return obj;
}

Object.prototype.propTypes = {};

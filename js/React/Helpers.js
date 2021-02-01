export const type_check = function (argument, type) {
    switch (typeof argument) {
        case "object":
            switch (type) {
                case "null":
                    return argument === null;
                case "array":
                    return Array.isArray(argument);
                default:
                    return argument !== null && !Array.isArray(argument);
            }
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof argument;
    }
}

export const type_check_v2 = function(argument, conf){
    for (let toCheck in conf) {
        switch (toCheck) {
            case 'type':
                if (!type_check(argument, conf.type)) return false;
                break;
            case 'value':
                if (JSON.stringify(argument, refReplacer()) !== JSON.stringify(conf.value, refReplacer())) return false;
                break;
            case 'enum':
                let isFound = false;
                for(value of conf.enum){
                    isFound = type_check_v2(argument, {value: value})
                    if (isFound) break;
                }
                if (!isFound) return false
                break
        }
    }

    return true;
}

export const events = ["hover",'blur', "scroll", "focus", "change", "click", "close", "open", "touch"]

export function refReplacer() {
    let m = new Map(), v= new Map(), init = null;

    return function(field, value) {
        let p= m.get(this) + (Array.isArray(this) ? `[${field}]` : '.' + field);
        let Complex= value===Object(value)

        if (Complex) m.set(value, p);

        let pp = v.get(value)||'';
        let path = p.replace(/undefined\.\.?/,'');
        let val = pp ? `#REF:${pp[0]=='[' ? '$':'$.'}${pp}` : value;

        !init ? (init=value) : (val===init ? val="#REF:$" : 0);
        if(!pp && Complex) v.set(value, path);

        return val;
    }
}

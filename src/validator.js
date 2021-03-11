function isNil(value) {
    return value === null || isUndefined(value);
}

function isFunction(value) {
    return typeof value === "function";
}

function isArray(value) {
    return Array.isArray(value);
}

function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
}

function isBoolean(value) {
    return typeof value === "boolean" || value instanceof Boolean;
}

function isUndefined(value) {
    return value === undefined;
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isNumber(value) {
    return typeof value === "number" || value instanceof Number;
}

function isEmpty(value) {
    if (isNil(value)) {
        return true;
    }
    if (Array.isArray(value) || typeof value === "string") {
        return value.length === 0;
    }
    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }
    return Object.keys(value).length === 0;
}

function isObject(value) {
    return typeof value === "object" || isFunction(value);
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}

module.exports = {
    isNil,
    isFunction,
    isArray,
    isString,
    isBoolean,
    isUndefined,
    isInteger,
    isNumber,
    isEmpty,
    isObject,
    isRegExp
};

const validator = require("./validator.js");
const cloneObject = require("./cloneObject.js");
const mergeObjects = require("./mergeObjects.js");

const utily = {
    ...validator,
    cloneObject,
    mergeObjects
};

module.exports = utily;

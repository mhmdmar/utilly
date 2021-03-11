const validator = require("./validator.js");
const cloneObject = require("./cloneObject.js");
const mergeObjects = require("./mergeObjects.js");

const utilly = {
    ...validator,
    cloneObject,
    mergeObjects
};

module.exports = utilly;

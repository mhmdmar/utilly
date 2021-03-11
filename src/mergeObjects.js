const cloneObject = require("./cloneObject");

function merge2Objects(target, source, hash = new WeakMap()) {
    if (target === undefined && source !== undefined) {
        return cloneObject(source);
    }

    if (hash.has(target)) {
        return hash.get(target);
    }

    if (typeof source === "object") {
        hash.set(target, source);
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (target[key] === undefined) {
                    target[key] = cloneObject(source[key]);
                } else {
                    if (
                        typeof target[key] === "object" &&
                        typeof source[key] === "object"
                    ) {
                        if (
                            Array.isArray(target[key]) &&
                            Array.isArray(source[key])
                        ) {
                            for (
                                let i = target[key].length;
                                i < source[key].length;
                                i++
                            ) {
                                target[key].push(cloneObject(source[key][i]));
                            }
                        } else {
                            target[key] = merge2Objects(
                                target[key],
                                source[key],
                                hash
                            );
                        }
                    }
                }
            }
        }
    }
    return target;
}

function mergeObjects(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        merge2Objects(target, source);
    }
    return target;
}

module.exports = mergeObjects;

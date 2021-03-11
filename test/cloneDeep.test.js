"use strict";

const chai = require("chai");
const cloneObject = require("../src/cloneObject.js");
const expect = chai.expect;

describe("clone Object", () => {
    it("should clone object correctly using cloneObject", () => {
        const object = {
            r: {
                e: [1, 2, 3],
                f: new Date(),
                g: Buffer.from("ABC")
            },
            foo() {
                return 1;
            }
        };
        const clonedObject = cloneObject(object);
        expect(cloneObject(object)).to.eql(clonedObject);
        expect(object === clonedObject).to.be.false;
        expect(object.r.e).to.eql(clonedObject.r.e);
        expect(object.r.e === clonedObject.r.e).to.be.false;
        expect(Buffer.isBuffer(clonedObject.r.g));
        expect(clonedObject.r.g === object.r.g).to.be.false;
        object.r.e = [1];
        expect(clonedObject.r.e).to.eql([1, 2, 3]);
        expect(cloneObject({a: {b: {c: {d: {e: 1}}}}})).to.eql({
            a: {b: {c: {d: {e: 1}}}}
        });
        expect(cloneObject({a: {b: {c: {d: {e: 1}}}}})).to.not.eql({
            a: {b: {c: {d: {e: 0}}}}
        });
    });

    it("should handle clone buffers", () => {
        const buffer = Buffer.from("ABC");
        expect(cloneObject(buffer)).to.eql(buffer);
    });

    it("should handle clone array with objects by value", () => {
        const object = {
            a: {aa: "a"}
        };
        const arr = [1, 2, object];
        const cloned = cloneObject(arr);
        expect(cloned).to.be.eql(arr);
        object.a.aa = "b";
        expect(cloned).to.be.not.eql(arr);
    });

    it("should handle clone map/array/date objects", () => {
        const map = new Map();
        const set = new Set();
        const date = new Date();
        map.set(1, 1).set(2, 2);
        set.add(1).add(2);
        const object = {
            map,
            set,
            date
        };
        expect(cloneObject(object)).to.eql({map, set, date});
    });

    it("should handle circular reference", () => {
        const obj = {a: {aa: 1}, b: {bb: 2}};
        obj.a.aa = obj.b;
        expect(cloneObject(obj).a.aa).to.eql(obj.b);
    });
});

"use strict";

const chai = require("chai");
const mergeObjects = require("../src/mergeObjects.js");
const cloneObject = require("../src/cloneObject.js");
const expect = chai.expect;

describe("merge objects", () => {
    it("should assign source properties if missing on `object`", () => {
        const object = {a: {b: 2}, d: 4};
        const source = {a: {b: 3, c: 3}, e: 5};
        const expected = {a: {b: 2, c: 3}, d: 4, e: 5};

        expect(mergeObjects(object, source)).to.eql(expected);
    });

    it("should accept multiple sources", () => {
        const source1 = {a: {b: 3}};
        const source2 = {a: {c: 3}};
        const source3 = {a: {b: 3, c: 3}};
        const source4 = {a: {c: 4}};
        const expected = {a: {b: 2, c: 3}};
        expect(mergeObjects({a: {b: 2}}, source1, source2)).to.eql(expected);
        expect(mergeObjects({a: {b: 2}}, source3, source4)).to.eql(expected);
    });

    it("should not overwrite `null` values", () => {
        const object = {a: {b: null}};
        const source = {a: {b: 2}};
        const actual = mergeObjects(object, source);

        expect(actual.a.b).to.equal(null);
    });

    it("should not overwrite regexp values", () => {
        const object = {a: {b: /x/}};
        const source = {a: {b: /y/}};
        const actual = mergeObjects(object, source);
        expect(actual.a.b).to.eql(/x/);
    });

    it("should overwrite `undefined` values", () => {
        const object = {a: {b: undefined}};
        const source = {a: {b: 2}};
        const actual = mergeObjects(object, source);
        expect(actual.a.b).to.equal(2);
    });

    it("should assign `undefined` values", () => {
        const source = {a: undefined, b: {c: undefined, d: 1}};
        const expected = cloneObject(source);
        const actual = mergeObjects({}, source);
        expect(actual).to.eql(expected);
    });

    it("should not modify sources", () => {
        const source1 = {a: 1, b: {c: 2}};
        const source2 = {b: {c: 3, d: 3}};
        const actual = mergeObjects({}, source1, source2);

        expect(actual).to.eql({a: 1, b: {c: 2, d: 3}});
        expect(source1).to.eql({a: 1, b: {c: 2}});
        expect(source2).to.eql({b: {c: 3, d: 3}});
    });

    it("should not attempt a merge of a string into an array", () => {
        const actual = mergeObjects({a: ["abc"]}, {a: "abc"});
        expect(actual.a).to.eql(["abc"]);
    });

    it("should extend array and not replace it", () => {
        const object = {
            a: [1]
        };
        const arr = [function () {}];
        const source = {
            a: [7, 8, arr]
        };
        const actual = mergeObjects(object, source);
        expect(actual.a).to.eql([1, 8, arr]);
    });

    it("should copy array by value", () => {
        const object = [0];
        const a = {b: 1};
        const source = [1, a];
        expect(mergeObjects(object, source)).to.eql([0, a]);
        a.b = 2;
        expect(mergeObjects(object, source)).to.not.eql([0, a]);
    });

    it("should handle circular reference", () => {
        const object = {
            foo: {b: {c: {d: {}}}},
            bar: {a: 2}
        };

        const source = {
            foo: {b: {c: {d: {}}}},
            bar: {}
        };

        object.foo.b.c.d = object;
        source.foo.b.c.d = source;
        source.bar.b = source.foo.b;
        const actual = mergeObjects(object, source);
        expect(actual.bar.b).to.eql(actual.foo.b);
        expect(actual.foo.b.c.d).to.eql(actual.foo.b.c.d.foo.b.c.d);
    });
});

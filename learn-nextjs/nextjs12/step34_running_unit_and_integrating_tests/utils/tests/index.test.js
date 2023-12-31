"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
describe("cutTextToLength", () => {
    test('Should cut a string that exceeds 10 characters', () => {
        const initialString = 'This is a 34 character long string';
        const cutResult = (0, __1.cutTextToLength)(initialString, 10);
        expect(cutResult).toEqual('This is a ...');
    });
    test("Should not cut a string if it's shorter than 10 characters", () => {
        const initialString = '7 chars';
        const cutResult = (0, __1.cutTextToLength)(initialString, 10);
        expect(cutResult).toEqual('7 chars');
    });
});
describe('slugify makes a string URL-safe', () => {
    test('Should convert a string to URL-safe format', () => {
        const initialString = 'This is a string to slugify';
        const slugifiedString = (0, __1.slugify)(initialString);
        expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
    });
    test('Should slugify a string with specialcharacters', () => {
        const initialString = 'This is a string to slugify!@#$%^&*()+';
        const slugifiedString = (0, __1.slugify)(initialString);
        expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
    });
});

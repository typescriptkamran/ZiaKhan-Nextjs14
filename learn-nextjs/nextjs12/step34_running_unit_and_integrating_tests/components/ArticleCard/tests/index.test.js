"use strict";
/**
 * @jest-environment jsdom
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const index_1 = __importDefault(require("../index"));
const utils_1 = require("../../../utils");
const mock_1 = require("./mock");
describe('ArticleCard', () => {
    test('Generated link should be in the correct format', () => {
        const component = (0, react_1.render)(<index_1.default {...mock_1.article}/>);
        const link = component.getByRole('link').getAttribute('href');
        expect(link).toBe('/articles/healthy-summer-meloncarrot-soup-u12w3o0d');
    });
    test('Generated summary should not exceed 100 characters', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_1.render)(<index_1.default {...mock_1.article}/>);
        const summary = react_1.screen.getByText((0, utils_1.cutTextToLength)(mock_1.article.body, 100));
        expect(summary).toBeDefined();
    }));
    test('Generated credits should contain author name', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_1.render)(<index_1.default {...mock_1.article}/>);
        const credits = react_1.screen.getByText(/John Doe/gm);
        expect(credits.textContent).toBe('Written by John Doe');
    }));
});

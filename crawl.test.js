//import {test, expect} from "@jest/globals"
//import {normalizeURL} from "./crawl";
const normalizeURL = require('./crawl')

const test_string = "http://AtestURL.com"

test('Any Result at All', ()=> {
    expect(normalizeURL(test_string)).not.toBe("")
})
import {test, expect} from "@jest/globals"
import {normalizeURL} from "./crawl.js";

const test_string = "https://blog.boot.dev/path/"
const test_string_r = "blog.boot.dev/path"
const test_string_2 = "https://blog.boot.dev/path"
const test_string_3 = "http://blog.boot.dev/path/"
const test_string_4 = "http://blog.boot.dev/path"

test('Any Result at All', ()=> {
    expect(normalizeURL(test_string)).not.toBe("")
})

test('test_string normalized', ()=> {
    expect(normalizeURL(test_string)).not.toBe(test_string_r)
})
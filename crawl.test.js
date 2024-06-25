import {test, expect} from "@jest/globals"
import {normalizeURL, getURLsFromHTML} from "./crawl.js"

const test_string = "https://blog.boot.dev/path/"
const test_string_r = "blog.boot.dev/path"
const test_string_2 = "https://blog.boot.dev/path"
const test_string_3 = "http://blog.boot.dev/path/"
const test_string_4 = "http://blog.boot.dev/path"

test('Any Result at All', ()=> {
    expect(normalizeURL(test_string)).not.toBe("")
})

test('test_string normalized', ()=> {
    expect(normalizeURL(test_string)).toBe(test_string_r)
})

test('test_string_2 normalized', ()=> {
    expect(normalizeURL(test_string_2)).toBe(test_string_r)
})

test('test_string_3 normalized', ()=> {
    expect(normalizeURL(test_string_3)).toBe(test_string_r)
})

test('test_string_4 normalized', ()=> {
    expect(normalizeURL(test_string_4)).toBe(test_string_r)
})

// Testing getURLsFromHTML
const base_URL = 'https://blog.boot.dev';
const html_1 =
    '<html>\n' +
    '    <body>\n' +
    '        <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>\n' +
    '    </body>\n' +
    '</html>';
const html_1_r = 'https://blog.boot.dev';

test('Basic URL from HTML', () => {
    expect(getURLsFromHTML(html_1, base_URL)).toBe(html_1_r)
})
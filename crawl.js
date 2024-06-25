import {URL} from 'url';
import {JSDOM} from "jsdom";
import jsDOM from "jsdom/lib/jsdom/living/attributes.js";

function normalizeURL(inputURL) {
    const sourceURL = new URL(inputURL);
    //console.log(sourceURL.hostname + stripTrailingSlash(sourceURL.pathname));
    return sourceURL.hostname + stripTrailingSlash(sourceURL.pathname);
}

export { normalizeURL };

function stripTrailingSlash(input) {
    return input.endsWith('/') ? input.slice(0, -1) : input;
}

function getURLSFromHTML(htmlBody, baseURL) {
    //const dom = new JSDOM(htmlBody);
    //return dom.window.document.querySelectorAll("a")
    return ""
}

export function getURLsFromHTML(htmlBody, baseURL) {}
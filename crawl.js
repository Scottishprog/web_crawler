import {URL} from 'url';
import {JSDOM} from "jsdom";

function normalizeURL(inputURL) {
    const sourceURL = new URL(inputURL);
    //console.log(sourceURL.hostname + stripTrailingSlash(sourceURL.pathname));
    return sourceURL.hostname + stripTrailingSlash(sourceURL.pathname);
}

export { normalizeURL };

function stripTrailingSlash(input) {
    return input.endsWith('/') ? input.slice(0, -1) : input;
}

function getURLsFromHTML(htmlBody, baseURL) {
    const dom = new JSDOM(htmlBody);
    const result = dom.window.document.querySelectorAll("a");
    let resultArray = [];
    for (const anchor of result){
        if (anchor.hasAttribute('href')) {
                    let href = anchor.getAttribute("href");
            try {
                //convert relative URLs to absolute URLs
                href = new URL(href, baseURL).href;
                resultArray.push(href);
            } catch (err){
                console.log(`${err.message}: ${href}`)
            }
        }

    }
    return resultArray;
}

export { getURLsFromHTML }
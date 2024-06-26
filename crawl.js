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
    let resultArray = Array();
    for (let i=0; i < result.length; i++){
        if (result[i].href.includes(baseURL)){
            resultArray.push(result[i].href);
        }else {
            resultArray.push(baseURL + result[i].href);
        }
    }
    return resultArray;
}

export { getURLsFromHTML }
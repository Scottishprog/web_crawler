import {URL} from 'url';

function normalizeURL(inputURL) {
    const sourceURL = new URL(inputURL);
    console.log(sourceURL.hostname)
    return sourceURL.href;
}

export { normalizeURL };

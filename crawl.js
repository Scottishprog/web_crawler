import {URL} from 'url';

function normalizeURL(inputURL) {
    const sourceURL = new URL(inputURL);
    //console.log(sourceURL.hostname + stripTrailingSlash(sourceURL.pathname));
    return sourceURL.hostname + stripTrailingSlash(sourceURL.pathname);
}

export { normalizeURL };

function stripTrailingSlash(input) {
    return input.endsWith('/') ? input.slice(0, -1) : input;
}


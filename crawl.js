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

async function crawlPage(baseURL, currentURL=baseURL, pages = {} ){
    console.log(`Crawling: ${currentURL}`);
    //make sure it's the same domain...
    if(!currentURL.includes(baseURL)){
        console.log(`Current URL in base domain!: ${currentURL}`);
        return pages;
    }

    let normalizedCurrentURL = normalizeURL(currentURL);
    if(normalizedCurrentURL in pages){
        pages[normalizedCurrentURL] ++;
    }else {
        pages[normalizedCurrentURL] = 1;
    }

    let newURLs = await getURLsFromURL(currentURL, baseURL);
    console.log(newURLs);
    if (newURLs.length === 0){
        console.log('No new URLs found.');
        return pages;
    }
    //recursively call crawlPage with URL list
    for(const newURL of newURLs){

    }

    return pages;
}

export {crawlPage};

async function getURLsFromURL(currentURL, baseURL){
        let response
    try{
        response = await fetch(currentURL);
    } catch(err){
        throw new Error('Got network error: ${err.message}');
    }

    if(response.status > 399){
        console.log(`HTTP Error: ${response.status}${response.statusText}`);
        return;
    }

    const contentType = response.headers.get('content-type');
    if(!contentType || !contentType.includes('text/html')) {
        console.log(`Non-HTML response: ${contentType}`)
        return;
    }
    const HTMLText =  await response.text();
    return getURLsFromHTML(HTMLText, baseURL);

}
function printReport(pages) {
    console.log('\nPrinting Report: \n');
    const sortedPages = sortPages(pages);
    //console.log(sortedPages);
    for (let page of sortedPages) {
        console.log(`Page: ${page[0]}, visited ${page[1]} times.`);
    }
    console.log('\n');
}

function sortPages(obj) {
    return Object.entries(obj).sort((a,b) => b[1] - a[1]);
    //return Object.keys(obj).sort().reduce((a, key) => {a[key] = obj[key]; return a;}, {});
}

export {printReport}
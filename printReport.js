function printReport(pages) {
    console.log('Printing Report:');
    const sortedPages = sortPages(pages);
    console.log(sortedPages);
}

function sortPages(obj) {
    return Object.keys(obj).sort().reduce((a, key) => {a[key] = obj[key]; return a;}, {});
}

export {printReport}
import {argv} from 'node:process'
import {crawlPage} from './crawl.js'
import {printReport} from "./printReport.js";

async function main(){
    if(process.argv.length < 3){
        console.error('Usage: npm run start BASE_URL - One argument is required.')
        process.exit(1)
    }else if (process.argv.length > 3){
        console.error('Usage: npm run start BASE_URL - One argument is required.')
        process.exit(1)
    }else {
        console.log(`Staring web crawler with URL: ${argv[2]}`)
    }

    const baseURL = argv[2];

    const results = await crawlPage(baseURL);
    printReport(results);

}


main()


import {argv} from 'node:process'

function main(){
    if(process.argv.length < 3){
        console.error('Usage: npm run start BASE_URL - One argument is required.')
    }else if (process.argv.length > 3){
        console.error('Usage: npm run start BASE_URL - One argument is required.')
    }else {
        console.log(`Staring web crawler with URL: ${argv[2]}`)
    }
    console.log("Hello World")
}


main()


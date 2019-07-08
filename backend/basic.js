const express = require('express')
const request = require('request')
const chalk = require('chalk')
const xml2js = require('xml2js').parseString;
const util = require('util')
const log = console.log


const app = express()

request('https://www.indiatoday.in/rss/1206514', (err, response, body) => {

    xml2js(body, function (err, result) {
        console.log(util.inspect(result, false, null))

    })
})



app.listen(4000, () => {
    log(chalk.green.bgBlack.bold('Listening on port 3000'))

})
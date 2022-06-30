
const fs = require('fs')
const options = require('../../logs/logs.config.json')
const Logger = (req) => {
    fs.appendFile(options.fileLocation, new Date().toString() + " " + req.toString() + "\n", function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
}

module.exports = Logger
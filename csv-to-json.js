// REQUIRED MODULES

var fs = require('fs')
var csv = require('fast-csv')

// GET CSV FILE NAME

var csvFileName = process.argv[2]
var outputFileName = process.argv[3]

// LOAD CSV FILE AS STREAM

var stream = fs.createReadStream(csvFileName)

// PARSE CSV DATA & SAVE TO FILE

output = []

csv.fromStream(stream, {headers : true}).on("data", function(data){
	output.push(data);
	fs.writeFile(outputFileName, JSON.stringify(output))
})
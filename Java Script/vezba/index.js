var fs = require('fs');
var http = require('http');
var json = fs.readFileSync(`${__dirname}/students.json`, 'utf-8');


var express = require('express');
var api = express()








api.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});
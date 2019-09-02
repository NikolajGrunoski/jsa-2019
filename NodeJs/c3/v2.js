import { fstat } from "fs";

var fs = require('fs');

// fs.writeFile('test.txt','Node.js is the best!',(err) =>{
//     if(err){
//         console.error(err);
//     }
// });


// ------------------------------------

// var pero = (cb) =>{
//     var sum = 0;
//     for(var i = 0; i < 100;i++){
//         sum += i; // sum = sum + i
//     }
//     cb(sum);     // cb ustvari prenasocuva kon funkcija vo slujanov sum
// }

// var log = (num) =>{
//     console.log(num);
// }

// pero(log);


fs.readFile('test.txt','utf8',(err, data) => {
    if(err){
        console.error(err);
    }
    console.log(err);
    console.log(data);
});
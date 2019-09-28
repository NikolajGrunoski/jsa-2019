var http = require ('http');

var server = http.createServer(function (req, res) {
    console.log(req);
    // res.write('Hello World!'); 

    // http://127.0.0.1:4567/add/2/3
    // 5

    var URL = req.url.split('/');
    var output = 0;
    switch(URL[1]){
        case 'add':
            if(URL.length > 2){

            
            for(let i =2; i < URL.length; i++){
                output += parseInt(URL[i]);
            }
        }
            break;
    }
    
    res.write(output + '');
    res.end(); 
  });

  server.listen(8080, (err) =>{
      if(err){
          console.log(err);
          return;
      }
      console.log('Server started successfully!');
  });


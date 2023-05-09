 const http = require(`http`)

// function rqListener(req,res){

// }
// http.createServer(rqListener);

// http.createServer(function(req,res){

// });


const server = http.createServer((req,res)=>{
    console.log(req);
    console.log(`deepak`)
});

 server.listen(4000);




//  const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('My name is Deepak.');
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(4000, () => {
//   console.log('Server running at http://localhost:4000/');
// });

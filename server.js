const http = require('http');
const app = require('./lib/app');

http.createServer(app)
  .listen(7890);


// http.createServer((req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/birthday') {
//     res.end('Happy Birthday');
//   } else if(url.pathname === '/tomorrow') {
//     res.end('Tomorrow, Tomorrow');
//   } else if(url.pathname === '/birthday/tomorrow') {
//     res.end('Tomorrow is your birthday');
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// })
//   .listen(7890);

//   res.setHeader('Content-Type', 'text/html');
// res.end(`
// <html>
//   <body>
//     <p>Thanks for visiting!</p>
//   </body>
// </html>`);


const { parse } = require('url');
const { getCharacter } = require('./service/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
};




// if(url.pathname === '/character/:ID') {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
// }

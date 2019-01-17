const { parse } = require('url');
const { getCharacters } = require('./service/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters')) {
    getCharacters() 
      .then(characters => {
        let html = '';
        characters.forEach(character => {
          html += `<li>${character.name}</li>`;
        });
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${html}</body></html>`);
      });
  }
};

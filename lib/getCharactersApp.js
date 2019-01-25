const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacters } = require('./service/rickAndMortyApi');

const notes = {};

const pushNote = (id, note) => {
  if(!notes[id]) {
    notes[id] = [];
  }
  notes[id].push(note);
};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'GET' && url.pathname.includes('/characters')) {
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
  else if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        pushNote(id, note);
        res.statusCode = 204;
        res.end();
      });
  }
};

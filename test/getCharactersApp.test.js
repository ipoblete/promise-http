const request = require('supertest');
const getCharactersApp = require('../lib/getCharactersApp');

jest.mock('../lib/service/rickAndMortyApi.js'); 

describe('getCharactersApp', () => {
  it('gets a list of characters', () => {
    return request(getCharactersApp)
      .get('/characters')
      .then(res => {
        expect(res.text).toEqual('<html><body><li>Rick Sanchez</li><li>Morty Smith</li><li>Summer Smith</li></body></html>');
      });
  });

  it('can save a note for a character', () => {
    return request(getCharactersApp)
      .post('/characters')
      .send({ characterId: 1, note: 'My favorite character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});

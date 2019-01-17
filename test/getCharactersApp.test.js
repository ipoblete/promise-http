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
});

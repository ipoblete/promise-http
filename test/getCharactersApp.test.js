const request = require('supertest');
const getCharactersApp = require('../lib/getCharactersApp');

jest.mock('../lib/service/rickAndMortyApi.js'); 

describe('getCharactersApp', () => {
  it('gets a list of characters', () => {
    return request(getCharactersApp)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick');
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

  it('gets notes for a character', () => {
    return request(getCharactersApp)
      .post('/characters')
      .send({ characterId: 1, note: 'My favorite character' })
      .then(() => {
        return request (getCharactersApp)
          .get('/characters/1');
      })
      .then(res => {
        expect(res.text).toContain('My favorite character');
      });
  });
});

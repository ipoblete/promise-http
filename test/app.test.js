const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/tester')
      .query({ name: 'ivan' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there ivan' });
      });
  });
});

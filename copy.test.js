const copy = require('./copy');
// const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./promises-copy.md');
  });

  it('copies a file', () => {
    return copy('./promises.md', './promises-copy.md')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./promises.md'),
          fsPromises.readFile('./promises-copy.md')
        ]);
      });
  });
}); 

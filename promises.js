const fs = require('fs');

// pending -> waiting for the promise to finish
// fulfilled -> the promise finished and resolved
// resolved -> the promise finished and rejected 
// fsPromises.writeFile('./test.txt', 'HELLO WORLD!')
//   .then(() => console.log('DONE'))
//   .catch(err => console.error(err));

const readPromise = src => new Promise((resolve, reject) => {
  // read our file the old callback way
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    // invoke the resolve function with data if successful
    if(err) return reject(err);
    // invoke the reject function with an error if unsuccessful
    resolve(data);
  });
});

readPromise('./promises.md')
  .then(data => console.log(data));


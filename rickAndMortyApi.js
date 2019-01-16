const request = require('superagent');

module.exports = id => {
  return request 
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res =>({
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));
};

// const getCharacter = id => {
   
// };

// module.exports = {
//   getCharacter
// };

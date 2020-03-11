// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = (breed, cb) => {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      return cb(data);
    }
  });
};

module.exports = breedDetailsFromFile;

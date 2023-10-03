const bcrypt = require('bcrypt');

const password = '1234Safe!';

// ciframos el contenido de password
bcrypt.hash(password, 8, function(err, hash) {
  console.log(hash);

  // comparamos dos cifrados
  bcrypt.compare(password, hash, function(err, res) {
    // console.log(err);
    console.log(res)
  })
});
const s3 = require('./index');

s3.listAllObject()
  .then((results) => {
    console.log('sukses');
    console.log(results);
  })
  .catch((err) => {
    console.log('gagal');
    console.log(err.message);
  });
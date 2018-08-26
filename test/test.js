const s3 = require('../index');

it('Make bucket', (done) => {
  s3.makeBucket('yudhapratama.com')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('Remove bucket', (done) => {
  s3.removeBucket('yudhapratama.com')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('Get list bucket', (done) => {
  s3.listBuckets()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('Get List Object', (done) => {
  s3.listObject('s3.kerakera.id')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

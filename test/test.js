const s3 = require('../index');

it('make bucket', (done) => {
  s3.makeBucket('tester')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('remove bucket', (done) => {
  s3.removeBucket('tester')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('get bucket', (done) => {
  s3.listBuckets()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('get object', (done) => {
  s3.listObject('yudhapratama.com')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

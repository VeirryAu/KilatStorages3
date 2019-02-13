const shell = require('shelljs');

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

it('get all object', (done) => {
  s3.listAllObject()
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

it('put object', (done) => {
  s3.putObjectPublic('~/Documents/Image/avatar-1577909_1280.png', 'bookslifestorage/tester/')
    .then((url) => {
      console.log(`url => ${url}`);
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('download object', (done) => {
  s3.downloadObject('yudhapratama.com/test.txt', '~/')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('remove object', (done) => {
  s3.removeObject('yudhapratama.com/test.txt')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('check file exists', (done) => {
  s3.existsObject('boslelangstorage', 'ffe4bfca-bdd0-40ef-b006-7b22443a9f78.jpg')
    .then((exists) => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('disk usage', (done) => {
  s3.diskUsage()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

it('disk usage bucket', (done) => {
  s3.diskUsage('yudhapratama.com')
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err.message);
    });
});

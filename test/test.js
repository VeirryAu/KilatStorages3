const s3 = require('../index');
const shell = require('shelljs');

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
  shell.exec('touch ~/test.txt', (code, output, error) => {
    if (code === 0) {
      s3.putObject('~/test.txt', 'yudhapratama.com')
        .then((url) => {
          shell.exec('rm ~/test.txt');
          console.log(url);
          done();
        })
        .catch((err) => {
          done(err.message);
        });
    } else {
      throw error;
    }
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

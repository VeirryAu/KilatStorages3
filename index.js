const shell = require('shelljs');

const action = require('./lib/action');

function KilatS3() { }

KilatS3.makeBucket = function makeBucket(bucketName) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd mb s3://${bucketName}`, (code, output, err) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.removeBucket = function removeBucket(bucketName) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd rb s3://${bucketName}`, (code, output, err) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.listBuckets = function listBuckets() {
  return new Promise((resolve, reject) => {
    shell.exec('s3cmd ls', (code, output, err) => {
      if (code === 0) {
        const echo = output.split('\n');
        resolve(echo);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.listAllObject = function listAllObject() {
  return new Promise((resolve, reject) => {
    shell.exec('s3cmd la', (code, output, err) => {
      if (code === 0) {
        const echo = output.split('\n');
        resolve(echo);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.putObjectPrivate = function putObjectPrivate(pathFile, bucketName) {
  return new Promise((resolve, reject) => {
    action.checkBucketPrefixes(bucketName)
      .then((finalBucketName) => {
        shell.exec(`s3cmd put -P ${pathFile} s3://${finalBucketName} --acl-private`, (code, output, err) => {
          if (code === 0) {
            action.getPublicUrl(output, finalBucketName)
              .then((publicUrl) => {
                resolve(publicUrl);
              });
          } else {
            reject(new Error(err));
          }
        });
      });
  });
};

KilatS3.putObjectPublic = function putObjectPublic(pathFile, bucketName) {
  return new Promise((resolve, reject) => {
    action.checkBucketPrefixes(bucketName)
      .then((finalBucketName) => {
        shell.exec(`s3cmd put -P ${pathFile} s3://${finalBucketName} --acl-public`, (code, output, err) => {
          if (code === 0) {
            action.getPublicUrl(output, finalBucketName)
              .then((publicUrl) => {
                resolve(publicUrl);
              });
          } else {
            reject(new Error(err));
          }
        });
      });
  });
};

KilatS3.syncFolder = function syncFolder(bucketPath, localDirPath) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd sync --acl-public --no-mime-magic ${localDirPath} s3://${bucketPath}`, (code, output, err) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.downloadObject = function downloadObject(bucketPath, localDirPath) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd get s3://${bucketPath} ${localDirPath}`, (code, output, err) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.removeObject = function removeObject(bucketPath) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd del s3://${bucketPath}`, (code, output, err) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.listObject = function listObject(bucketName) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd ls s3://${bucketName}`, (code, output, err) => {
      if (code === 0) {
        const echo = output.split('\n');
        resolve(echo);
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.existsObject = function existsObject(bucketName, fileName) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd ls s3://${bucketName}/${fileName} | wc -l`, (code, output, err) => {
      if (code === 0) {
        const echo = output.split('\n');
        const check = echo[0].replace(/\s/g, '');
        if (check === '0') {
          resolve(false);
        } else {
          resolve(true);
        }
      } else {
        reject(new Error(err));
      }
    });
  });
};

KilatS3.diskUsage = function diskUsage(bucketName = null) {
  return new Promise((resolve, reject) => {
    if (bucketName === null) {
      shell.exec('s3cmd du', (code, output, err) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(err));
        }
      });
    } else {
      shell.exec(`s3cmd du s3://${bucketName}`, (code, output, err) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(err));
        }
      });
    }
  });
};

module.exports = KilatS3;

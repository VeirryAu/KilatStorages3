const fs = require('fs');
const shell = require('shelljs');

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

module.exports = KilatS3;

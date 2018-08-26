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

KilatS3.putObject = function putObject(pathFile, bucketName) {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd put -P ${pathFile} s3://${bucketName}`, (code, output, err) => {
      if (code === 0) {
        const echoArray = output.split('[1 of 1]');
        const publicUrl = echoArray[1].split(' ');
        resolve(publicUrl[6]);
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

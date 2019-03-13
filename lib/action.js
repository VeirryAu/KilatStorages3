exports.checkBucketPrefixes = (bucketName) => {
  return new Promise((resolve) => {
    const bucketArr = bucketName.split('/');
    if (bucketArr.length === 1) {
      resolve(bucketName);
    } else {
      resolve(`${bucketName}/`);
    }
  });
};

exports.getPublicUrl = (url, bucketName) => {
  return new Promise((resolve) => {
    const echoArray = url.split('Public URL of the object is: ');
    const publicUrl = echoArray[(echoArray.length - 1)].split('/');

    const bucketArr = bucketName.split('/');
    if (bucketArr.length === 0) {
      resolve(`https://${bucketName}.s3.amazonaws.com${publicUrl[(publicUrl.length - 1)].toString().replace(/[\n\r]/g, '')}`);
    } else {
      const bucketLink = bucketArr[0];

      bucketArr.splice(0, 1);
      if (bucketArr[(bucketArr.length - 1)] === '') {
        bucketArr.splice((bucketArr.length - 1), 1);
      }
      const bucketFolder = bucketArr.join('/');

      resolve(`https://${bucketLink}.s3.amazonaws.com/${bucketFolder}${publicUrl[(publicUrl.length - 1)].toString().replace(/[\n\r]/g, '')}`);
    }
  });
};

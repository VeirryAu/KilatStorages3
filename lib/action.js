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
    const publicUrl = echoArray[(echoArray.length - 1)] ? echoArray[(echoArray.length - 1)].toString().trim() : null;
    resolve(publicUrl.replace('http', 'https'));
  });
};
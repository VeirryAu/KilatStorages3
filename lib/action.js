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

exports.getPublicUrl = (url) => {
  return new Promise((resolve) => {
    const echoArray = url.replace('Public URL of the object is: ', '');
    resolve(echoArray)
  });
};

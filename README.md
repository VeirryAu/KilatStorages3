# KilatStorageS3 - NodeJs S3 Client for KilatStorage
This package is a S3 client for NodeJs 8.X or greater. KilatStorageS3 uses a bash command to run s3cmd which has been configured and connected to the kilatstorage service. You can use this package for Amazon S3 service too.

# Requirements
*  KilatStorageS3 requires NodeJs 8.X or greater
*  s3cmd (already configured with kilatstorage service) - You can [read this](http://kb.cloudkilat.com/konfigurasi/cara-akses-kilat-storage-di-kilat-vm-dengan-s3cmd) for more information.

# Installation
```
npm i s3-kilatstorage
```

# Usage
### Make bucket
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.makeBucket('bucket-name')
  .then((status) => {
    res.json(status);
  });
```
### Remove Bucket
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.removeBucket('bucket-name')
  .then((status) => {
    res.json(status);
  });
```
### Get all bucket
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.listBuckets()
  .then((list) => {
    res.json(list);
  });
```
### Get all object
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.listAllObject()
  .then((list) => {
    res.json(list);
  });
```
### Put object with private access file
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.putObjectPrivate('path-file', 'bucket-name')
  .then((privateUrl) => {
    res.json(privateUrl);
  });
```
### Put object with public access file
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.putObjectPublic('path-file', 'bucket-name')
  .then((publicUrl) => {
    res.json(publicUrl);
  });
```
### Download object
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.downloadObject('bucket-path', 'local-path-directory')
  .then((status) => {
    res.json(status);
  });
```
### Remove object
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.removeObject('bucket-path')
  .then((status) => {
    res.json(status);
  });
```
### List object
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.listObject('bucket-name')
  .then((list) => {
    res.json(list);
  });
```
### Show info disk usage for all
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.diskUsage()
  .then((list) => {
    res.json(list);
  });
```
### Show info disk usage for single bucket
```javascript
const kilatstorage = require('s3-kilatstorage');
kilatstorage.diskUsage('bucket-name')
  .then((list) => {
    res.json(list);
  });
```

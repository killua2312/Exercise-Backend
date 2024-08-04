const Minio = require("minio");
require("dotenv").config();

const minioClient = new Minio.Client({
  endPoint: process.env.MIN_ENDPOINT,
  port: parseInt(process.env.PORT),
  useSSL: true,
  accessKey: process.env.MIN_ACCESS,
  secretKey: process.env.MIN_SECRET,
});

const bucketName = "exercises";
minioClient.bucketExists(bucketName, (err) => {
  if (err && err.code == "NoSuchBucket") {
    minioClient.makeBucket(bucketName, (err) => {
      if (err) console.log("Error creating bucket", err);
      else console.log("Bucket successfully");
    });
  }
});

const getPresignedUrl = async (gif_id) => {
  return await new Promise((res, rej) => {
    const filename = `Exercises/${gif_id}.gif`;
    minioClient.presignedGetObject(bucketName, filename, (err, url) => {
      if (err) rej(err);
      else res(url);
    });
  });
};

module.exports = {
  getPresignedUrl,
};

var Model = require('../models/models.js');
var secret = require('../config/secrets');
var AWS = require('aws-sdk');

var AWS_bucket = secret.aws.aws_bucket;
var access_key = secret.aws.aws_access_key;
var secret_key = secret.aws.aws_secret_key;



module.exports.uploadFile = function (req, res) {

	// Config S3 bucket with bucket name, key and secret key included in server/config/secrets.js
	AWS.config.update({
		accessKeyId: access_key,
		secretAccessKey: secret_key,
		region: 'us-west-1'
	});

	var s3 = new AWS.S3({ params: { Bucket: AWS_bucket }});

	s3.createBucket(function() {
		var params = { Key: "File name", Body: "File body" };
		s3.upload(params, function (err, data) {
			if (err) {
				console.error(err);
			} else {
				console.log("Success url from S3 Bucket: " + data.Location);
				res.write(JSON.stringify(data));
				res.end();
			}
		})
	})

};
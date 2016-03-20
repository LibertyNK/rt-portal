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

	var s3 = new AWS.S3();



	var s3_params = { 
		Bucket: AWS_bucket,
		Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
	};


	s3.getSignedUrl('putObject', s3_params, function(err, data){
	        if(err){
	            console.log(err);
	        }
	        else{
	            var return_data = {
	                signed_request: data,
	                url: 'https://'+AWS_bucket+'.s3.amazonaws.com/'+req.query.file_name
	            };
	            console.log(return_data.url);
	            res.write(JSON.stringify(return_data));
	            res.end();
	        }
	    });

		// s3.upload(s3_params, function (err, data) {
		// 	if (err) {
		// 		console.error(err);
		// 	} else {
		// 		console.log("Success url from S3 Bucket: " + data.Location);
		// 		res.write(JSON.stringify(data));
		// 		res.end();
		// 	}
		// })


};
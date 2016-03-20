import alt from '../alt';
import UpdateProfileActions from '../actions/UpdateProfileActions';
import ApiUtils from '../utils/apiUtils';
var secret = require('../../server/config/secrets');

var AWS = require('aws-sdk');

var AWS_bucket = secret.aws.aws_bucket;
var access_key = secret.aws.aws_access_key;
var secret_key = secret.aws.aws_secret_key;

// Config S3 bucket with bucket name, key and secret key included in server/config/secrets.js
AWS.config.update({
  accessKeyId: access_key,
  secretAccessKey: secret_key,
  region: 'us-west-1'
});

var s3 = new AWS.S3();

class UpdateProfileStore {
	constructor() {

    this.bindActions(UpdateProfileActions);
    this.user = {};

    this.file = [];
    this.image_src ='';
    
    this.helpBlock = {

        first_name: '',
        last_name: '',
        username: '',
        email: '',
        goal:''
     };
    this.validationState = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      goal:''
   };

    this.errorMessage = [];
    this.errorMessageState = '';
    
  }

  onUpdateFirstName(event) {
  	this.first_name = event.target.value;
    if (this.first_name !== '') {
      this.validationState.first_name = 'has-success';
    }
  }

  onInvalidFirstName() {
    this.validationState.first_name = 'has-error';
    this.helpBlock.first_name = "First Name can't be blank!";
    return
  }

  onUpdateLastName(event) {
    this.last_name = event.target.value;
    if (this.last_name !== '') {
      this.validationState.last_name = 'has-success';
    }
  }

  onInvalidLastName() {
    this.validationState.last_name = 'has-error';
    this.helpBlock.last_name = "Last Name can't be blank!";
  }

  onUpdateUsername(event) {
    this.username = event.target.value;

  }

  onInvalidUsername() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username is invalid or already taken";
  }

  onInvalidUsernameSpace() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username must not contain spaces";
  }

  onUpdateEmail(event) {
    this.email = event.target.value;

  }

  onInvalidEmail() {
    this.validationState.email = 'has-error';
    this.helpBlock.email = 'Please enter an email address';
  }

  onUpdateGoal(event) {
    this.goal = event.target.value;
  }

  onInvalidGoal() {
    this.validationState.goal = 'has-error';
    this.helpBlock.goal = 'Please enter goal amount';
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onInvalidPassword() {
    this.validationState.password = 'has-error';
    this.helpBlock.password = "Password can't be blank!";
  }

   onInvalidPasswordLength() {
    this.validationState.password_length = 'has-error';
    this.helpBlock.password_length = "Password needs to have at least 6 characters!";
  }

  onUpdatePasswordConf(event) {
    this.password_conf = event.target.value;
  }

  onInvalidPasswordConf() {
    this.validationState.password_conf = 'has-error';
    this.helpBlock.password_conf = "Password confirmation needed!";
  }

  onUnmatchPasswords() {
    this.validationState.matching_passwords = 'has-error';
    this.helpBlock.matching_passwords = "Passwords are not matching!";
  }

  onUpdateAbout(event) {
    this.about = event.target.value;
  }

  onUpdateSuccess(data) {

    this.errorMessage = data.message;
    if (data.message == 'success') {
      this.errorMessageState = 'alert alert-success text-center';

      //redirect to All Teams Page or User Dashboard
      // window.location.href = '/new_team';


    } else {
      this.errorMessageState = 'alert alert-danger';
    }   
 
  }

  onUpdateFail(error) {
    console.log(error);
    
    for (var i in error.responseJSON.message.errors) {
      this.errorMessage.push(error.responseJSON.message.errors[i].message);
    }
    this.errorMessageState = 'alert alert-danger';
  }

  onUploadAvatar(event) {
    this.file = event.target.files[0];
    console.log("File in UpdateProfile Store got from input:" + this.file.name);
    var s3_params = { 
      Bucket: AWS_bucket,
      Key: this.file.name,
      Expires: 60,
      ContentType: this.file.type,
      ACL: 'public-read',
      Body: this.file
    };

    s3.upload(s3_params, function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log("Success url from S3 Bucket: " + data.Location);
        this.image_src = data.Location;
        // console.log(this.image_src)
       document.getElementById("preview").setAttribute("src",data.Location)
      }
    })
    
    
  }
  
}



export default alt.createStore(UpdateProfileStore);
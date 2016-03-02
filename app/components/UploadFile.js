import ReactS3Uploader from 'react-s3-uploader';

<ReactS3Uploader
    signingUrl="/s3/sign"
    accept="image/*"
    onProgress={this.onUploadProgress}
    onError={this.onUploadError}
    onFinish={this.onUploadFinish}
    signingUrlHeaders={{ additional: headers }}
    signingUrlQueryParams={{ additional: query-params }}
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
    contentDisposition="auto"
    server="http://cross-origin-server.com" />
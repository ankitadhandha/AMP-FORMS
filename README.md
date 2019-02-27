# AMP-FORMS (Form Submission with Page Update example)

This example helps new implementers of AMP Forms.

You can download this code and run on node.js localhost.

Steps to run this code:

1. Run node init

2. Run npm install express --save

3. Run npm install multer --save

4. Run npm install body-parser --save

5. Run node app.js
It will run on localhost:8080

If you want to run it on nginx web server.

Store project in a directory amp-forms:

modify location in configration file as following:

location /amp-forms/ {

  proxy_pass http://localhost:8080/;
  
 }
 
 either chnage the directory structure as per endpoint given in html or create an another entry which allows to run node.js application for this:
 
 location /components/amp-form/submit-form-input-text-xhr {
 
    proxy_pass http://localhost:8080;
    
   }
   
   jenkins testing
   
   Jenkins testing

Jenkins testing


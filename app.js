var express=require('express');
var app=express();
var fs=require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

//Email
var http=require('http');
var bodyParser = require('body-parser');


//Path
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
//Router
var router=require('router');
app.set('view engine','ejs');
var routes=require('./routes');

var port = Number(process.env.PORT || 25);
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));


var SCOPES = ['https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send',
	'https://www.googleapis.com/auth/gmail.readonly'];
	
var TOKEN_DIR = 'credentials/';
var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json';
var mailbody ="";
var mailsubject ="";
//Home
app.get('/',routes.home);


// sending mail function for Actual Sample Flat form

app.post('/send', function(req, res)
{
	//console.log(req);
	if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
	 res.send("field should not blank");
	  return false;
	}
	
	fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Actual Sample Flat";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req. body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>";
	
	//database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
	
});



app.post('/send1', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
  res.send("field should not blank");
  return false;
}


fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Visit Site";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>";
	  
	//database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});

});

// sending mail function for Home Presentation form

app.post('/send2', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
  res.send("field should not blank");
  return false;
}


fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Home Presentation";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>";
	  
	 //database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
  
});

// sending mail function for Register Now form

app.post('/send3', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}

fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Register Now";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	 //database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
     
});

// sending mail function for Download Broucher form

app.post('/send4', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane :Download Broucher";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	//database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
   

});

// sending mail function for Get Latest Price form

app.post('/send5', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Get Latest Price";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	//database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
 
 });
// sending mail function for Virtual Tours form

app.post('/send6', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Virtual Tours";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	//database mysql for storing information
	
	 authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
    
 });
// sending mail function for Book Online form

app.post('/send7', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Book Online";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
   });


// sending mail function for Group Booking form

app.post('/send8', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
 
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Group Booking";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
     
});

// sending mail function for Get Instant Call Back form

app.post('/send9', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane :Call Back";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});

     });


// sending mail function for Enquiry form

app.post('/send10', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == ""|| req.body.type == "") {
  res.send("field should not blank");
  return false;
}
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Enquiry";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});

      });
// sending mail function for Call Us form

app.post('/send11', function(req, res){
	console.log('inside send11 call me');
	if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "") {
	  res.send("field should not blank");
	  return false;
	}
	
fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Call Me";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
      
 });

// sending mail function for Contact Us form

app.post('/send12', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.comment == "") {
  res.send("field should not blank");
  return false;
}

fs.readFile('homeloan_gmail.json', function processClientSecrets(err, content) {
	  if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	  }
	  mailsubject  ="Enquiry for the price of Lodha Amara-Megastar-Thane : Contact Us";
	mailbody ="<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>"+req.body.comment+"</b>";
	  
	  authorize(JSON.parse(content), sendMessage);
	  res.send("Request is recorded. we will get back to you. ");
	});
      
     
 });




 
 /**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}
 
 function makeBody(to, from, subject, message) {
    var str = ["Content-Type: text/html; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');

    var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
        return encodedMail;
}

function sendMessage(auth) {
    var raw = makeBody('prerana.nerkar1@gmail.com', 'homeloans@horizonfp.com',mailsubject, mailbody);
	var gmail = google.gmail('v1');
    gmail.users.messages.send({
        auth: auth,
        userId: 'me',
        resource: {
            raw: raw
        }
    }, function(err, response) {
		console.log(err || response);
        //res.send(err || response)
    });
}
 
app.listen(8080);

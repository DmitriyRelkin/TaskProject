var connect         = require('connect');
var connectRouter   = require('connect-route');
var connectStatic   = require('connect-gzip-static');
var bodyParser      = require('body-parser');
var nodemailer      = require('nodemailer');
var fs              = require('fs');
var port            = process.env.PORT || 9000;
var app             = connect();
var emailConfig = {
    //host: 'smtp.gmail.com',
    //port: 25,
    //secure: true,
    service: "Gmail",
    auth: {
        user: process.env.SMTPUSER || 'sctest.noreply@gmail.com',
        pass: process.env.SMTPPASS || 'n0passw0rd'
    }
};

app.use(bodyParser.json());

app.use(connectRouter(function (router) {
    router.post('/contact', function (req, res, next) {
      res.end(200);  
    });
}));


app.use(function (req, res) {
    res.writeHead(302, {
      'Location': '/404'
    });
    res.end();
});

app.listen(port, function() {
    console.log('Server running on ' + port);
});
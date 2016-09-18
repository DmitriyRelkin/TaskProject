var connect         = require('connect');
var connectRouter   = require('connect-route');
var connectStatic   = require('connect-gzip-static');
var bodyParser      = require('body-parser');
// var nodemailer      = require('nodemailer');
var fs              = require('fs');
var port            = process.env.PORT || 8000;
var app             = connect();

app.use(connectStatic(__dirname  + '/'));
app.use(bodyParser.json());


app.use(connectRouter(function (router) {

  router.get('/404', function (req, res, next) {
      indexRedirect(res);
  });
  // //
  // router.post('/contacts', function (req, res, next) {
  //   res.end(200);
  // });
  //
  router.post('/contacts', function (req, res, next) {
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.end();
  });

  router.post('/reg', function (req, res, next) {
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.end();
  });

  router.post('/sig-in', function (req, res, next) {
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.end();
  });
}));

function indexRedirect(res){
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });
}

app.use(function (req, res) {
    res.writeHead(302, {
      'Location': '/404'
    });
    res.end();
});

app.listen(port, function() {
    console.log('Server running on ' + port);
});

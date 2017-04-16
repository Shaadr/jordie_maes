// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

// CONFIG //
const config = require('./config');

// CONTROLLERS
// ============================================================


// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(express.static(__dirname+'./../public'));
app.use(bodyParser.json());
// ENDPOINTS
// ============================================================

// MODEL ENDPOINTS
//app.get('/model', modelCtrl.read);
//app.post('/model', modelCtrl.create);
//app.put('/model/:id', modelCtrl.update);
//app.delete('/model/:id', modelCtrl.delete);

// VARIABLES
// ============================================================
var port = 3000;

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
})
app.set('db', massiveServer)// MUST come after app = express()

// DB //
var db = app.get('db')

// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});

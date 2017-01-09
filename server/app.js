var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var port = process.env.PORT || 3445;
mongoose.connect( 'localhost:/27017/tauPets' );
// our schema
var petSchema = mongoose.Schema({
  name: String,
  age: Number,
  type: String,
  picUrl: String
}); // end schema
// model
var pet = mongoose.model( 'pet', petSchema );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( port, function( req, res ){
  console.log( 'server up on:', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

// add pet
app.post( '/addPet', function( req, res ){
  console.log( 'in addPet:', req.body );
  var newPet = pet( req.body );
  newPet.save();
  res.send( 200 );
}); // end addPet

app.get( '/getPets', function( req, res ){
  console.log( 'getPets hit' );
  pet.find().then( function( data ){
    res.send( data );
  }); // end find
}); // end getPets

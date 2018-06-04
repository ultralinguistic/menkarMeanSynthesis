// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
let garage = require( './modules/garage' );
let mongoose = require( 'mongoose' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );
app.use( '/garage', garage );
// globals
let port = process.env.MONGODB_URI | 5000;
// connect to db w/ mongoose
const DBURL = 'mongodb://localhost:27017/garage';
mongoose.connect( DBURL );
// did mongoose connect to DB?
mongoose.connection.on( 'connected', ()=>{
    console.log( 'connected to db:', DBURL );
}) // end connected
mongoose.connection.on( 'error', ( error )=>{
    console.log( 'error connecting to:', DBURL );
}) //end no connecty
// server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up
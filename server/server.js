// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
let garage = require( './modules/garage' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );
app.use( '/garage', garage );
// globals
let port = 5000 | process.env.PORT;
// server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up
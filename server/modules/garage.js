let express = require( 'express' );
let router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( 'GET /garage' );
    res.send( 'meoooooow' );
}) // end get 

router.post( '/', ( req, res )=>{
    console.log( 'POST /garage:', req.body );
    res.send( 'purrr' );
}) // end post

module.exports = router;
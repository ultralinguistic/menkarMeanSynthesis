let express = require( 'express' );
let router = express.Router();
let Car = require( './models/car.schema' );

router.get( '/', ( req, res )=>{
    console.log( 'GET /garage' );
    Car.find().then( ( data )=>{
        console.log( 'finding cars...' );
        res.send( data );
    }).catch( ( error )=>{
        console.log( 'error finding cars');
        res.sendStatus( 500 );
    }) //end Car find
}) // end get 

router.post( '/', ( req, res )=>{
    console.log( 'POST /garage:', req.body );
    let newCar = new Car( req.body );
    newCar.save().then( ()=>{
        console.log( 'car parked:', newCar );
        res.sendStatus( 201 );
    }).catch( ( error ) =>{
        console.log( 'error parking car:', error );
        res.sendStatus( 500 );
    }) //end newCar save
}) // end post

module.exports = router;
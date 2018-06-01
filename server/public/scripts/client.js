let myApp = angular.module( 'myApp', [] );

class Car{
    constructor( make, model, odometer, year ){
        this.make = make;
        this.model = model;
        this.odometer = odometer;
        this.year = year;
    } // end constructor
} // end Car class

myApp.controller( 'GarageController', function( $http ){
    let vm = this;

    vm.addCar = function(){
        let newCar = new Car( vm.makeIn, vm.modelIn, vm.odometerIn, vm.yearIn );
        console.log( 'adding:', newCar );
        $http({
            method: 'POST',
            url: '/garage',
            data: newCar
        }).then( function( response ){
            console.log( 'back from POST with:', response );
        }).catch( function( error ){
            console.log( 'error posting:', error );
        }) // end $http
    } // end addCar
}); // end GarageController
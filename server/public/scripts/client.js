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
    vm.cars = [];

    vm.addCar = function(){
        let newCar = new Car( vm.makeIn, vm.modelIn, vm.odometerIn, vm.yearIn );
        console.log( 'adding:', newCar );
        $http({
            method: 'POST',
            url: '/garage',
            data: newCar
        }).then( function( response ){
            console.log( 'back from POST with:', response );
            vm.getCars();
        }).catch( function( error ){
            console.log( 'error posting:', error );
        }) // end $http
    } // end addCar

    vm.getCars = function(){
        console.log( 'in getCars' );
        $http({
            method: 'GET',
            url: '/garage'
        }).then( function( response ){
            console.log( 'back from server with:', response.data );
            vm.cars = response.data;
            console.log( 'vm.cars:', vm.cars );
        }).catch( ( error )=>{
            console.log( 'error getting cars:', error );
        }) //end $http
    } // end getCars

    vm.sellMe = function( index ){
        console.log( 'in sellMe:', vm.cars[ index ] );
    } // end sellMe
    // init
    vm.getCars();
}); // end GarageController
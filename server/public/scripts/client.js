let myApp = angular.module( 'myApp', [] );

class Car{
    constructor( make, model, odometer, year ){
        this.make = make;
        this.model = model;
        this.odometer = odometer;
        this.year = year;
    } // end constructor
} // end Car class

myApp.controller( 'GarageController', function(){
    let vm = this;

    vm.addCar = function(){
        let newCar = new Car( vm.makeIn, vm.modelIn, vm.odometerIn, vm.yearIn );
        console.log( 'adding:', newCar );
    } // end addCar
}); // end GarageController
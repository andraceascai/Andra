var car = {
    make: "Ford",
    model: "Mondeo",
    year: 2015,
    color: "metalic grey",
    passengers: 5,
    mileage: 2000,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,

    refill: function(quantity){
        if(this.fuel + quantity > this.maxFuel){
            this.fuel = this.maxFuel;
            console.log("Too much!");
        }else this.fuel += quantity;
    },

    drive: function(distance){
        if(this.distanceToEmpty() < distance){
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round(distance * this.mediumConsumption / 100);
        this.fuel -= consumption;
        this.mileage += distance;
    },

    distanceToEmpty: function(){
      return Math.round(this.fuel / this.mediumConsumption *100);
    },

    stop: function(){
        if(this.engineIsOn)
           { this.engineIsOn = false;
             console.log("Car stopped");}
        else console.log("Car is already stopped");

    },

    start: function(){
        if(!this.engineIsOn){
            this.engineIsOn = true;
            console.log("Car started");}
       else console.log("Car is already started");
        }
    
    

};

// console.log(car.year);
// car.mileage = 2150;
// console.log(car.mileage);
// car.start();
// car.start();

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);


// for(prop in car){
//     console.log(prop + " = " + car[prop]);
// }







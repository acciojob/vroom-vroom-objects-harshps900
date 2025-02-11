// Car class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Method to get make and model
    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar class inheriting from Car
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // Call parent class constructor
        this.topSpeed = topSpeed;
    }

    // Method to get top speed
    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

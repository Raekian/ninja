class Ninja {
    constructor(name, health = 100, speed = 3, strenght = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strenght = strenght
    }
    sayName(){
        console.log(this.name)
    }

    showStats() {
        console.log(`${this.name} has ${this.strenght} strenght, ${this.speed} speed, and ${this.health} health!`)
    }

    drinkSake() {
        this.health += 10
    }
}


const ninjaOne = new Ninja("Mochi");
ninjaOne.sayName();
ninjaOne.showStats();
ninjaOne.drinkSake();
ninjaOne.showStats();
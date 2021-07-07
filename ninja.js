// this contains both ninja and super_ninja assigments!
class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(this.name)
    }

    showStats() {
        console.log(`${this.name} has ${this.strength} strenght, ${this.speed} speed, and ${this.health} health!`)
    }

    drinkSake() {
        this.health += 10
        console.log(`${this.name} takes a sip of sake`)
    }
}


class Sensei extends Ninja {
    constructor(name, health = 200, speed=10, strength =10) {
        super(name, health, speed, strength )
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake();
        console.log("I am so smart it hurts, this is not true");
    }

}


const ninjaOne = new Ninja("Mochi");
const senseiOne = new Sensei("Splinter")
ninjaOne.sayName();
ninjaOne.showStats();
ninjaOne.drinkSake();
ninjaOne.showStats();
senseiOne.speakWisdom();
senseiOne.showStats();
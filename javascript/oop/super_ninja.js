class Ninja {
    constructor(name, health=100, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        console.log("******************************");
    }
    
    showStats(){
        console.log(`Name - ${this.name}`)
        console.log(`Strength - ${this.strength}`)
        console.log(`Speed - ${this.speed}`)
        console.log(`Health - ${this.health}`)
        console.log("******************************");
    }

    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name, health=100, speed=3, strength=3, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom=wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Programming is breaking of one big impossible task into several very small possible tasks.");
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();
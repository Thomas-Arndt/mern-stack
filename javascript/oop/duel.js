class Card{
    constructor(name,  cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power=power;
        this.resilience=resilience;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience-=this.power;
        }
        else{
            console.log("Target must be a unit.");
        }
    }

    displayInfo(){
        console.log(this.name);
        console.log(`Cost: ${this.cost}`);
        console.log(`Power: ${this.power}`);
        console.log(`Resilience: ${this.resilience}`);
        console.log("******************************");
    }


}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    applyEffect(target){
        console.log(`Playing ${this.name}...`);
        if(target instanceof Unit && this.stat in target){
            target[this.stat]+=this.magnitude;
        }
    }
}

const red_belt_ninja1 = new Unit("Red Belt Ninja",3,3,4);
const black_belt_ninja1 = new Unit("Black Belt Ninja",3,5,4);
const hard_algorithm1 = new Effect("Hard Algorithm",2, "Increase target's resilience by 3", "resilience", 3);
const unhandled_promise_rejection1 = new Effect("Unhandled Promise Rejection",1, "Reduce target's resilience by 2", "resilience", -2);
const pair_programming1 = new Effect("Pair Programming",2, "Increase target's power by 2", "power", 2);

red_belt_ninja1.displayInfo();
black_belt_ninja1.displayInfo();
hard_algorithm1.applyEffect(red_belt_ninja1);
red_belt_ninja1.displayInfo();
black_belt_ninja1.displayInfo();
unhandled_promise_rejection1.applyEffect(red_belt_ninja1);
red_belt_ninja1.displayInfo();
black_belt_ninja1.displayInfo();
pair_programming1.applyEffect(red_belt_ninja1);
red_belt_ninja1.displayInfo();
black_belt_ninja1.displayInfo();
red_belt_ninja1.attack(black_belt_ninja1);
console.log("Attacking...");
red_belt_ninja1.displayInfo();
black_belt_ninja1.displayInfo();

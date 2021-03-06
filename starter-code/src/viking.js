// Soldier
function Soldier(health, strength) {
    this.health= health;
    this.strength= strength;
    this.attack = function attack(){
        return this.strength ;
    };
    this.receiveDamage = function(damage){
        this.health= this.health - damage;
    };
};

// Viking
function Viking(name, health, strength) {
    this.name= name;
    Soldier.call(this, health, strength);
    this.battleCry = function battleCry () {
    } ;
    this.receiveDamage = function(damage){
        this.health= this.health - damage;
        if ( this.health <=0) {
            return this.name +" has died in act of combat";
        }
        else 
        return this.name +" has received "+ damage + " points of damage";
    };
    this.battleCry= function(){
        return "Odin Owns You All!";
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon( health, strength) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.health= this.health - damage;
        if ( this.health <=0) {
            return "A Saxon has died in combat";
        }
        else 
        return   "A Saxon has received "+  damage +" points of damage";
    };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {}

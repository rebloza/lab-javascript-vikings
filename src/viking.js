// Soldier
class Soldier {

  constructor(health, strength){

    this.health = health;
    this.strength = strength;
  }

 attack(){
  return this.strength
}

 receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking  extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  
  receiveDamage(damage){
    this.health -= damage

    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else  { 
      return `${this.name} has died in act of combat`
    }

  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength){
    super(health,strength)
  }

  
  receiveDamage(damage){
    this.health -= damage

    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else  { 
      return "A Saxon has died in combat"
    }

  }

}


// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){

    this.vikingArmy.push(viking)

  }

  addSaxon(saxon){

    this.saxonArmy.push(saxon)

  }

  selectRandom(arr) {
    let aleatorio = Math.random() * arr.length
    let redondear = Math.floor(aleatorio)
    let elemento = arr[redondear]
     return elemento
  } 

  vikingAttack(){

    let saxon = this.selectRandom(this.saxonArmy)
    let viking = this.selectRandom(this.vikingArmy)

    let daño = saxon.receiveDamage(viking.strength)
    if(saxon.health <= 0 ){
      this.saxonArmy = this.saxonArmy.filter((current) => {
        return current !== saxon 
       })
    }

    return daño
    
  }

  saxonAttack(){

    let saxon = this.selectRandom(this.saxonArmy)
    let viking = this.selectRandom(this.vikingArmy)

    let daño = viking.receiveDamage(saxon.strength)
    if(viking.health <= 0 ){
      this.vikingArmy = this.vikingArmy.filter((current) => {
        return current !== viking
       })
    }

    return daño
    
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

/*
function SuperHuman (name, superPower) {
  this.name = name;
  this.superPower = superPower;
}

// usePower is shared across ALL SuperHuman instances
SuperHuman.prototype.usePower = function () {
  console.log(this.superPower + "!");
};

var banshee = new SuperHuman("Silver Banshee", "sonic wail");

banshee.usePower();
*/



function SuperHuman (name, superPower) {
  this.name = name;
  this.superPower = superPower;
}

SuperHuman.prototype.usePower = function () {
  console.log(this.superPower + "!");
};

function SuperHero (name, superPower) {
  // Reuse SuperHuman initialization
  SuperHuman.call(this, name, superPower);

  this.allegiance = "Good";
}

SuperHero.prototype = new SuperHuman();

SuperHero.prototype.saveTheDay = function () {
    console.log(this.name + " saved the day!");
};

var marvel = new SuperHero("Captain Marvel", "magic");

// Outputs: "Captain Marvel saved the day!"
marvel.saveTheDay();

// Outputs: "magic!"
marvel.usePower();

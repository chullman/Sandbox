var superHuman = {
  usePower: function () {
      console.log(this.superPower + "!");
  }
};

var superHero = Object.create(superHuman, {
  allegiance: { value: "Good" },
  saveTheDay: {
      value: function () {
          console.log(this.name + " saved the day!");
      }
  }
});

var marvel = Object.create(superHero, {
  name: { value: "Captain Marvel" },
  superPower: { value: "magic" }
});

// Outputs: "Captain Marvel saved the day!"
marvel.saveTheDay();

marvel.usePower();
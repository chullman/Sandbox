/*
let me = {};
me.age = 29;
me.currentLocation = 'Brisbane';
me.hobbies = ['video games', 'sleeping'];

console.log(me.age);
console.log(me.currentLocation);

//delete me.age;



me.hobbies.push('hiking');

me.hobbies.shift()

for (let hobby of me.hobbies) {
  console.log(hobby);
}

me.mother = {
  name: 'Mum',
  age: 100,
  location: 'NSW'
}

me.print_details = function () {
  console.log(`My age is ${me.age} and I am in ${me.currentLocation}`);
}

me.print_details();
*/


const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };


console.log(`${brisbane_campus.street} at ${brisbane_campus.state}`);

//###################################################################

// Dog Constructor & Prototype
function Dog(hungry) {

  this.status = "normal";
  this.color = "black";
  this.hungry = "hungry";
}
//human

const sadie = new Dog(false);
const moonshine = new Dog(true);
const atticus = new Dog();



function Human(cool) {
  this.cool = cool;
  this.pet = function(dog) {
      dog.status = "happy";
  }


  this.feed = function(dog) {
    dog.hungry = false;
  }


  Human.prototype.pet = function(dog) {
    dog.status = "happy";
  }

  Human.prototype.feed = function(dog) {
    dog.hungry = false;
  }}

  const mason = new Human(true);
  const julia = new Human(false);

  // Instances of Human
  // Needed: mason, julia

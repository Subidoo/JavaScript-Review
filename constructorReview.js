//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

  //code here
  function Animal(species, name, legs, color, food){
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = [];
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the 
//following parameters. name, age, height, gender

  //code here

  function Person(name, age, height, gender) {
    this.name = name;
    this.age =  age;
    this.height = height;
    this.gender = gender;
  }


//Create a animal array and a person array.

  //code here
  var animalArr = [];
  var personArr = [];


//Create two instances of Animal and push those into your animal array

  //code here
animalArr.push(new Animal('dog', 'spot', 4, white, 'dog food'));
animalArr.push(new Animal('cat', 'mewo', 4, black, 'cat food'));

//Create two instances of person and push those into your person array.

  //code here
personArr.push(new Person('Kyle', 29, '5ft 10in', 'male'));
personArr.push(new Person('Jenn', 25, '5ft 7in', 'female'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that 
//instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function( ) {
  aler(this.name + ate + this.food)
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
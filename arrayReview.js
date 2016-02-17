var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
  function last(foo) {
  	alert(foo.pop())
  }
  last(threeItems);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

  function evenFinder(even) {
  	var evens = [];
  	for (var i = 0; i < even.length; i++) {
  		if(even[i]%2===0) {
  		evens.push(even[i]);	
  		}
  	};
  	console.log(even);
  }
  evenFinder(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a 
//function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, 
//if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
  
  
  function inArray(foo) {
  	var randomNum = getRandomArbitrary();
	if(foo.indexOf(randomNum) >= 0) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
  inArray(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and 
//second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;
var newArray = first.splice();

  //code here
second = newArray;
second.push(6, 7);
alert(first); //[1,2,3,4,5];
alert(second); //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
  function longest(str) {
  	var string = str.split(' ');
  	var longest = 0;
  	var word = null;
  	for (var i = 0; i < string.length; i++) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word;
}
  longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt) {
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

toTitleCase(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how 
//many vowels are in that string.
var vowelCounter = function(string) {
    var arr = string.split("");
    for (var i = arr.length; i >= 0; i--) {
        if (arr[i] != "a" && arr[i] != "e" && arr[i] != "i" && arr[i] != "o" && arr[i] != "u") {
            arr.splice(i, 1);
        };
    }
    console.log(arr.length);
}

vowelCounter(theOdyssey);








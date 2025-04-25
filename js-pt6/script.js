// chapter 12:

// 1.
var value1 = 10;
var value2 = 5;

if (value1 >= value2) {
  alert("value1 is greater than or equal to value2");
} else {
  alert("value1 is less than value2");
}

 // 2.
 var marks = parseInt(prompt("Enter your marks out of 100"));
 if (marks >= 80) alert("Grade: A+");
 else if (marks >= 70) alert("Grade: A");
 else if (marks >= 60) alert("Grade: B");
 else if (marks >= 50) alert("Grade: C");
 else alert("Fail");

 // 3.
 var val = 10;
 if (val == 10) alert("val is 10");
 else alert("The correct value of val is " + val);

 // 4.
 var city = prompt("Enter your city:");

if (city === "karachi") {
  alert("You entered karachi — the city of lights!");
} else if (city === "lahore") {
  alert("You entered lahore — the heart of Pakistan!");
} else {
  alert("You entered a different city.");
}




// Chapter 13:

 // 1. 
 var a = 10, b = 10, c = 5, d = 5;
 if (a === b && c === d) {
   alert("Both conditions are true: a === b AND c === d");
 }

 // 2. 
 if (a === b || c !== d) {
   alert("At least one condition is true: a === b OR c !== d");
 }

 // 3. 
 var name = "Hamza";
 var age = 25;
 if ((name === "Hamza" || name === "Arsalan") && age < 60) {
   alert("Name is Hamza or Arsalan AND age is less than 60");
 }

 // 4.
 var num1 = 20;
 var num2 = 30;
 if (num1 < num2 || num1 > num2) {
   alert("num1 is either less than or greater than num2");
 }

 // 5. 
 var firstName = "Ali";
 var lastName = "Khan";
 var userFirst = prompt("Enter your first name:");
 var userLast = prompt("Enter your last name:");

 if (userFirst === firstName && userLast === lastName) {
   alert("Name match successful!");
 } else {
   alert("Name did not match.");
 }


// Chapter 14:

 // 1.
  var password = prompt("Enter your password:");
  if (password !== "") {
    if (password.length <= 5) {
      alert("Password must be greater than 5");
    } else {
      alert("OK");
    }
  }

  // 2. 
  var a = 1;
  var c = "Max";
  if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }

  // 3. 
  if (a === 1 && c === "Max") {
    alert("Combined condition OK");
  }

  // 4. 
  var num1 = 100;
  var num2 = 100;
  if (num1 === num2) {
    if (num1 <= num2) {
      alert("Both conditions passed: num1 === num2 and num1 <= num2");
    }
  }


// Chapter 15:

 // 1. 
 var emptyArray = [];
 console.log("Empty array declared:", emptyArray);

 // 2. 
 var singleElementArray = ["Hello"];
 alert("Single element array: " + singleElementArray[0]);

 // 3. 
 var alphabet = ["h", "i", "j", "k"];
 alert("The letter at index 2 is: " + alphabet[2]);

 // 4. 
 var bigAlphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
 alert("Total length of the array is: " + bigAlphabet.length);

 // 5. 
 var newArray = ["first"];
 newArray[1] = "second";
 alert("The newly added element is: " + newArray[1]);


//  Chapter 16:

 // 1. 
 var fruits = ["Apple"];
 fruits.push("Banana");
 alert("Last element in array: " + fruits[fruits.length - 1]);

 // 2. 
 var Alphabet = ["h", "i", "j", "k"];
 Alphabet.pop(); // removes "k"
 alert("Alphabet after removing last element: " + Alphabet);

 // 3. 
 Alphabet.push(100);
 alert("Alphabet after adding a number: " + Alphabet);



// Chapter 17:

  // 1. 
  var sizes1 = ["S", "M", "XL", "XXL", "XXXL"];
  sizes1.shift();
  alert("After removing first element: " + sizes1);

  // 2. 
  var sizes2 = ["S", "M", "XL", "XXL", "XXXL"];
  sizes2.unshift(1, 2, 3);
  alert("After adding 3 numbers at start: " + sizes2);

  // 3. 
  var singleArray = ["end"];
  singleArray.unshift("start");
  alert("New first element: " + singleArray[0]);

  // 4. 
  var sizes3 = ["S", "M", "XL", "XXL", "XXXL"];
  sizes3.splice(2, 0, "L"); // 
  alert("After inserting 'L': " + sizes3);

  // 5.
  var sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
  var regSizes = sizes4.slice(0, 3);
  alert("Regular sizes: " + regSizes);

  // 6. 
  var pets1 = ["dog", "cat", "ox", "duck", "frog"];
  pets1.splice(1, 3, "parrot", "rabbit"); 
  alert("Updated pets list: " + pets1);

  // 7. 
  var pets2 = ["dog", "cat", "ox", "duck", "frog"];
  pets2.splice(1, 2); 
  alert("Pets after removing cat and ox: " + pets2);

  // 8. 
  var pets3 = ["dog", "cat", "ox", "duck", "frog", "flea"];
  var newPets = pets3.slice(3, 5); 
  alert("Reduced pets: " + newPets);

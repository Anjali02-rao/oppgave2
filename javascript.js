/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
function valueOddOrEven(number) {
    if (number % 2 ===0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(valueOddOrEven(7))
  console.log(valueOddOrEven(10))
  
  
  /******************************************************************************
  2.
  
  Make the following function:
  
  The function should take in a string as a parameter and return the string 
  in upper case with an exclamation mark at the end.
  
  Example: "This is cool" should return "THIS IS COOL!"
  
  ******************************************************************************/
  function callString(string) {
    return string.toUpperCase() + `!`
    }
  
    console.log(callString("This is cool"))
  /******************************************************************************
  3.
  
  Make the following function:
  
  The function should take in 2 parameters:
  
   - A name (string)
   - An hour of the day (number)
  
  The function should return:
  "Invalid time" if the hour received is less than 0
  "Good night (name received)" if the hour received is 0-5
  "Good morning (name received)" if the hour received is 6-11
  "Good day (name received)" if the hour received is 12-17
  "Good evening (name received)" if the hour received is 18-23
  "Invalid time" if the hour received is greater than 23
  
  If no hour is received, your function should return an error message.
  
  ******************************************************************************/
  function helloByTime(name, hour) {
    if (hour === undefined) {
      return "Error: Hour should be given .";
    }
  
    if (hour < 0 || hour > 23) {
      return "Invalid time";
    }
  
    if (hour >= 0 && hour <= 5) {
      return `Good night, ${name}`;
    } else if (hour >= 6 && hour <= 11) {
      return `Good morning, ${name}`;
    } else if (hour >= 12 && hour <= 17) {
      return `Good day, ${name}`;
    } else if (hour >= 18 && hour <= 23) {
      return `Good evening, ${name}`;
    }
  }
  
  console.log(helloByTime("Anjali", 3))
  console.log(helloByTime("Anjali", 8))
  console.log(helloByTime("Anjali", 13))
  console.log(helloByTime("Anjali", 18))
  console.log(helloByTime("Anjali", 26))
  console.log(helloByTime("Anjali"))
  
  /******************************************************************************
  4.
  
  Make the following function:
  
  The function should take in an array as a parameter, and return the array 
  with the first and last index removed.
  
  Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]
  
  Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
  ["Two", "Three", "Four", "Five"]
  ******************************************************************************/
   
      const array = ["Red", "Green", "Blue", "Yellow"]
      const array1 = ["One", "Two", "Three", "Four", "Five", "Six"]
  
  
      console.log(array.splice(1, 2))
      console.log(array1.splice(1, 4))
  
  
  
  /******************************************************************************
  5.
  
  Make the following function:
  
  The function should take in a string as a parameter.
  
  Use string methods on the text parameter you receive to do the following:
   - Replace the word 'hard' with 'fun'
   - Remove the whitespace from the beginning and end of the string
   
  Then return the string.
  
  Example1: "  Javascript is hard   " should return "Javascript is fun"
  Example2: " It's hard to use methods " should return "It's hard to use methods"
  Example3: "   hard        " should return "fun"
  
  ******************************************************************************/
  
  function changeContent(space) {
      const removedSpace = space.trim(); 
      const modifiedText = removedSpace.replace('hard', 'fun'); 
      return modifiedText; 
    }
  
  console.log(changeContent("  Javascript is hard  ")); 
  console.log(changeContent(" It's hard to use methods ")); 
  console.log(changeContent("   hard    ")); 
  
  
  
  /******************************************************************************
  6.
  
  Use array methods to do the following:
  
   - Remove the first hero of the array (Spider-Man)
   - Replace "Doctor Strange" with "Skrull"
   - Use the splice method to remove Thor and Hulk and add "Captain America"
   - Join the array to a string with "💪" between each hero
  
  ******************************************************************************/
  
  function modifyHeroes(heroes) {
      heroes.shift()
      
      const index = heroes.indexOf("Doctor Strange")
      if (index !== -1) {
        heroes[index] = "Skrull"
      }
      
      const thorIndex = heroes.indexOf("Thor")
      if (thorIndex !== -1) {
        heroes.splice(thorIndex, 2, "Captain America") 
      }
      
      return heroes.join("💪")
    }
    
    
    const heroes = ["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron-Man", "Black Widow"]
    const result = modifyHeroes(heroes)
  
  
    console.log(result)
    
  /******************************************************************************
  7.
  
  EXTRA CHALLENGE
  
  This is not mandatory, only for those who want an extra challenge.
  
  Make the following function:
  
  The function should take in 1 parameter.
  
  If the parameter received is a string: 
  Return the string with "😎" added to the beginning and end
  
  If the parameter received is a number:
  Double it, convert it to a string and return it with "😎" added to the 
  beginning and end.
  
  If the parameter received is a boolean:
  If the parameter received is true, return "😎Yeah😎". If the parameter received
  is false, return "😎Chill😎"
  
  If the parameter received is any other datatype:
  Return "😎Primitive values only😎"
  
  ******************************************************************************/
  console.log("Oppgave 7")
  
  function sunnyDay(cherry) {
    if (typeof cherry === "string") {
      return "😎cherry😎"
    }
  
    if (typeof cherry === "object") {
    return "😎Primitive values only😎"
  }
   console.log(sunnyDay("cherry"))
   console.log(sunnyDay({name: "Anjali"}))
  
  
   if (typeof cherry === "number") {
    return ("😎" + cherry * 2 + "😎");  
    } 
    
    {
      if (typeof cherry === "boolean") {
        return cherry ? "😎Yeah😎" : "😎Chill😎"
      }
    }
  }
  console.log(sunnyDay(false))
  console.log(sunnyDay(10))
  
  console.log("Oppgave ferdig")
  
  /******************************************************************************
  8.
  
  EXTRA CHALLENGE #2:
  
  This is not mandatory, only for those who want an extra challenge.
  
  Make the following function:
  
  The function should take in 2 parameters, 1 array and 1 string.
  
  Inside your function, check if the array received contains the string received.
  If it does, remove that element from the array and return it.
  
  If the array does not contain the string, add that string to the end of the 
  array and return it.
  
  Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
  Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
  Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
  Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
  ******************************************************************************/
  
  function modifyArray(array, String) {
    const index = array.indexOf(String) 
    if (index !== -1) {
          array.splice(index, 1)
    } else {
          array.push(String)
    }
  
    return array;
  }
  
  console.log(modifyArray(["Red", "Green"], "Blue"))     
  console.log(modifyArray(["Red", "Green", "Blue"], "Green"))  
  console.log(modifyArray(["One", "Two", "Three"], "Four"))    
  console.log(modifyArray(["One", "Two", "Three"], "Two"))     
  
  
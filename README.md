R# CS Prep Assessment

**Before you submit your assessment**

Please leave a comment at the end of your assessment to tell us which program you will be applying to (WCRI, CTRI, ECRI, PTRI, or NYOI)?

Note: This assessment is intended to be worked on independently, and all work submitted must be strictly your own. While you may feel free to research and reference documentation online if stuck, do not consult with your cohortmates on any of the problems.

**Challenge 1: Get Students**

You are working for a music school and are tasked with creating a way to search through a student list.

Define a function **getStudents** that takes two arguments, an array **students** and a callback function **searchCriterion**. The callback function should be a test that returns a boolean based on the input. **getStudents** should filter the input **students** array based on the criterion provided by the **searchCriterion** callback function. **getStudents** should return a new array containing only the students' names.

**Challenge 2: Play**

You are a developer at a rockstar gaming company. You are tasked with creating a function **play** that takes an integer **startingHealth** and returns an object that contains two methods that have access to the **play** function's lexical scope.

The methods should be called **attack** and **heal**. Both will update the player's health points, and **must do so using closure**.

**attack** should take in an integer **damageTaken** that decreases the player's health and returns a string with the player's updated health points. If the health points are taken to 0 or below, it should return "Game Over".

**heal** should increase the player's health and return a string with the player's updated health points.

**Challenge 3: Repeat String**

Declare a **recursive** function **repeatString**, which takes in a string and a number as arguments.
**repeatString** should return a new string, in which the original string is repeated **num** times.

If called with a number less than 1, **repeatString** should return **undefined**.

**Bonus Challenge: Bird**

You are working with National Geographic on a bird tracking application. You are tasked with creating a function that returns objects representing different birds. Each **Bird** object should contain the following properties, which are initially set via arguments when the object is created:

**species** (string representing the bird's species)
**color** (string representing the bird's color)
**locations** (array of locations where the bird has been found)

Example:
// const newBird = Bird('canary', 'red', ['newyork', 'spain'])
// console.log(newBird) // => should log { species: 'canary', color: 'red', locations: ['newyork', 'spain'] }

The following methods must also be available to every instance of a Bird object (but not stored on the individual objects themselves):

**getColor**: returns the color of the bird
**setColor**: sets a new color for the bird
**getLocations**: returns the locations where the bird was found
**addLocation**: adds a new location to the locations array

The methods that take an argument must accept only one argument, and it must be a string.

Example:
// console.log(newBird.getColor()); // => should return 'red'
// newBird.setColor('yellow');
// console.log(newBird.getColor()); // => should return 'yellow'
// newBird.addLocation('france');
// console.log(newBird.getLocations()) // => should return ['newyork', 'spain', 'france']

Extra Bonus: Rewrite this as an ES6 class!

\*/

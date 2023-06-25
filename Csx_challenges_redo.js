
         // precourse part 1
// 1)template strings
// const first = "Welcome";
// const second = "to the";
// const third = "jungle!";

// // ADD CODE BELOW
// const welcomeStatement=`${first} ${second} ${third}`

// // Uncomment the line below to check your work!
// console.log(welcomeStatement);


// 2)// Declare 2 variables x & y that are Numbers
// Declare a string 'solution' that when printed to the console reads like:
// "The sum of <x> and <y> is <x + y>"
// ADD CODE BELOW

// const x=1
// const y=1
// const solution=`The sum of ${x} and ${y} is ${x+y}`
// console.log(solution)

// 3)let hometown = "New York City";
// let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// // ADD CODE BELOW
// const count=hometown.length;
// const upper=favAlbum.toUpperCase()
// const lower=favAlbum.toLowerCase()

// // Uncomment the line below to check your work!
// console.log(count);
// console.log(upper);
// console.log(lower);



// 4)const songTitle = "Space Oddity"
// const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// // ADD CODE BELOW
// const firstLetter=songTitle[0]
// const seventhCharacter=songTitle[6]
// const lastLetter=lyrics.charAt(lyrics.length -1)

// // Uncomment the line below to check your work!
// console.log(firstLetter);
// console.log(seventhCharacter);
// console.log(lastLetter);

// 5)// ADD CODE BELOW
// const birthYear=2001
// const age=22
// const in10Yrs=age+10
      
// // Uncomment these to check your work!
// console.log(birthYear);
// console.log(age);
// console.log(in10Yrs);
//             console.log(`In 10 years i will be ${in10Yrs} years old`)


// 6)// ADD CODE BELOW
// const twentyTimesFour=20*4
// const nineOverThree=9/3
// const twoHundredTimesThree=200.3*3


// // Uncomment these to check your work!
// console.log(twentyTimesFour);
// console.log(nineOverThree);
// console.log(twoHundredTimesThree);

// console.log(`20 x 4 = ${twentyTimesFour},
// 9 / 3 = ${nineOverThree}, and 200.3 * 3 = ${twoHundredTimesThree}`)


// 7)const fiveSquared=5**2
// const eightCubed=8**3
// const sevenToTheSixth=7**6
// const eightyThreeModSix=83%6
// const sixtyModNine=60%9

// console.log("The product of fiveSquared is:", fiveSquared);
// console.log("The product of eightCubed is:", eightCubed);
// console.log("The product of sevenToTheSixth is:", sevenToTheSixth);
// console.log("The product of eightyThreeModSix is:", eightyThreeModSix);
// console.log("The product of sixtyModNine is:", sixtyModNine);

// 8)let num1 = 32;
// let num2 = 44;

// // ADD CODE BELOW HERE

// num1++
// num2--
// console.log(`32 incremented is ${num1}`)
// console.log(`44 decremented is ${num2}`)


// 9)let num1 = 32;
// let num2 = 25;
// let num3 = 92;
// let num4 = 64;

// // ADD CODE BELOW HERE
// num1+=17
// num2-=14
// num3*=11
// num4/=8

// console.log(`The value of num1 is: ${num1}`);
// console.log(`The value of num2 is: ${num2}`);
// console.log(`The value of num3 is: ${num3}`);
// console.log(`The value of num4 is: ${num4}`);


// 10)let iHaveChanged = false;

// ADD CODE BELOW
// iHaveChanged=true
// const iLoveCoding=iHaveChanged
// const codingIsTooHard=false

// console.log(`I love coding: ${iLoveCoding},
// Coding is extremely hard: ${codingIsTooHard}`)


// 11)// 1.
// const small = 2;
// const large = 5342;
// // ADD CODE BELOW (isSmaller)
// const isSmaller=small<large
// console.log(isSmaller)


// // 2.
// const num = 45;
// const string = "45";
// // ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)

// const isLooselyEqual=num==string
// const isStrictlyEqual=num===string

// // 3.
// const isTrue = true;
// const isFalse = false;
// const isTrueNotFalse=isTrue!==isFalse
// console.log(isTrueNotFalse)
// // ADD CODE BELOW (isTrueNotFalse)


// // Uncomment these to check your work! 
// console.log('Is 2 < 5342?');
// console.log(isSmaller);
// console.log('Is 45 loosely equal to "45"?'); 
// console.log(isLooselyEqual);
// console.log('Is 45 strictly equal to "45"?');
// console.log(isStrictlyEqual);
// console.log('Is true not equal to false?');
// console.log(isTrueNotFalse);


// 12)Type coersion
// // Uncomment the code below to test
// console.log(10 + 5);
// console.log("10" + 5);
// console.log(5 + "10");



// 13)const favMovie = "Star Wars: Episod IV";
// const timesSeen = 732;
// const goingToWatchItAgain = true; 


// const favMovieType=typeof favMovie
// const timesSeenType=typeof timesSeen
// const seeAgainType=typeof goingToWatchItAgain

// // ADD CODE BELOW HERE
// console.log(typeof favMovie)
// console.log(typeof timesSeen)
// console.log(typeof goingToWatchItAgain)


// 14)const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE

// const fourthItem=horror[3]

// console.log(`${horror.join(', ')} array gave me the ${fourthItem}`)
// // Write a console.log statement below to check your work!



// 15)const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
// netflixShows.unshift('obj or pr.')

// console.log(netflixShows)
// // Write a console.log statement below to check your work!

// 16)let countDown = 10;
// ADD CODE HERE

// for (let i = countDown; i >=0; i--) {
//    console.log(i)
   
//    if(i===0){
//      countDown=0
//    }
//  }
//  // Uncomment the below line to check your work
//  console.log(countDown) // -> should print 0;


// 17)const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];


// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE

// for(let i=0; i<synonyms.length; i+=1){
//   greetings.push(`Have a ${synonyms[i]} day!`)
// }
// console.log(`greetings array changed woth following for loop and now contains the info from the synonyms array
// , so now the greetings array has ${greetings.join(', ')} info inside it`)


// 18)const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'

// // ADD CODE HERE

// for(let i=0; i<firstNames.length; i+=1){
// 	const fullNames=`${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
  
//   bios.push(`My name is ${fullNames}`)
// }


// console.log(bios)


// 19)const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE


// Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
// for(let i=0; i<increaseByTwo.length; i+=1){
//    increaseByTwo[i]=increaseByTwo[i]+2
//    }


// 20)let count = 2;
// ADD CODE HERE

// while(count<8){
//    console.log(count)
//    count++
//  }
//  // Uncomment these to check your work!
//  console.log(count); 

// 21)// ADD CODE HERE
// let addThis=0;
// let sum=0

// while(addThis<10){
//   sum+=addThis
//   addThis++
// }
// 

// // Uncomment the line below to check your work!
// console.log(sum);
// should give 45



// 22)const num = 40;
// let final;
// ADD CODE HERE


// Log final to the console below to check your work
// if(num>100){
//     final=null

// }
// else{
//     final=num+40
// }
// 80



// 21)const fb = [];
// ADD CODE HERE
// console.log(fb)
// for(let i=1; i<=16; i+=1){
//   if(i%3===0 && i%5===0){
//     fb.push('fizzbuzz')
//     continue;
//   } else if(i%5===0){
//     fb.push('buzz');
//     continue;
//   } else if(i%3===0){
//     fb.push('fizz');
//     continue;
//   }
// fb.push(i)
// }

// console.log(fb)

// 22)const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
// for(let i=0; i<timesTenIfOverFive.length; i+=1){
//    if(timesTenIfOverFive[i]>=5){
//      timesTenIfOverFive[i]*=10
//    }
//  }
 
//  // Uncomment the line below to check your work!
//  console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

// 23const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };

// let found = 0;
// // ADD CODE HERE

// for(let inLoop in checkObj){
//   if(inLoop.includes('foundNum')){
//     // checkObj.foundNum=1
//     checkObj['foundNum']=1
//     found=1
//   }
// }

// console.log(checkObj)

// 24)const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };

// const objToArray = [];
// // ADD CODE HERE

// for(let jojiComplete in checkObj){
// 	if(checkObj[jojiComplete]>=2){
//         // objToArray.push(jojiComplete)
//     		objToArray.push(checkObj[jojiComplete])
//   }
// }

// console.log(objToArray)



// 25)const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };


// let divBy6 = false;
// // ADD CODE HERE
// const objToArray=Object.values(checkObj)
// for(let i=0; i<objToArray.length; i+=1){
//   if(objToArray[i]%6===0){
//     divBy6=true
//   }
// }
// console.log(divBy6)

// 27)const nestedArr = [];
// // ADD CODE HERE
// // console.log(nestedArr)
// for(let i=0; i<5; i+=1){
//    nestedArr.push(['loop'.concat(i), i])
//  }
 
//  console.log(nestedArr)

// 28)const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// // ADD CODE HERE
// for(let i=0; i<possibleIterable.length; i+=1){
//   	if(possibleIterable[i]%3===0){
//       const curr=possibleIterable[i]

// divByThree[curr]=i
//     }
  
// }	

// console.log(divByThree)


// 29)// const sumMe = {
//   hello: 'there',
//   you: 8,
//   are: 7,
//   almost: '10',
//   done: '!'
// };
// let total = 0;
// // ADD CODE HERE

// for(let sum in sumMe){
//   if(typeof sumMe[sum]==='number'){
//     total= sumMe[sum] += sumMe[sum]+1
     
//   }
// }
// console.log(total)






// more practice with functions


// 30)// ADD CODE HERE
// const addTwo=(num)=>{
//    return num+2
//  }
//  // Uncomment these to check your work!
//  console.log(typeof addTwo); // should log: 'function'
//  console.log(addTwo(10)); // should log: 12


// 31)// ADD CODE HERE
// const addS=(str)=>{
//    return str.concat('s')
//  }
//  // Uncomment these to check your work!
//  console.log(typeof addS); // should log: 'function'
//  console.log(addS('cat')); // should log: 'cats'


// 32)// ADD CODE HERE
// const sayHello=(hal)=>{
//    return 'Hi, '+hal
//  }
//  // Uncomment these to check your work!
//  console.log(sayHello('Mary')); // should log: 'Hi, Mary'
//  console.log(sayHello('Haley')); // should log: 'Hi, Haley'
 

// 33)function wereAwesome(you, yourBuddy) {
  // ADD CODE HERE
//   return `${yourBuddy} and ${you} are awesome!`
// }


// // Uncomment the lines below to test your function:
// console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
// console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
// console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
// console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

// 34)function lastLetter(word) {
//   return word.charAt(word.length -1)
// }

// // Uncomment the lines below to test your code
// console.log(lastLetter("hello")); //=> "o"
// console.log(lastLetter("goodbye!")); //=> "!"
// console.log(lastLetter("ZeltoiD")); //=> "D"
// console.log(lastLetter("I love Javascript")); //=> "t"

// 35)const x = 3;

// function isX1(num) {
//    const x = 5;
//    return num === x;
// }

// function isX2(num) {
//    return num === x;
// }

// const one = isX1(5);
// const two = isX2(3);

// // Uncomment these to check your work!
// console.log(one); // should log: true
// console.log(two); // should log: true

// 36let calls = "";

// function jerry(str) {
// 	str+='Jerry'+kramer()
//   return str
// }

// function george(str='George') {
//    str+=elaine()
//    return str
// }

// function elaine(str) {
//    // str+=elaine()
//    return 'elaine'.charAt(0).toUpperCase().concat('laine')
// }

// function kramer(str='Kramer') {
// 	str+=george()
//   return str
// }


// // Uncomment these to check your work!
// calls = jerry(calls);
// console.log(calls); // should log: 'JerryKramerGeorgeElaine'


// 36)
// let friendsAvailable = true;
// // 				name=mary
// function makePlans(name) {
//    // friendsAvailable=callFriend()
//     name=name
//   return callFriend()
// }
//                      // bool=true
// function callFriend(bool, name='Mary') {
// //   no ths returns maximum call stack exceeded
  
//   // name=callFriend()
//   // INSERT CODE HERE
//    bool = true
//  if(friendsAvailable){
//    return `Plans made with ${name} this weekend`
//  }else{
//     return `Everyone is busy this weekend.`
//  }
// }

// // Uncomment these to check your work!
// console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
// friendsAvailable = false;
// console.log(makePlans("James")) //should return: "Everyone is busy this weekend."

 
// // 37)Printing the function log not executing it

// // function add20(num) {
// //   return num + 20
// // }

// // // CREATE YOUR CONSOLE.LOG BELOW 
// // console.log(add20)



// // hoisted function

// // 38)// ADD CODE HERE

// // Uncomment these to check your work!
// // console.log(isOdd(5)); // should log: true
// // console.log(isOdd(2008)); // should log: false

// // function isOdd(num){
// //  if(num % 2 !== 0) {
// //     return true
// // }

// // // if the number is odd
// // else {
// //     return false
// // }
// // }

// // 39)// ADD CODE HERE

// // Uncomment these to check your work!
// // console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
// console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'


// function iLoveEvenNumbers(num){
//  if(num%2===0){
//    return `Oh Yeah Evens!`
//  }else{
//    return `I am too normal for odd numbers`
//  }
// }

// 40)function getRemainder(num1, num2) {
  // INSERT CODE HERE
  
//   if(num1>num2){
//    return num1%num2
//  }else if(num1<num2){
//    return num2%num1
//  }
// }

// // Uncomment the lines below to test your code
// console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0


// 41)function greetings(hour) {
  
//   if(hour<12){
//    return `Good Morning!`
//  }else if(hour<15){
//    return `Good Afternoon!`
//  }else{
//    return `Good Night!`
//  }
// }

// // Uncomment these to check your work!
// console.log(greetings(8)); // expected log 'Good Morning!'
// console.log(greetings(12)); // expected log 'Good Afternoon!'
// console.log(greetings(14)); // expected log 'Good Afternoon!'
// console.log(greetings(15)); // expected log 'Good Night!'
// console.log(greetings(18)); // expected log 'Good Night!'


// 42)function gradeCalculator(grade) {
  // ADD CODE HERE
//   if(grade>=90){
//    return 'A'
//  }else if(grade>=80 && grade<90){
//    return 'B'
//  }else if(grade>=70 && grade<=80){
//    return 'C'
//  }else if(grade>=60 && grade<=70){
//    return 'D'
//  }else if(grade<=59){
//    return 'F'
//  }
// }

// // Uncomment the lines below to test your code
// console.log(gradeCalculator(92)); // => "A"
// console.log(gradeCalculator(84)); // => "B"



   
// console.log(gradeCalculator(70)); // => "C"


// console.log(gradeCalculator(61)); // => "D"



// console.log(gradeCalculator(43)); // => "F"



// 43)function droids(arr) {
//   let result = '';
//   // ADD CODE HERE
//   for(let i=0; i<arr.length; i+=1){
//    if(arr.includes('Droids')){
//      result=`Found Droids!`
//    } else{
//      result=`These are not the droids you're looking for.`
//    }
//   }
  
//   return result;
// }

// // Uncomment these to check your work! 
// const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
// const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
// console.log(droids(starWars)) // should log: "Found Droids!"
// console.log(droids(thrones)) // should log: "These are not the droids you're looking for."



// Same function problem using forEach method instead of for loop

// 44)function droids(arr) {
//   let result = '';
//   // ADD CODE HERE
//   arr.forEach(dr=>{
    
  
//    if(dr.includes('Droids')){
//      result=`Found Droids!`
//    } else{
//      result=`These are not the droids you're looking for.`
//    }
//   })
  
//   return result;
// }

// // Uncomment these to check your work! 
// const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
// const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
// console.log(droids(starWars)) // should log: "Found Droids!"
// console.log(droids(thrones)) // should log: "These are not the droids you're looking for."


// 45)function holidays(arr) {
  // Do not use a variable to store your result
  // ADD CODE HERE
  
//   for(let i=0; i<arr.length; i+=1){
//    if(arr.includes('October')){
//      return `Happy Halloween`
//    }else{
//      return 'Have a great day!'
//    }
//  }
// }

// // Uncomment these to check your work!
// const months = ["April", "May", "June", "October"];
// const animals = ["Cats", "Dogs", "Pigs"];
// console.log(holidays(months)); // should return: "Happy Halloween"
// console.log(holidays(animals)); // should return: "Have a great day!"

// 46)function addN(arr, n){
  // ADD CODE HERE
//   let arrNew;
//   for(let i=0; i<arr.length; i+=1){
//     arrNew=[arr[i]+=n]
//   }
//   return arr
// } 

// // Uncomment these to check your work!
// console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
// console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]


// 47)function getTheSum(arr){
  // ADD CODE HERE
//   let sumAdd=0;
//   for(let i=0; i<arr.length; i+=1){
//     sumAdd=sumAdd += arr[i];
//   }
//   return sumAdd
// }

// // Uncomment these to check your work!
// console.log(getTheSum([3, 6, 9])); // expected log 18
// console.log(getTheSum([10, 11, 12])); // expected log 33

// 49)// ADD CODE HERE 
function multiplyAll(...arg) {
   return arg.reduce((acc, cur) => {
      return acc*=cur
   })

 }
 // Uncomment these to check your work!
 console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
 



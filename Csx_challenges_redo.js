
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
// function multiplyAll(...arg) {
//    return arg.reduce((acc, cur) => {
//       return acc*=cur
//    })

//  }
//  // Uncomment these to check your work!
//  console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
 


// function multiplyAll(...arg) {
//    // return arg.reduce((acc, cur) => {
//    //    return acc*=cur
//    // })
//   let prod=1;
  
//   for (let i = 0; i < arg.length; i+=1) {
//    prod=prod*=arg[i]
   
// }
//   return prod

//  }
//  // Uncomment these to check your work!
//  console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
 
// Same way to do it using the array reduce method

// function multiplyAll(...arg) {
   // return arg.reduce((acc, cur) => {
   //    return acc*=cur
   // })
//  }
 // Uncomment these to check your work!
//  console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
 




// 50)function mergingElements(array1, array2) 
// {
//    var result = [];
//    var ctr = 0;
//    var x=0;
 
//    if (array1.length === 0) 
//     return "array1 is empty";
//    if (array2.length === 0) 
//     return "array2 is empty";   
 
//   while (ctr < array1.length && ctr < array2.length) 
//    {
//      result.push(array1[ctr] + array2[ctr]);
//      ctr++;
//    }
 
//   if (ctr === array1.length) 
//   {
//      for (x = ctr; x < array2.length; x++)   {
//        result.push(array2[x]);
//      }
//    } 
//    else
//    {
//    for (x = ctr; x < array1.length; x++) 
//      {
//        result.push(array1[x]);
//      }
//    }
//    return result;
//  }
 
//  // Uncomment these to check your work!
//  console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
//  console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]



// 51)// Adding 2 arrays together  ↓
// function mergingTripletsAndQuints(array1, array2) {
//   const c = [];
//   for (let i = 0; Math.max(i < array1.length, i < array2.length); i++) {
//     if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
//       c.push(array1[i] + array2[i]);
//     } else {
//       c.push(array1[i]);
//     }
//   }

//         return c;
// }

//   // Uncomment these to check your work!
//   console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
//   console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]


// decrementation

// 52)function imAboutToExplodeWithExcitement(n) {
  
//   while (n >= 0) {
//     if (n === 5) {
//       console.log(`Oh wow, I can't handle the anticipation!`)
//       n--
//       continue;
//     } else if (n === 3) {
//       console.log(`I'm about to explode with excitement!`)
//       n--
//       continue;
//     }else if(n===0){
//       console.log(`That was kind of a let down`)
//       // n--
      
//       break;
//     }
//         console.log(n);

//     n--
//   }
// }

// // Uncomment the line below to check your work!
// imAboutToExplodeWithExcitement(10) // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to

// 53)function closestToTheMark(player1, player2){
//   const theMark = Math.floor(Math.random() * 100)
//   console.log(`If theMark is ${theMark}...`);
//   // ADD CODE HERE
//   let res;
//   if(player1>theMark){
//     res= `Player 1 is closest`
//   }else if(player2>theMark){
//     return `Player 2 is closest`
//   }
//   return res
// }

// // Uncomment the line below to check your work!
// console.log(closestToTheMark(25, 75));



// 54)const getTheRange = (arr) => {
//   let low = arr[0],
//   high = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < low) {
//     low = arr[i];
//   } else {
//     high = arr[i];
//   }
// }
// let range = high - low;
// return [low, high, range];
// };

// console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])) // expect log [2, 10, 8]



// 55)function addingAllTheWeirdStuff(array1, array2) {


 // ADD CODE HERE
//   let sumOdd = 0;
//   let sumEven = 0;
//   let greaterThan20 = false; // false by default 
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i] % 2 !== 0)
//       sumOdd += array2[i];
//     else
//       sumEven += array2[i];
//     if (array2[i] > 20)// check if any element > 20
//       greaterThan20 = true;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < 10)
//       array1[i] += sumOdd;
//     else if (array1[i] > 10)
//       array1[i] += sumEven;
//     if (greaterThan20)// add the +1 if greater than 20
//       array1[i] += 1;
//   }
//   return array1;
// }

// // Uncomment these to check your work!
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

// 56)function disemvowel(string) {
//    for(let i=0; i<string.length; i+=1){
//     if(string[i].includes((/[aeiou]/gi, ''))){
//     return string.replace(/[aeiou]/gi, '')
//   }else if(string[i].includes((/[AEIOU]/gi, ''))){
//      return string.replace(/[AEIOU]/gi, '')
  
 
//  }
//     return string
// }
// }

// // Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'




// 57)// ADD CODE HERE 

// ADD CODE HERE 

// const addWaldo=(n)=>{
//   n['Waldo']='unknown'
//     return n
//   }
  
//   // Uncomment these to check your work!
//   const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
//   console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }Waldo: 'unknown' }

// either or works
// ADD CODE HERE 

// const addWaldo=(n)=>{
//   n.Waldo='unknown'
//     return n
//   }
  
//   // Uncomment these to check your work!
//   const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
//   console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }


// 58)ADD CODE HERE


// const findWaldo=(i)=>{
//   if(i.hasOwnProperty('Waldo')){
//     return 'unknown'
//   }else{
//     return "Where's Waldo?"
//   }
  
//   return i
  
// }

// // Uncomment these to check your work!
// const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
// const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
// console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
// console.log(findWaldo(supernatural)) // should log: 'unknown'


// callbacks and HOAM methods

// 59)// ADD CODE HERE
// const pluralize=(cb)=>{
//   return cb.map(function(e) {return e.concat('s')});
// }
// // Uncomment these to check your work!
// const animals = ["dog", "cat", "tree frog"];
// console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


// 60) ADD CODE HERE 
// const map=(cb)=>{
//   return cb.map(o=>o-2)
// }

// const subtractTwo=()=>{
//   return map
// }

// // Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


// same result

// const map=(arr,cb)=>{
//   const newArr=[]
//   for (let i = 0; i<arr.length; i++) {
//      newArr.push(cb(arr[i])) 
//   }


//   return newArr
// }

// const subtractTwo=(arr)=>{
// return arr-2
// }

// // Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


// 61)// ADD CODE HERE

// loops through current array
// const forEach=(arr, cb)=>{
//   let num=[];
//   for(let i=0; i<arr.length; i+=1){
//    cb(arr[i]);
//   }
//   return num
// }

// end cb looping function

// function map(arr, cb) {
//   const result = [];
//   forEach(arr, function (element) {
//     result.push(cb(element));
//   });
//   return result;
// }

// // Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]








// 61)// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//     // console.log(callback)
//   return newArray;
// }
// const arrOfNums = [1, 2, 3, 4, 5];




// function func1(num) {
//   // // ADD CODE HERE
// const nAr=[]
//   if (num % 2 === 0) {
//     num = num;
//   } else {
//     num = null;
//   }

//     return num
// }
// function func2(num) {
//   // ADD CODE HERE
//     if (num % 2 !== 0) {
//     num = num;
//   } else {
//     num = null;
//   }

//     return num

// }

// // Uncomment these to check your work!
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


// 62)function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
//   const filteredArray=[]
  
//   for(let i=0; i<array.length; i+=1){
//     if (callback1(array[i], i, array) || callback2(array[i], i, array)) {
//        filteredArray.push(array[i]);
//      }
//    }
   
   
   
//    return filteredArray
   
//  }
 
//  // Uncomment these to check your work!
//  const arrOfNums = [10, 35, 105, 9];
//  const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//  const over100 = n => n > 100;
//  console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

// 63)function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
// return x => callback1(x) || callback2(x);
// }

// // Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray
// }
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]


// using array concatanation method

// SAME RESULT

// function eitherCallback(callback1, callback2) {
//   // ADD CODE HERE
// return x => callback1(x) || callback2(x);
// }

// // Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray.concat(9);
// }
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]


// 64)// ADD CODE HERE
// const reduce=(arr, callback, initial)=>{
//   let acc = initial;
 
//    for (let i = 0; i < arr.length; i++) {
//      acc = callback(acc, arr[i]);
//    }
   
//  //   for(let array in arr){
//  //         acc = callback(acc, arr[array]);
 
//  //   }
 
//    return acc;
//  }
//  // Uncomment these to check your work!
//  const nums = [4, 1, 2];
//  const add = function(a, b) { return a + b; }
//  console.log(reduce(nums, add, 1)); // should log 8
 
 


// ADD CODE HERE
// ADD CODE HERE
// ADD CODE HERE
 // should log: [5, 15]


//  65)const intersection = (arrays) => {
//   const allArrays = arrays.reduce((acc, curr) => acc.concat(curr), []);

//   const intersectionArray = allArrays.reduce((acc, curr) => {
//     if (arrays.every((arr) => arr.includes(curr)) && !acc.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);

//   return intersectionArray;
// };

// // Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


// 66)// ADD CODE HERE

// const union=(uni)=>{
//   const newArray=[]
//       for(let i=0; i<uni.length; i+=1){
//             for(let j=0; j<uni[i].length; j+=1){
//           if (newArray.indexOf(uni[i][j]) === -1)
//               newArray.push(uni[i][j]);
              
//       }
//       }
//   return newArray
      
//       }
//   // Uncomment these to check your work!
//   const arr1 = [5, 10, 15];
//   const arr2 = [15, 88, 1, 5, 7];
//   const arr3 = [100, 15, 10, 1, 5];
//   console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]





// 67)// ADD CODE HERE

// const objOfMatches=(ar1,ar2,cb)=>{
//   let matchedObj = {};
//   for(let i=0; i<ar1.length; i+=1){
//     const key1=ar1[i]
//         const key2=ar2[i]

// 	if(cb(key1)===key2){
//     matchedObj[key1] = key2;
//   }
    
//   }
  
//   return matchedObj
// }
// // Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


// SAME RESULT

// ADD CODE HERE

// const objOfMatches=(ar1,ar2,cb)=>{
//   const matchedObj = {};
//   for(let i=0; i<ar1.length; i+=1){
// 	if(cb(ar1[i])===cb(ar2[i] && cb(ar1[i])))){
//       matchedObj[ar1[i]] = ar2[i];
//     delete matchedObj.howdy;
//     delete matchedObj.later;
//   }
//   }
  
//   return matchedObj
// }
// // Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


// 68)function arrToObj(array, callback) {
  // let objHere={}
  // array.forEach(el=>{
  //   const key1=array[0]
  //      const key2=array[1]
  //       objHere[key1]=capitalize(key1)
  //     objHere[key2]=capitalize(key2)
  // })
  // return objHere
  // }
  
  // // Uncomment these to check your work!
  // const arrOfStrings = ['beer', 'glue'];
  // const capitalize = str => str.toUpperCase();
  // console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }






  // ADD CODE HERE
// ADD CODE HERE

// 69)const prioritize=(array, callback)=>{
  // const mainArr=[]
//   const mainArr=[]
//   const NONsStarting=[]
//   for(let i=0; i<array.length; i+=1){
//     if(callback(array[i])){
//       mainArr.push(array[i])
//     }else{
//       NONsStarting.push(array[i])
//     }
// }
//         return mainArr.concat(NONsStarting)

// }
// // Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'
// // ADD CODE HERE


// 70)// ADD CODE HERE
// const countBy=(array, callback)=>{
//   const obj={}
//  const key1=array[1]
//      const key2=array[2]
//   for(let i=0; i<array.length; i+=1){
//     if(callback(array[i])){
//       obj[evenOdd(array[i])]=array[i]-2
        
//     }
//     else{
// obj[evenOdd()]=key2
//     }
//   }
//   return obj
// }
// // Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }


// 71)function groupBy(array, callback) {
//   let obj = {};
//   for (let i of array) {
//     let key = callback(i);
//     if (obj[key] === undefined) {
//       obj[key] = [];
//     }else{
//     obj[key].push(i);
//     }
//   }
//   return obj;
// }

// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) {
//   return Math.floor(num);
// };

// console.log(groupBy(decimals, floored));


// 71)// ADD CODE HERE
// const goodKeys=(obj, callback)=>{
//   const arr=[]
//   for(let objectProperties in obj){
//     const trueFalseVal=callback(obj[objectProperties])
//     if(trueFalseVal===true){
//       arr.push(objectProperties)
//     }
   
//   }
//   return arr
// }
// // Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']




// JS CLOSURES

// 72)function createFunction(){

//   return ()=>'hello world'; 
// }

// const myFunction = createFunction();
// console.log(myFunction()); 


// 73)// ADD CODE HERE
// const createFunctionWithInput=(input)=>{
//   return ()=>input
// }
// // UNCOMMENT THESE TO TEST YOUR WORK!
// const sampleFunc = createFunctionWithInput('sample');
// console.log(sampleFunc()); // should log: 'sample'


// 74)function outer() {
//   let counter = 0; // this variable is outside incrementCounter's scope
//   function incrementCounter() {
//     counter++;
//     console.log('counter', counter);
//   }
//   return incrementCounter;
// }

// const willCounter = outer();
// const jasCounter = outer();

// // Uncomment each of these lines one by one.
// // Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();
// jasCounter()


// 75)// ADD CODE HERE
// const addByX=(input)=>{
//   return (x)=>input+x
// }
// const addByTwo = addByX(2);
// const addByFour=addByX(4)
// // Now call addByTwo with an input of 1 and log the output
// console.log(addByTwo(1))
// // Now call addByTwo with an input of 2 and log the output
// console.log(addByFour(10))


// ADD CODE HERE
// 76)const once=(callback)=>{
//   let increm=0
//   let undefine=undefined
//   const yoyo= (inp)=>{
//     if(increm===0){
//       undefine= callback(inp)
//       increm++
    
//     }
    
//     return undefine
//   }
  
//                return yoyo

// }
             
// const addByTwoOnce = once(function(num) {
//   return num + 2;
// });

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5));  //should log 7
// console.log(addByTwoOnce(10));  //should log 7
// console.log(addByTwoOnce(9001));  //should log 7



// 77)// ADD CODE HERE
// const saveOutput=(func, pass)=>{
//   const obj={}
  
//   const hopper=(number)=>{
//     if(number!==pass){
//        obj[number]=func(number)
//       return obj[number]
//        }else{
//        return obj
//        }
    
//   }
//   return hopper
// }
// // Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }



// 78)// ADD CODE HERE
// const cycleIterator=(arr)=>{
//   let inc=0;
//   let newnew;
//   const iterateFunc=()=>{
   
//        if(inc<arr.length){
//          newnew=arr[inc]
//          inc++
//        }else{
//          return arr[0]
//        }
//     return newnew
//   }
//   return iterateFunc
// }
// // Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'


// 79)// ADD CODE HERE
// const defineFirstArg=(Func, arg)=>{
// 	const funcRet=(...addtionalArgs)=>{
//     return Func(arg, ...addtionalArgs)
//   }
//   return funcRet
// }
// // Uncomment these to check your work!
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15




// 80)function hobbyTracker(hobbies) {
//   const obj = {};
//   hobbies.forEach(hby => (obj[hby] = 0));

//   const funcRet = (hobby, hours) => {
//     if (hobby === undefined) {
//       for (let hobby in obj) {
//         obj[hobby] = 0;
//       }
//       return 'tracker has been reset!';
//     }

//     if (obj[hobby] === undefined) {
//       obj[hobby] = hours;
//     } else {
//       obj[hobby] += hours;
//     }
//     return obj;
//   };

//   return funcRet;
// }

// // Usage:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0 }



// FUNCTIONS AND EXECUTION CONTEXT - I FORGOT

// function makePlural(arr){
//   // ADD CODE HERE
//   return arr.map(i => `${i}s`);

// } 


// const arr1 = ['lion', 'tiger', 'bear']
// const arr2 = ['computer', 'video game', 'system']

// // Uncomment these to check your work!
// console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
// console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']
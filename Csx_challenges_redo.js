
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
let final;
// ADD CODE HERE


// Log final to the console below to check your work
// if(num>100){
//     final=null

// }
// else{
//     final=num+40
// }
// 80
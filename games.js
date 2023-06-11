//functions


function answerer(object, tryCounter =0){

  
    if (object.Answer === object.Response) return console.log(object.Explanation)
    if(tryCounter > 0 && object.Answer !== object.Response) console.log(`Nope! Try again`)
    if(tryCounter >= 10){return console.log(`Looks like you've tried more than 10 times. The answer is ${object.Explanation}`)}
       object.Response = prompt(object.Question)
  
  if(object.Response === 'recursion'){
      
      return answerer(object, tryCounter + 1) 
    } 

    //console.log(object)
    
 
    return answerer(object, tryCounter + 1)
  
}

//section for question objects

// Question 1 
let hoistQuestion = {

  Question: `Between var, let and const, what keyword is hoisted during the allocation phase and assigned a value of undefined?`,
  Response: undefined,
  Answer: 'var',
  Explanation: `Correct! The answer is var. Referencing var before assignment returns undefined.Referencing let or const prior to assignment throws a reference error`
 
}

let prototypeQuestion = {
  Question: `Objects all inherit properties and methods from a parent object. Where are these properties and methods stored?`,
  Response: undefined,
  Answer: 'prototype',
  Explanation: `Answer is prototype. Inherited properties and methods are stored in the constructor's prototype attribute.`
  // Difficulty: 
}

let filterQuestion = {
  Question: 'You have an array full of numbers, and need to get all values above the number 10. What method do you use when constructing your function?',
  Response: undefined,
  Answer: 'filter',
  Explanation: 'The answer is filter. The filter method allows you to set a callback function as a criteria, then filters out values in an array based on it.'
}

let functionQuestion = {

  Question: `Take a look at the following line of code: const example = () => console.log('hello world'). Is this an example of a function declaration or a function expression?`,
   Response: undefined,
  Answer: 'Function Expression',
  Explanation: ` alksjd;flkj`

  
}

let restSpreadQuestion = {

Question: `Do you use a 1) spread operator or a 2) rest paramater when you invoke the function?`,
Response: undefined,
Answer: 'spread operator',
Explanation: `Since parameters are only parameters when you declare your function, that's when you'll see the rest parameters - when the function's at rest. But when you invoke your function, you've got to get it operating, and that's where the spread operator comes into play`
}

let funcProgrammingQuestion = {

Question: `What is the term for a function that is treated as a variable? Hint: They're classy`,
  Response: undefined,
  Answer: 'First Class Function',
  Explanation: `First class functions can be used as variables and passed to other functions as arguments.`
  // Difficulty:
}

let recursionQuestion = {
  
  Question: `What is recursion? Hint: it\'s 'recursion' `,
  Response: undefined,
  Answer: 'recursion',
  SpecialKey: 'secret'
  // Explanation:
  // Difficulty:
}

//section for player objects

let beginGameQuestions = []
let nameStore
let ageStore
let jobStore

class PlayerCreator {

  constructor(name,age, occupation) {
       this.name = name
       this.age = age
       this.currHealth = 50
       this.playerLevel = 1
       this.maxHealth = this.playerLevel * 50
       this.socialCreditScore = Math.random()*-1000
       this.occupation = occupation
  }

  drink () {
  }

  eat () {

    
  }

  cry () {

    
  }
  
}

// this could be an opportunity to practice using set timeout function by splitting up the string line by line and passing it line by line to a setTimeout that delays the console log to the screen
console.log(`*****INTRO*****
The year is 3034. ChatGPT took over the world. There are few humans left who can still code. Most just barely scrape out a living cobbling together bits of code copied from an old stackoverflow archive. That can't code - not really. There are rumors of one left out there who still can, who knows a map() from a forEach(), a var from a let, a stackframe from a callstack, and a pancake from a flapjack. Is that you? Are you the last coder in the world? Y/N`)
console.log(' ')
let promptAns = alert(`Are you the last coder in the world? Y/N`)

// have to figure out a better way to break up these console logs of these lines of code
//setTimeout(()=>console.log(`Is that you?`),2000)
//setTimeout(()=>console.log(`Are you the last coder in the world?`), 4000)

function getPlayerInfo(){
nameStore=prompt('What is your name?')
ageStore=prompt('What is your age?')

jobStore=prompt('What is your occupation?')

}

if(promptAns === 'Y' || promptAns === 'y'){
getPlayerInfo()

}

const user1 = new PlayerCreator(nameStore, ageStore, jobStore)

console.clear()

console.log(`Welcome to BazeTopia baby! Says here on your papers you're a ${user1.occupation}. So I guess you must have some experience with variable hoisting.`)
promptAns = prompt(`Can you tell me what's wrong with my allocator 🐊 over here? Y/N`)

if(promptAns === 'Y' || promptAns === 'y'){

  console.log(`Great! This thing's been acting up lately - trouble with the thing is I can get my var to hoist in, but my let won't let me no matter what I do`)

answerer(hoistQuestion)
}

console.log(`Congratulations on answering that first question!`)

console.log(`The thing is - and I didn't want to ask this of you because we just met, but...`)

//console.clear()
answerer(prototypeQuestion)

console.log(`wow you're really getting good at this`)

answerer(filterQuestion)

console.log('')

console.log('Wow another right answer')

//setTimeout(()=>console.clear(), 5000)

console.log('i wanted to ask you another thing')

answerer(restSpreadQuestion)

console.log('oh wow you really know your stuff. How about this next one though?')
answerer(funcProgrammingQuestion)

console.log('another one right! I have one final question for you!')

answerer(recursionQuestion)
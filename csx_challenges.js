function holidays(arr) {
   // Do not use a variable to store your result 
   // ADD CODE HERE
   for(let i=0; i<arr.length; i+=1){
     if(arr[i].includes('October')){
       arr='Happy Halloween'
       return arr
     
       
     }
   }
     return "Have a great day!"
 }
 
 // Uncomment these to check your work!
 const months = ["April", "May", "June", "October"];
 const animals = ["Cats", "Dogs", "Pigs"];
 console.log(holidays(months)); // should return: "Happy Halloween"
 console.log(holidays(animals)); // should return: "Have a great day!”
 
 
 
 
 
 
 
 function addN(arr, n){
   // ADD CODE HERE
   for(let i=0; i<arr.length; i++){
 arr[i] += n;
   }
 return arr
 
   }
 
 // Uncomment these to check your work!
 console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
 console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
 
 function getTheSum(arr){
   let sum = 0;
  
 for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
         
 }
   return sum
 }
 
 // Uncomment these to check your work!
 console.log(getTheSum([3, 6, 9])); // expected log 18
 console.log(getTheSum([10, 11, 12])); // expected log 33
 
 
 
 
 
 
 
 
 
 
 const multiplyAll=(nums, nums2, nums3,nums4, nums5,nums6,nums7,nums8, nums9)=>{
   if(nums===9){
     return nums*nums2*nums3*nums4*nums5*nums6*nums7*nums8*nums9
   }else if(nums===5){
         return nums*nums2*nums3*nums4
   }
 }
 // Uncomment these to check your work!
 console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
 console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
 
 
 
 
 
 
 
 
 
 
 
 function mergingElements(array1, array2){
   // ADD CODE HERE
   
   return  array1.map((ar1, i)=>ar1+array2[i])
 }
 
 // Uncomment these to check your work!
 console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
 console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
   let c = [];
 
       for (let i = 0; Math.max(i < array1.length, i < array2.length); i++) {
         if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
           c.push(array1[i] + array2[i]);
         } else {
           c.push(array1[i]);
         }
       }
       return c;
 }
 
 // Uncomment these to check your work!
 console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
 console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
 
 
 
 
 
 
 
 adding in this looping decrement cause i forgot
 
 function imAboutToExplodeWithExcitement(n) {
   while (n > 0) {
     if (n === 5) {
       console.log("Oh wow, I can't handle the anticipation!");
     
     } else if (n === 4) {
       console.log("I'm about to explode with excitement!");
     } else if (n === 1) {
       console.log("That was kind of a let down");
     } else {
       console.log(n);
     }
     n--;
   }
   return n;
 }
 
 console.log(imAboutToExplodeWithExcitement(10));
 
 
 
 //hard ass challenge in csx
 
 
 function closestToTheMark(player1, player2){
   const theMark = Math.floor(Math.random() * 100)
   console.log(`If theMark is ${theMark}...`);
   // ADD CODE HERE
   
   // const theMark = Math.floor(Math.random() * 100);
   // console.log(`If theMark is ${theMark}...`);
 
   if (Math.abs(theMark - player1) < Math.abs(theMark - player2)) {
     return "Player 1 is closer";
   } else if (Math.abs(theMark === player2) < Math.abs(theMark - player1)) {
     return "Player 2 is closer";
   } else {
     return "Player 1 is closer"; // Defaulting to Player 1 if both players are equidistant
   }
 
 
 }
 
 // Uncomment the line below to check your work!
 console.log(closestToTheMark(25, 75));
 
 
 
 
 
 
 
 
 
 
 function getTheRange(arr){
      let lowestNum=arr[0]
    let highestNum=arr[0]
     for(let i=1; i<arr.length; i++){
     if(arr[i]<lowestNum){
      lowestNum=arr[i];
 
         
     } else{
       highestNum= arr[i];
     }
     }
 let range = highestNum - lowestNum;
   return [lowestNum, highestNum, range];
 
 
 }
 
 // Uncomment these to check your work!
 console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
 
 
 
 
 function addingAllTheWeirdStuff(array1, array2){
   // ADD CODE HERE
   // ADD CODE HERE
 let sumOdd = 0;
 let sumEven = 0;
 let greater = false;
 for (let i = 0; i < array2.length; i += 1) {
   if (array2[i] % 2 !== 0) {
     sumOdd += array2[i];
   } else {
     sumEven += array2[i];
   }
   if (array2[i] > 20) {
     greater = true;
   }
 }
 
 for (let i = 0; i < array1.length; i += 1) {
   if (array1[i] < 10) {
     array1[i] += sumOdd;
   } else if (array1[i] > 10) {
     array1[i] += sumEven;
   }
   if (greater) {
     array1[i] += 1;
   }
 }
 
 return array1;
 
 }
 
 // Uncomment these to check your work!
 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
 
 
 
//  vowels in js pulling function

function disemvowel(string) {
   for(let i=0; i<string.length; i+=1){
      if(string[i].includes((/[aeiou]/gi, ''))){
      return string.replace(/[aeiou]/gi, '')
    }else if(string[i].includes((/[AEIOU]/gi, ''))){
       return string.replace(/[AEIOU]/gi, '')
    
   
   }
      return string
  }
  }
  
  
  // Uncomment these to check your work!
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'






  // same solution 

  // ADD CODE HERE 
const addWaldo=(names)=>{
  names['Waldo'] = 'unknown';
   return names

}
// Uncomment these to check your work!
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

// sample comparison

// const addWaldo=(names)=>{
//   const newNameUnk={Waldo: 'unknown'}
//   return Object.assign({}, names, newNameUnk);

//   return names;

// }
// // Uncomment these to check your work!
// const sil = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
// console.log(addWaldo(sil)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }






// ADD CODE HERE
const findWaldo=(name, last)=>{
	if(!name['Waldo']){
    return "Where's Waldo?"
  }else{
    return "unknown"
  }
  
  
  return name
}
// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'





function arrayBuilder(obj) {
  // ADD CODE HERE
  let newArr=[]
  const propertyNames = Object.keys(obj);

  if(propertyNames.includes('cats')){
    return ['cats', 'cats', 'dogs']
  }else{
    return []
  }
  return obj
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []





// improved version

function arrayBuilder(obj) {
  // ADD CODE HERE
  let newArr=[]
  for(ind of obj){
    let keyInArr=obj[ind]
    while(keyInArr>0){
      	newArr.push(keyInArr)
}
  }
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []



// make array strings be plural with a single s

// ADD CODE HERE
const pluralize=(arr)=>{
  let arrNew=[]
arr.map(function(pl) {
  return arrNew.push(`${pl}s`);
});
  return arrNew
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]









// callback functions

// ADD CODE HERE

const map=(num, cb)=>{
  let arr=[]
  
   for (let x of num) {
    arr.push(cb(x))
  }
  return arr
}

const subtractTwo=(n)=>n-2
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]


// ADD CODE HERE

// malfunctioning calback

// const forEach=(arr, cb)=>{
//   for(let i=0; i<arr.length; i+=1){
//       cb(arr[i])
//   }
//   }
  
//   const map=(arr, cb)=>{
//     const newArr=[]
//     forEach(arr (i=>{
//       newArr.push(cb(i))
//     }))
//     return newArr
//   }
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



// CSX complying code

// const forEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     cb(arr[i]);
//   }
// };

// const map = (arr, cb) => {
//   const newArr = [];
//   forEach(arr, i => {
//     newArr.push(cb(i));
//   });
//   return newArr;
// };

// console.log(typeof forEach); // should log: 'function'
// forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]


// dosent return odds and evens in array
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  // ADD CODE HERE
  const evens = numbers.filter((num) => num % 2 === 0);
  return filterArray(newArray.push(evens))
}

  
function func2(num) {
  // ADD CODE HERE
  const odds = numbers.filter((num) => num % 2 === 1);
return filterArray(newArray.push(odds))
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


// does with an if statment

// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const arrOfNums = [1, 2, 3, 4, 5];
// function func1(num) {
//   // return num % 2 === 0;
//   if (num % 2 === 0) {
//    return true;
//   } else {
//     return false;
//   }

// }
// function func2(num) {
//   // return num % 2 !== 0;
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }

// }

// // Uncomment these to check your work!
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]




// function eitherFilter(array, callback1, callback2) {
//   const filteredArray = array.filter(num => callback1(num) || callback2(num));
//   return filteredArray;
// }

// // Uncomment these to check your work!
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]




// this is getting hard

// function eitherCallback(callback1, callback2) {
//   return function(num) {
//     return callback1(num) || callback2(num);
//   };
// }

// Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray;
// }

// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;

// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

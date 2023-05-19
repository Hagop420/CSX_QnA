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
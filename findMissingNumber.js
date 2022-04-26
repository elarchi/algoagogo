/*
Create a function called findMissingNumber which takes as an argument an array of values and returns the number missing on this array.
If the array doesn't have a missing number, return the next number of the higher value of the array.
------------------------------------------------------------
EXEMPLE
-------
findMissingNumber([1, 3, 5, 4]); // 2
findMissingNumber([6, 3, 4, 5, 2]); // 1
findMissingNumber([5, 3, 2, 1, 4]); // 6
The code must contain the function call and its execution.
------------------------------------------------------------
TIME: 10min
------------------------------------------------------------
*/

/*
TUESDAY-26-APRIL-2022
---------------------
*/

const findMissingNumber = (arr) => {
  console.log("arr:", arr);
  /*Let's sort the array in ascending order.*/
  const ascArr = arr;
  ascArr.sort((a, b) => {
    // console.log(`${a}-${b}`);
    // WARNING! On googleChrome, a=b and b=a. On Firefox, a=a and b=b.
    return a - b;
  });

  /*Let's select our maximal value of numbers.*/
  const iMaxVal = ascArr.length - 1;
  const maxVal = ascArr[iMaxVal];

  /*Let's create an array with all the numbers between those two intervals.*/
  const allNumbers = [];
  for (let i = 1; i <= maxVal; i++) {
    allNumbers.push(i);
  }

  /*Let's compare arr with allNumbers, and let's keep the numbers who are missing in arr in a new array.*/
  const missingNumbers = [];

  for (let i = 0; i < allNumbers.length - 1; i++) {
    if (arr.indexOf(allNumbers[i]) === -1) {
      missingNumbers.push(allNumbers[i]);
    }
  }

  /*Let's display the result!*/
  if (missingNumbers.length === 0) {
    console.log("the next number of the higher value of the array:", [
      maxVal + 1,
    ]);
  } else {
    console.log("missingNumbers:", missingNumbers);
  }
};

findMissingNumber([1, 3, 5, 4]);
findMissingNumber([6, 3, 4, 5, 2]);
findMissingNumber([5, 3, 2, 1, 4]);

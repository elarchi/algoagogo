//Write a function called bigFatRocket which displays the numbers from 1 to 87 but which displays the strings Big for a multiple of 3, Fat for a multiple of 5 and finally Rocket for a multiple of 3 and 5.
//Your code must contain function declaration and function execution.
//10 minutes

//MON 25 APR 2022
const bigFatRocket = () => {
  for (let i = 1; i < 88; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Rocket");
    } else if (i % 5 === 0) {
      console.log("Fat");
    } else if (i % 3 === 0) {
      console.log("Big");
    } else {
      console.log(i);
    }
  }
};
bigFatRocket();

//To find out if a number n1 is a multiple of a number n2, we find out if the remainder of the division of this number n1 by the number n2 of which it is potentially the multiple is zero. If the remainder is zero, our number n1 is indeed a multiple of the number n2.

const bigFatRocket = () => {
  //function declaration
  for (let i = 1; i < 88; i++) {
    // loop to display number from 1 to 87
    if (i % 3 === 0 && i % 5 === 0) {
      // in the case that the i-number is a multiple of 5 and 3
      console.log("Rocket");
    } else if (i % 5 === 0) {
      //in the case that the i-number is a multiple of 5
      console.log("Fat");
    } else if (i % 3 === 0) {
      //in the case that the i-number is a multiple of 3
      console.log("Big");
    } else {
      console.log(i); //in the case that the i-number isn't a multiple of 5 or 3
    }
  }
};

bigFatRocket(); // function's call

// 5min

// -------------------------------------------------------------------------------

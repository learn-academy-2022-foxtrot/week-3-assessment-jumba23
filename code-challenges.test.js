// describe("", () => {
//   it("", () => {
//     expect(()).toEqual();
//     expect(()).toEqual();
//     expect(()).toEqual();
//   });
// });

// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ===================================== CHALLENGE #1 =================================================

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// const fibLength3 = 1;
// Expected output: "1 in NOT greater than 2"

describe("fibSequenceNum", () => {
  it("The function takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6;
    const fibLength2 = 10;
    const fibLength3 = 1;
    expect(fibSequenceNum(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibSequenceNum(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
    expect(fibSequenceNum(fibLength3)).toEqual("1 in NOT greater than 2");
  });
});

//ReferenceError: fibSequenceNum is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// the function will take in a number that will essentially set the fibonacci array's length
//we need to create fibonacci array using simple formula or we can just copy an array from internet,
//we need to figure out what to do if number is not greater than 2.
// but that would be too easy.
//with each iteration new number (sum from previous iteration) will be pushed into our array
// the number of iterations will be determined by function call parameter.
//the function will return our array

const fibSequenceNum = (num) => {
  if (num > 2) {
    let fibArray = [];
    let num1 = 1,
      num2 = 1,
      nextNum;
    for (i = 1; i <= num; i++) {
      fibArray.push(num1);
      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }
    return fibArray;
  }
  return `${num} in NOT greater than 2`;
};

// test passed

// ===================================== CHALLENGE #2 =================================================

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

const studyMinutesWeek3 = {
  sunday: 100,
  monday: 10,
  tuesday: 200,
  wednesday: 260,
  thursday: -30,
  friday: -122,
  saturday: 65,
};

// Expected output: [-122, -30, 10, 65, 100, 200, 260]

describe("ascendingArray", () => {
  it("The function that takes in an object and returns an array of the numbers sorted from least to greatest", () => {
    expect(ascendingArray(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);
    expect(ascendingArray(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
    expect(ascendingArray(studyMinutesWeek3)).toEqual([
      -122, -30, 10, 65, 100, 200, 260,
    ]);
  });
});

//ReferenceError: ascendingArray is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
//we need a function that will take in an object and pull the desired values (numbers)
//since this is not an array, we  need to use Object.values function to access the values only
//we are going to chain .forEach function so we can iterate the obj elements. Each value/element will be pushed into our newArray, one at a time.
//the function will return sorted version of our new array

const ascendingArray = (obj) => {
  const newArray = [];
  Object.values(obj).forEach((val) => {
    newArray.push(val);
  });
  return newArray.sort((a, b) => a - b);
};

// test passed

// ===================================== CHALLENGE #3 =================================================

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = [];
// Expected output: []

// b) Create the function that makes the test pass.

describe("cumSumArray", () => {
  it("the function takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const accountTransactions1 = [100, -17, -23, -9];
    const accountTransactions2 = [250, -89, 100, -96];
    const accountTransactions3 = [];
    const accountTransactions4 = [0];
    expect(cumSumArray(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(cumSumArray(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(cumSumArray(accountTransactions3)).toEqual([]);
    expect(cumSumArray(accountTransactions4)).toEqual([0]);
  });
});

//ReferenceError: sumSumArray is not defined

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// the function will receive an array and return the array of same length. We can use .map to iterate
// we need to work on logic regarding calculations of our sum for each iteration and push into our new array
// we need to declare two variables and assign "0" to one of them to help with first .map iteration

const cumSumArray = (arr) => {
  const newArray = [];
  let sum;
  let prevNum = 0;

  arr.map((e) => {
    sum = e + prevNum;
    newArray.push(sum);
    prevNum = sum;
  });

  return newArray;
};

// test passed

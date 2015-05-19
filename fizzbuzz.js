/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr) {
    var sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]

    }
    return sum
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b) {

    return (a + b)
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

// function GCD(a, b) {

function GCD(num1, num2) {
    var result
    var LowerBound

    if (num1<=num2) {
        lowerBound = num1
    }
    
    else {
        lowerBound = num2
    }

    //conditional fail
    // for (var i = 0 ; i < lowerBound/2 ; i++) {

        //conditional pass
        for (var i = 1 ; i <= lowerBound/2 ; i++) {
        
     // (number1%2===0)%%(number2%2===0)

       if ((num1%i===0)&&(num2%i===0))
            result = i;

    };

    return result;
};
// GCD (10, 15)





console.assert(GCD(5, 1) === 1);
console.assert(GCD(15, 3) === 3);
console.assert(GCD(15, 5) === 5);
console.assert(GCD(50, 20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

// function LCM(a, b) {

    function LCM(num1, num2) {
    var result
    var lowerBound
    var lowestCommon = (num1 * num2)

    if (num1>=num2)
        lowerBound = num1
    else
        lowerBound = num2

    //conditional fail
    // for (var i = 1 ; i < lowerBound/2 ; i++) {

        //conditional pass
        for (var i = 1 ; i <= lowerBound/2 ; i++) {
        
     // (number1%2===0)%%(number2%2===0)

       if ((num1%i===0)&&(num2%i===0))
            result = i;

    };

    return (lowestCommon / result)
};


// YOUR CODE HERE


console.assert(LCM(10, 10) === 10)
console.assert(LCM(2, 5) === 10)
console.assert(LCM(3, 6) === 6)
console.assert(LCM(0, 1) === 1)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N) {
        // YOUR CODE HERE  
        for (i = 1; i <= 100; i++) {

            return (N)

        }

          if (N % 3 !== 0 && N % 5 !== 0) {
            console.log(".")

        } else if (N % 3 === 0) {
            console.log("..fizz")

        } else if (N % 5 === 0) {
            console.log("..buzz")

        } else if (N % 3 === 0 && N % 5 === 0) {
            console.log("..fizzbuzz")
        }
    }
    // console.assert(fizzbuzz(1) === ".")
    // console.assert(fizzbuzz(2) === "..")
    // console.assert(fizzbuzz(3) === "..fizz")
    // console.assert(fizzbuzz(5) === "..fizz.buzz")
    // console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzfizzbuzz")

// 1. Write a Program to reverse a string in JavaScript.
// ************************************************************************************************************************************
function run(ele) {
    return ele.split('').reverse().join('');
}
// console.log(run("sajid"));

// 2. Write a Program to check whether a string is a palindrome string.
// ************************************************************************************************************************************

function run1(params) {
    const rv = params.split('').reverse().join('');
    return rv == params ? "Is Palindrome" : "Not Palindrome"
}

// console.log(run1("sas"));


// 3. Find the largest number in an array in JavaScript.
// ************************************************************************************************************************************
function lgNum(params) {
    return Math.max(...params);
}
// console.log(lgNum([1,33,44,1,44,2]));

// 3. Find the second largest number in an array in JavaScript.
// ************************************************************************************************************************************
function lgNum2(params) {
    const ff = Math.max(...params);
    const newA = params.filter(el => el !== ff);
    return Math.max(...newA)
}
// console.log(lgNum2([1,33,44,1,44,2]));

// 4. How Remove the first element from an array in JavaScript?
// ************************************************************************************************************************************
function rmFirst(params) {
    return params.slice(1)
};
// console.log(rmFirst([1,4,2,3]));

// 4. How Remove the last element from an array in JavaScript?
// ************************************************************************************************************************************
function rmFirst2(params) {
    return params.slice(0, -1)
};
// console.log(rmFirst2([1,4,2,3]));

// 5. Write a Program to use a callback function?
// ************************************************************************************************************************************

function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

// fetchData(processData);




// 6. Write a code to create an arrow function?
// ************************************************************************************************************************************
const arrowFunction = (param) => {
    return `Hello, ${param}!`;
};
// console.log(arrowFunction("World"));


// 7. Write a Program to add a property to an object?
// ************************************************************************************************************************************
const addProperty = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
// 8. Write a Program to delete a property from an object?
// ************************************************************************************************************************************
const deleteProperty = (obj, key) => {
    delete obj[key];
    return obj;
};


// 15. Write a Program to find a sum of an array?
// ************************************************************************************************************************************
const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
// 16. Write a Program to check if a number is prime or not?
// ************************************************************************************************************************************
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
// 17. Write a Program to print  Fibonacci sequence up to n terms?
// ************************************************************************************************************************************
const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};
// 18. Write a Program to find factorial of a number?
// ************************************************************************************************************************************
const factorial = (n) => {
    if (n < 0) return "Factorial not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
// 19. Calculate the Power of a Number in JavaScript?
// ************************************************************************************************************************************

function PowerNumber(base, exponent) {
    return Math.pow(base, exponent);
}
// console.log(PowerNumber(2, 3));  // Output: 8


// 20. Write a Program to print the frequency of elements in an array?
// ************************************************************************************************************************************

function printfrequency(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
}

// console.log(printfrequency([1, 2, 2, 3, 4, 3, 2, 1, 5, 3]););



// 21. Write a Program to count the occurrences of a character in a string in JavaScript?
// ************************************************************************************************************************************


function occurrencesChecker(params) {
    return params.split('').filter(c => c.toLowerCase() === target.toLowerCase()).length;
}
let sentence98 = "JavaScript is amazing";
let target = "a";

// console.log(`'${target}' occurs ${occurrencesChecker(sentence98)} times`);


// 22. Write a Program to convert Celsius to Fahrenheit in JavaScript?
// ************************************************************************************************************************************

// °F = (°C × 9 / 5) + 32
// °C = (°F - 32) × 5 / 9

function ToCelsiusfahrenheit(fahrenheit) {
    let celsius = (fahrenheit * 9 / 5) + 32;
    return celsius;
}

// Example
let f2 = 98;
// console.log(`${f2}°F = ${ToCelsiusfahrenheit(f2).toFixed(2)}°C`);

// 23. Write a Program to convert Fahrenheit to Celsius in JavaScript?
// ************************************************************************************************************************************

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example
let f = 98;
// console.log(`${f}°F = ${fahrenheitToCelsius(f).toFixed(2)}°C`);


// 24. Write a Program to sort an array in Ascending Order in JavaScript?
// ************************************************************************************************************************************

function AscendingOrder(Arrays) {
    return Arrays.sort((a, b) => a - b);

}
// console.log(AscendingOrder([45, 90, 78, 32, 100]));  // Output: [32, 45, 78, 90, 100]


// 25. write a Program to sort an array in Descending Order in JavaScript?
// ************************************************************************************************************************************

function DescendingOrder(Arrays) {
    return Arrays.sort((a, b) => b - a);

}
// console.log(DescendingOrder([45, 90, 78, 32, 100]));  // Output: [100, 90, 78, 45, 32]

// 26. Write a Program to merge two arrays in JavaScript?
// ************************************************************************************************************************************

function arrayMerge(a, b) {
    return [...a, ...b];
}
// console.log(arrayMerge([10, 20, 30], [20, 30, 40]));  // Output: [10, 20, 30, 20, 30, 40]

// 27. Find the Intersection of Two Arrays in JavaScript?
// ************************************************************************************************************************************

function arrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// console.log(arrayIntersection([10, 20, 30], [20, 30, 40]));  // Output: [20, 30]


// 28. Find the Union of Two Arrays in JavaScript?
// ************************************************************************************************************************************

function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
// console.log(arrayUnion([10, 20, 30], [20, 30, 40]));



// 29. Check if a Number is Even or Odd in JavaScript?
// ************************************************************************************************************************************

function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// console.log(checkEvenOdd(10));  // Output: Even
// console.log(checkEvenOdd(11));  // Output: Odd



// 30. Write a Program to find the minimum value in an array in JavaScript?
// ************************************************************************************************************************************
let numbers12 = [10, 5, 20, 3, 15];

let minValue = Math.min(...numbers12);

// console.log(minValue);  // Output: 3


// 31. Check if a String Contains Another String in JavaScript?
// ************************************************************************************************************************************

let sentence22 = "I am learning JavaScript";

// console.log(sentence22.includes("learning"));  // true
// console.log(sentence22.includes("python"));    // false



// 32. Find the First Non-Repeated Character in a String in JavaScript?
// ************************************************************************************************************************************

let str2 = "aabbcdeff";

function firstNonRepeatedChar(s) {
    for (let char of s) {
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return char;
        }
    }
    return null;  // Agar sab repeat ho rahe ho to
}

// console.log(firstNonRepeatedChar(str2));  



// 33. Find the Longest Word in a String in JavaScript?
// ************************************************************************************************************************************
let sentence2 = "I am learning JavaScript programming";

let words = sentence2.split(" ");  // Words me tod diya

let longest = words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
}, "");

// console.log(longest);


// 34. Capitalize the First Letter of Each Word in a Sentence in JavaScript?
// ************************************************************************************************************************************

let sentence = "i am learning javascript";

let capitalized = sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");                   // Waapas join kar diya sentence me

// console.log(capitalized);



// 35. Convert an Array of Strings to Uppercase in JavaScript?
// ************************************************************************************************************************************

let cities = ["delhi", "mumbai", "pune"];

let upperCities = cities.map(city => city.toUpperCase());

// console.log(upperCities);


// 36. Write a Program to reverse an array in JavaScript?
// ************************************************************************************************************************************

function reverseArray(arr) {
    return arr.reverse();
}
// console.log(reverseArray([1, 2, 3, 4, 5]));

// Reverse Without Changing Original Array
let reversedArr = [...arr].reverse();  // Spread operator se copy banayi

// Manual Reverse Using Loop
let items = [100, 200, 300, 400];
let reversed = [];

for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
}

// console.log(reversed);  // [ 400, 300, 200, 100 ]

// 37. Get the last element of an array in JavaScript?
// ************************************************************************************************************************************
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let last = fruits[fruits.length - 1];
let lastNumber = fruits.at(-1);
// console.log(last);  // Output: Orange


// 38. Remove falsy Values from an array in JavaScript?
// ************************************************************************************************************************************

let mixedArray = [0, "Sajid", false, "", 42, null, "Hello", undefined, NaN];

let truthyArray = mixedArray.filter(Boolean);
let result = mixedArray.filter(x => x);

// console.log(truthyArray);


// 39. Calculate the factorial of a number using recursion in JavaScript?
// ************************************************************************************************************************************

function factorial(n) {
    // Base Case - Jab n 0 ya 1 ho to sidha 1 return karo
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive Call - apne aap ko call kar raha hai
        return n * factorial(n - 1);
    }
}

// Example
// console.log(factorial(5));  // Output: 120



// 42. Write a Program to create a simple class in JavaScript?
// ************************************************************************************************************************************

// Class Banana
class Person {

    // Constructor - jab bhi new object banta hai, ye auto chalta hai
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method - function jo class ke andar hota hai
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object Banana
let person1 = new Person("Sajid", 25);

// Method Call Karna
person1.greet();

// 43. Use JSON to parse and stringify data in JavaScript?
// ************************************************************************************************************************************
let user = {
    name: "Sajid",
    age: 25,
    city: "Delhi"
};

let jsonString = JSON.stringify(user);
let userObj = JSON.parse(jsonData);
// 44. Convert a string to an array of words in JavaScript?
// ************************************************************************************************************************************

let str = "I am learning JavaScript";

let wordsArray = str.split(" ");

// console.log(wordsArray);



// 45. Write a switch statement code in JavaScript?
// ************************************************************************************************************************************

let day = 3;

switch (day) {
    case 1:
        // console.log("Monday");
        break;

    case 2:
        // console.log("Tuesday");
        break;

    case 3:
        // console.log("Wednesday");
        break;

    case 4:
        // console.log("Thursday");
        break;

    case 5:
        // console.log("Friday");
        break;

    case 6:
        // console.log("Saturday");
        break;

    case 7:
        // console.log("Sunday");
        break;

    default:
    // console.log("Invalid day number");
}

// 46. Check if Two Strings are Anagrams or not in JavaScript?
// ************************************************************************************************************************************
const isAnagram = (a, b) => a.split('').sort().join('') === b.split('').sort().join('');

//   console.log(isAnagram("listen", "silent")); // true
//   console.log(isAnagram("hello", "world"));   // false


// 47.  Find the maximum difference between two numbers in an array  in JavaScript?
// ************************************************************************************************************************************
const maxDiff = arr => Math.max(...arr) - Math.min(...arr);
// console.log(maxDiff([2, 10, 3, 1])); // 9

// 48.  Remove Duplicates from an Array in JavaScript?
// ************************************************************************************************************************************
const removeDuplicates = arr => [...new Set(arr)];
// console.log(removeDuplicates([1, 2, 3, 1, 2, 4]));

// 49. Count Vowels in a String in JavaScript?
// ************************************************************************************************************************************
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
// console.log(countVowels("sAjid khan"));

// 50. Get Unique Characters from a String in JavaScript?
// ************************************************************************************************************************************
const uniqS = str => [...new Set(str)].join('');
// console.log(uniqS("sajid khan"));



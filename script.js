
/* Given an array of objects, each containing a name property, how would you sort the array alphabetically by the name property */
const data = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Edward", age: 40 },
  { name: "Diana", age: 28 },
]

function sortWithKeyName(key) {
  if (key === "name") {
    return data.sort((a, b) => a[key].localeCompare(b[key]))
  }
  else if (key === 'age') {
    return data.sort((a, b) => a[key] - b[key])
  }
}

console.log(sortWithKeyName("name"))
console.log(sortWithKeyName("age"))

/* Capitalize the first letter of each name in an Array? */

const names = ["alice", "bob", "charlie", "diana", "edward"];


function makeFirstLetterUppercase(arr) {
  return arr.map((val) => {
    return val[0].toUpperCase() + val.slice(1)
  })
}

console.log(makeFirstLetterUppercase(names))

/* How would you flatten a nested array (of arbitrary depth) into a single-level array using JavaScript? */

const input1 = [1, [2, [3, [4]], 5]];
const input2 = [1, [2, [3, [4, [5, [6]]]]]];

console.log(input1.flat(Infinity))
console.log(input2.flat(Infinity))

/* Given a string, write a function to reverse the order of words while keeping the original order of characters within each word. */

const strInput = "JavaScript is awesome";

console.log(strInput.split(" ").reverse().join(" "))

/* Write a function that takes an object and returns a new object with all keys converted to camelCase. */

const obj = { 'alreadyCamelCase': true, 'ANOTHER_key': 'value', 'mixed_example-key': 42 }

function camelCasetheKey(object) {
  const obj = {};
  for (const key in object) {
    const newKeyName = key.split(/[-_]/)
    if (newKeyName.length > 1) {
      const newVal = newKeyName.map((val, index) => {
        if (index == 0) {
          return val.toLowerCase()
        }
        return val[0].toUpperCase() + val.slice(1)
      }).join("");
      obj[newVal] = object[key]
    } else {
      obj[newKeyName] = object[key]
    }
  }
  return obj
}

console.log(camelCasetheKey(obj))

/* How would you implement a function to group an array of objects by a specific key? */

const newInput = [{ id: 1, category: 'A', value: 10 }, { id: 2, category: 'B', value: 20 }, { id: 3, category: 'A', value: 30 }, { id: 4, category: 'C', value: 40 }]
const newKey = 'category'

function groupWithSpecificKey() {
  const newArr = {};
  newInput.forEach((val) => {
    if (newArr[val.category]) {
      newArr[val.category].push(val)
    } else {
      newArr[val.category] = [val]
    }
  })

  return newArr
}

console.log(groupWithSpecificKey())


/* Given an object with nested properties, write a function to deeply clone the object */

const deepCloneObj = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    moreInfo: {
      landmark: "near temple"
    }
  },
  hobbies: ["reading", "chess"],
  flat: undefined,
  job: null
};


function deepCloneObjFunction(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCloneObjFunction)
  }

  const clone = {}

  for (const key in obj) {
    clone[key] = deepCloneObjFunction(obj[key])
  }

  return clone
}

const newObj = deepCloneObjFunction(deepCloneObj)

deepCloneObj.hobbies = {}
deepCloneObj.flat = "new flat"

console.log(newObj)


/* How would you check if two arrays contain the same elements, regardless of order, with no duplicates? */

const arrInput1 = [1, 2, 3, 4];
const arrInput2 = [4, 3, 2, 5];


function checkforDuplicates(arr1, arr2) {
  const newArr1 = Array.from(new Set(arr1)).sort((a, b) => a - b)
  const newArr2 = Array.from(new Set(arr2)).sort((a, b) => a - b)

  if (newArr1.length !== newArr2.length) {
    return false
  }

  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false
    }
  }

  return true

}

console.log(checkforDuplicates(arrInput1, arrInput2))


/* 
Write a JavaScript program to calculate the factorial of a given number.

Input: n = 5 
Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120


Input: n = 0
Output: 1


Input: n = 1
Output: 1
*/


const number = 4;

function factorialOfnumber(num) {
  if (num === 0 || num === 1) {
    return 1
  }

  const arr = []

  for (let i = num; i > 0; i--) {
    arr.push(i)
  }

  return arr.reduce((prev, curr) => prev * curr)
}


console.log(factorialOfnumber(number))
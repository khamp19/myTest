//Do not change any of the function names
var math = require('mathjs');
function multiplyByTen(num) {
  var product = num * 10;
  return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
    var subtract = num - 5;
    return subtract;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
    if (str1.length === str2.length){
        return true;
    }
  //otherwise return false
    return false;
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
    if (x ===y){
        return true;
    }
    return false;
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  //return true if num is less than ninety
    if (num < 90){
        return true;
    }
    return false;
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
    if (num > 50){
        return true;
    }
    return false;
  //otherwise return false
  //code here
}

function add(x, y) {
    var sum = x + y;
    return sum;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
    var subtract = x - y;
    return subtract;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
    var divide = x/y;
    return divide;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
    var product = x * y;
    return product;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
    var remain = x % y;
    return remain;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
    if (num % 2 === 0){
        return true;
    }
    return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
    if(num % 2 ===0){
        return false;
    }
    return true;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
    var square = math.square(num);
    return square;
  //square num and return the new value
  //code here
}

function cube(num) {
    var cube = math.cube(num);
    return cube;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
    var toPower = math.pow(num, exponent);
    return toPower;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
    var round = math.round(num);
    return round;
  //round num and return it
  //code here
}

function roundUp(num) {
    var roundUp = math.ceil(num);
    return roundUp;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
    var addEx = str + '!';
    return addEx;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return fullName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
    var greet = 'Hello ' + name +'!';
    return greet;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
    var retArea = length * width;
    return retArea;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
    var triArea = .5 * (base * height);
    return triArea;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
    var circArea = math.round(math.PI * math.square(radius));
    return circArea;
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
    var volume = length * width * height;
    return volume;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};

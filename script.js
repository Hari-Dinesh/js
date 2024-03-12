// let name="mr \"dinesh\""
// console.log(name)
//functions and the subrountines
function makecofe(sugar, milk) {
  var instruction = "Boil the cofee";
  instruction += "add " + sugar + "spoons of sugar";
  instruction += "add" + milk + "cups of milk";
  return instruction;
}
makecofe(2, 4);
// objects and the arrays
var car = {
  name: "volvo",
  model: 4,
  decs: {
    speed: 130,
    modeltypes: ["type1", "type2", { max: "good" }, ["make", "making"]],
  },
  ride: function () {
    return maxSpeedAlter;
  },
};
// console.log(car.decs.modeltypes[3][1]);
//console.log(car.decs);
var arra = [
  { name: "new Car", mode: 4 },
  { obj: ["type", 1, 2, 3] },
  function () {
    return good;
  },
];

let num = [1, 2, 3, "din", "njne"];
//num.shift()
//num.pop()
//num.unshift("name","make")
function nam(name) {
  let na = name;
  return na;
}
//scope and the clousor
// For Loop
// console.log("For Loop:");
for (let i = 0; i < 5; i++) {
  // console.log("Iteration " + i);
}

// While Loop
let count = 0;
while (count < 5) {
  // console.log("Count: " + count);
  count++;
}

// Do-While Loop
// console.log("\nDo-While Loop:");
let x = 0;
do {
  // console.log("Value of x: " + x);
  x++;
} while (x < 5);

// If Statement
// console.log("\nIf Statement:");
let number = 10;
if (number > 0) {
  // console.log("Number is positive");
}

// If-Else Statement
// console.log("\nIf-Else Statement:");
let number2 = -5;
if (number2 > 0) {
  // console.log("Number is positive");
} else {
  // console.log("Number is non-positive");
}

// If-Else If-Else Statement
// console.log("\nIf-Else If-Else Statement:");
let number3 = 0;
if (number3 > 0) {
  // console.log("Number is positive");
} else if (number3 < 0) {
  // console.log("Number is negative");
} else {
  // console.log("Number is zero");
}

// Switch Statement
// console.log("\nSwitch Statement:");
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Invalid day";
}
// console.log("Day is: " + dayName);

document.getElementById("heading").innerText = "Not Only This";

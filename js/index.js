console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Pip";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Pip";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driverName = "";
let navName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName + hacker1[i].toUpperCase() + " ";
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  navName += hacker2[i];
}
console.log(navName);

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first. ");
} else if (hacker2.localeCompare(hacker1) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

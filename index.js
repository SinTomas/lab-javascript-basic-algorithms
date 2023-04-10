// Iteration 1: Names and Input

let hacker1 = "Tomás";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Roshan";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName.trimEnd());

let reverseNavName = "";
for (let i = hacker2.length -1; i>=0; i--) {
    let char = hacker2[i];
    reverseNavName += char;
}

console.log(reverseNavName);


let result = hacker1.localeCompare(hacker2);
  if (result === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else if (result === -1){
    console.log("The driver's name goes first.");
}  else{
    console.log("What?! You both have the same name?");
}





let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sem quis massa varius, id volutpat orci sagittis. Nam porttitor sodales hendrerit. Nullam vel purus eget lacus fermentum aliquam. Proin dictum dui sit amet eros pretium, sed eleifend purus suscipit. Curabitur dignissim volutpat lobortis. Curabitur rhoncus at ligula et varius. Cras hendrerit metus a lorem bibendum varius. Morbi sit amet tellus vel massa scelerisque sagittis. Pellentesque eget malesuada est, a ultrices enim. Aliquam eu eleifend purus.
Nullam ante ante, vestibulum quis imperdiet sit amet, gravida id nisl. Curabitur vitae suscipit est. Phasellus dictum in velit vel scelerisque. Fusce tempus lobortis risus ac posuere. Praesent maximus enim sapien, semper mollis magna faucibus vitae. Pellentesque vel condimentum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a ullamcorper quam. Donec vestibulum varius dolor, gravida commodo augue volutpat rhoncus.
Vestibulum dignissim dignissim ligula, auctor blandit nisl luctus scelerisque. Duis id enim congue, feugiat tortor a, elementum metus. Ut non erat at lectus eleifend tristique. Suspendisse sodales interdum arcu sed congue. Maecenas non consectetur sapien. Sed at imperdiet ex. Donec et auctor magna. Duis ultricies lectus odio, sed auctor sapien viverra in. Aenean viverra, velit ac euismod porta, metus lectus consequat mi, a placerat velit justo vel ligula. In pulvinar eros urna, in imperdiet sem dignissim sed. Phasellus vulputate tincidunt ante sed hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;

let totalWords = 0;
for (let i = 0; i<longText.length; i++) {

if (longText[i] === " ") {
totalWords ++;
}
}
console.log(totalWords);

let count = 0;
 
for (let i = 0; i <longText.length; i++) {
  let twoChars = longText[i] + longText[i + 1];
 
  if (twoChars === "et") {
    count++;
  } 
}

console.log(count);


let phraseToCheck = "Palindrome";
let firstHalf = phraseToCheck.slice(0,5);
let secondHalf = phraseToCheck.slice(5,10);
let reverseSecondHalf = "";

for (let i = secondHalf.length -1; i>=0; i--) {
    let charPhraseToCheck = secondHalf[i];
    reverseSecondHalf += charPhraseToCheck;
}
if (reverseSecondHalf === firstHalf) {
    console.log("It's a Palindrome!");
} else {
    console.log("It's not a Palindrome!");
}
// Data Type : String Methad and properties

const employeeName=new String ("Shivanand");
const employeeLastName= String("Hatte")

console.log(employeeName );
console.log(employeeLastName);
console.log(typeof(employeeLastName));


const lengthText=employeeName.length;
console.log(lengthText);
console.log(employeeName.length);


const indexOfText =employeeName.indexOf("n");
console.log(indexOfText);
console.log(employeeName.indexOf("n"));   // indexof will work on first char 
console.log(employeeName.indexOf("s"));   //if char is not available in string... output will be -1


const toUpperCaseText=employeeName.toUpperCase();
console.log(toUpperCaseText);


const charAtText= employeeName.charAt(3);
console.log(charAtText);


console.log(employeeName +" "+ employeeLastName);

console.log(`Using an index of ${employeeName} the character returned is ${employeeName.at(employeeName)}`);

console.log(`${employeeName}`);

console.log(employeeName.replace(employeeName,"Shiva")); 

const str ="apple, banana, mango"
const fruits=str.split('-');
console.log(employeeName.split(''));
console.log(fruits);


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// ********************************************************************************************
// String.prototype.matchAll()
const text = "John Doe (johndoe@example.com) and Jane Smith (janesmith@example.com)";
const pattern = /(\w+)@(\w+\.\w+)/g;
const matches = text.matchAll(pattern);

for (const match of matches) {
  console.log(`Full match: ${match[0]}`);
  console.log(`Username: ${match[1]}`);
  console.log(`Domain: ${match[2]}`);
}
// *******************************************************************************************
// String.prototype.normalize()
const string = "cœur"; // The "e" has a combining mark
const normalized = string.normalize("NFC");
console.log(normalized); // Output: "cœur" (with a single chara
// *****************************************************************************************

// String.prototype.padEnd()
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(50, '*'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(10));
// Expected output: "200  "














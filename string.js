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












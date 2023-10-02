<h2>String in JavaScript</h2>
In JavaScript, a string is a data type used to represent a sequence of characters. Strings can contain letters, numbers, symbols, and whitespace. You can create strings in JavaScript by enclosing text within either single quotes (') or double quotes ("). Here are some examples:

let singleQuotedString = 'This is a single-quoted string.';
let doubleQuotedString = "This is a double-quoted string.";

Both single-quoted and double-quoted strings are equivalent in JavaScript, and you can use either style based on your preference. Here are some common operations and manipulations you can perform with strings in JavaScript:

In JavaScript, strings are primitive data types, which means they do not have properties like objects do. However, you can access various string-related properties and methods by treating a string as an object, thanks to JavaScript's automatic type coercion. Here are some commonly used string-related properties and methods:

<h3>String Properties:</h3>

length: Returns the number of characters in the string.

let str = 'Hello, World!';
console.log(str.length); // Output: 13


<h3>String Methods:</h3>

charAt(index): Returns the character at the specified index in the string.

let str = 'Hello';
console.log(str.charAt(1)); // Output: 'e'



charCodeAt(index): Returns the Unicode value (integer code) of the character at the specified index.

let str = 'A';
console.log(str.charCodeAt(0)); // Output: 65 (Unicode value for 'A')



toUpperCase(): Converts the string to uppercase.



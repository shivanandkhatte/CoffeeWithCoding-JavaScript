<h2>String in JavaScript</h2>
In JavaScript, a string is a data type used to represent a sequence of characters. Strings can contain letters, numbers, symbols, and whitespace. You can create strings in JavaScript by enclosing text within either single quotes (') or double quotes ("). Here are some examples:

let singleQuotedString = 'This is a single-quoted string.';
let doubleQuotedString = "This is a double-quoted string.";


const employeeName=new String ("Shivanand");
console.log(`${employeeName}`);

Both single-quoted and double-quoted strings are equivalent in JavaScript, and you can use either style based on your preference. Here are some common operations and manipulations you can perform with strings in JavaScript:

In JavaScript, strings are primitive data types, which means they do not have properties like objects do. However, you can access various string-related properties and methods by treating a string as an object, thanks to JavaScript's automatic type coercion. Here are some commonly used string-related properties and methods:

<h3>String Properties:</h3>

length: Returns the number of characters in the string.
let str = 'Hello, World!';
console.log(str.length); // Output: 13


<h3>String Methods:</h3>
<h4>String.prototype.methodName()</h4>
---------------------------------------------------------
charAt(index): Returns the character at the specified index in the string.

let str = 'Hello';
console.log(str.charAt(1)); // Output: 'e'
---------------------------------------------------------
charCodeAt(index): Returns the Unicode value (integer code) of the character at the specified index.

let str = 'A';
console.log(str.charCodeAt(0)); // Output: 65 (Unicode value for 'A')
---------------------------------------------------------
codePointAt(index):The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.

const icons = '☃★♲';
console.log(icons.codePointAt(1));
// Expected output: "9733"
---------------------------------------------------------
concat(): The concat() method in JavaScript is used to combine two or more strings and create a new string as a result. It does not modify the original strings; instead, it returns a new string that is the concatenation of the input strings. Here's the basic syntax of the concat() method:

string.concat(string1, string2, ..., stringN);

let str1 = 'Hello';
let str2 = ' ';
let str3 = 'World';

let result = str1.concat(str2, str3); // Concatenate the three strings
console.log(result); // Output: 'Hello World'
---------------------------------------------------------
endsWith():The String.prototype.endsWith() method in JavaScript is used to check whether a string ends with a specified substring or characters. It returns a boolean value (true or false) indicating whether the string ends with the specified substring. Here's the basic syntax of the endsWith() method:

string.endsWith(searchString[, length]);

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
---------------------------------------------------------
The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.

console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="
---------------------------------------------------------
The String.fromCodePoint() static method returns a string created from the specified sequence of code points.

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"
---------------------------------------------------------
The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"
---------------------------------------------------------
The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

isWellFormed()
---------------------------------------------------------
The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// Expected output: "The index of the first "dog" from the end is 52"
---------------------------------------------------------
The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0
---------------------------------------------------------
The String.prototype.match() method in JavaScript is used to search a string for a specified pattern and return an array of all matches found. This method is typically used with regular expressions but can also accept a string as its argument. Here's the basic syntax:
string.match(regexp);

string: The string you want to search within.
regexp: A regular expression pattern or a string to be treated as a regular expression.
The match() method returns an array of matches if it finds any, or null if no matches are found. If the regular expression has the global flag (g), it will return an array of all matches; otherwise, it returns an array containing the first match and some additional information.

Here are some examples of using match():

Using a Regular Expression to Find All Matches:

const text = "The quick brown fox jumps over the lazy dog";
const pattern = /o/g;
const matches = text.match(pattern);

console.log(matches); // Output: ["o", "o", "o"]

Using a Regular Expression to Capture Groups:

const text = "John Doe (johndoe@example.com) and Jane Smith (janesmith@example.com)";
const pattern = /(\w+)@(\w+\.\w+)/g;
const matches = text.match(pattern);

console.log(matches); // Output: ["johndoe@example.com", "janesmith@example.com"]
---------------------------------------------------------
The String.prototype.matchAll() method is used to search a string for all matches of a specified regular expression and return an iterator containing all the match results, including capturing groups. This method was introduced in ECMAScript 2020 (ES11).

Here's the basic syntax of the matchAll() method:

string.matchAll(regexp);

string: The string you want to search within.
regexp: A regular expression pattern to search for.
The matchAll() method returns an iterator, which you can use to iterate over all the matches found in the string. Each iteration yields a match object that contains information about the match, including the matched text and any capturing groups.

Here's an example of how to use matchAll():

const text = "John Doe (johndoe@example.com) and Jane Smith (janesmith@example.com)";
const pattern = /(\w+)@(\w+\.\w+)/g;
const matches = text.matchAll(pattern);

for (const match of matches) {
  console.log(`Full match: ${match[0]}`);
  console.log(`Username: ${match[1]}`);
  console.log(`Domain: ${match[2]}`);
}

In this example, matchAll() is used to find all email addresses in the given text using a regular expression with capturing groups. The matches iterator is then used in a for...of loop to iterate over each match and extract information from the capturing groups.

The matchAll() method is particularly useful when you need to work with multiple matches and their capturing groups in a more structured way. It provides a convenient and powerful way to extract information from text using regular expressions.
---------------------------------------------------------
The String.prototype.normalize() method in JavaScript is used to normalize Unicode strings, ensuring that they are in a consistent and standardized form. Unicode normalization is especially important when dealing with text data that may contain characters with different representations, such as combining characters or different forms of accented characters.

Here's the basic syntax of the normalize() method:
string.normalize([form]);

string: The string you want to normalize.
form (optional): A string that specifies the Unicode normalization form to use. This parameter can have one of the following values:
"NFC" (Normalization Form Canonical Composition): This form composes characters and combining marks to create a single character where possible. It's suitable for most text comparisons and storage.
"NFD" (Normalization Form Canonical Decomposition): This form decomposes characters with combining marks into separate characters. It's useful for certain types of text processing.
"NFKC" (Normalization Form Compatibility Composition): This form composes characters and combining marks to their compatibility equivalents, which can be useful for compatibility and legacy data.
"NFKD" (Normalization Form Compatibility Decomposition): This form decomposes characters to their compatibility equivalents.
The normalize() method returns a new string that represents the normalized version of the input string. It does not modify the original string.

Here's an example of using normalize() to normalize a string:

const string = "cœur"; // The "e" has a combining mark
const normalized = string.normalize("NFC");
console.log(normalized); // Output: "cœur" (with a single character for "e" with an accent)

In this example, the input string contains the character "e" with a combining mark. By applying NFC normalization, the method composes these characters into a single character representing "e" with an accent, which is the normalized form.

Unicode normalization is particularly important when working with international text data and is often used to ensure consistency when comparing or processing strings.
---------------------------------------------------------
The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "
---------------------------------------------------------
The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"
---------------------------------------------------------
The String.raw() method in JavaScript is a static method that is used to get the raw string form of template literals, without any escape sequences being interpreted. It can be helpful when you want to work with strings that may contain backslashes or other escape characters and you want to preserve them exactly as they are.

Here's the basic syntax of the String.raw() method:
String.raw(templateStrings, ...substitutions);

templateStrings: An array of strings that represents the template literal parts.
substitutions: Optional template literal substitution values.
The String.raw() method returns a string where escape sequences within the templateStrings are not processed, and backslashes are not interpreted as escape characters. It effectively treats the input as raw text.

Here's an example of how to use String.raw():
const path = String.raw`C:\Users\John\Desktop\MyApp`;

console.log(path); // Output: "C:\\Users\\John\\Desktop\\MyApp"

In this example, the String.raw() method is used to create a raw string representing a file path. Without String.raw(), the backslashes would be treated as escape characters, but String.raw() preserves them as-is.

You can also use String.raw() with template literals and substitution values:

const username = "John";
const message = String.raw`Hello, ${username}!\nWelcome to our website.`;

console.log(message);
// Output:
// "Hello, John!\nWelcome to our website."


In this case, the \n sequence within the template literal is preserved as-is because of String.raw(), even though it would normally be interpreted as a newline character.

String.raw() can be useful in scenarios where you need to work with strings that contain escape sequences, regular expressions, or any content where backslashes should be treated as literal characters.
---------------------------------------------------------
The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
---------------------------------------------------------
The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."
---------------------------------------------------------
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
---------------------------------------------------------
The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
---------------------------------------------------------
The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
---------------------------------------------------------
The toString() method of String values returns this string value.

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
---------------------------------------------------------
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
---------------------------------------------------------
The valueOf() method of String values returns this string value.
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
---------------------------------------------------------
toUpperCase(): Converts the string to uppercase.

let str = 'Hello';
console.log(str.toUpperCase()); // Output: 'HELLO'
---------------------------------------------------------
toLowerCase(): Converts the string to lowercase.
let str = 'World';
console.log(str.toLowerCase()); // Output: 'world'
---------------------------------------------------------
indexOf(substring): Returns the index of the first occurrence of the specified substring in the string. Returns -1 if not found.
let str = 'Hello, World!';
console.log(str.indexOf('World')); // Output: 7
---------------------------------------------------------
lastIndexOf(substring): Returns the index of the last occurrence of the specified substring in the string. Returns -1 if not found.
let str = 'Hello, World!';
console.log(str.lastIndexOf('l')); // Output: 10
---------------------------------------------------------
substring(startIndex, endIndex): Returns a substring starting from the startIndex (inclusive) to the endIndex (exclusive).
let str = 'Hello, World!';
console.log(str.substring(7, 12)); // Output: 'World'
---------------------------------------------------------
slice(startIndex, endIndex): Similar to substring, it returns a substring, but endIndex can be negative to count from the end of the string.
let str = 'Hello, World!';
console.log(str.slice(7, -1)); // Output: 'World'
---------------------------------------------------------
replace(oldSubstring, newSubstring): Replaces the first occurrence of oldSubstring with newSubstring in the string.
let str = 'Hello, World!';
console.log(str.replace('World', 'Universe')); // Output: 'Hello, Universe!'
---------------------------------------------------------
replaceAll(oldSubstring, newSubstring): The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
---------------------------------------------------------





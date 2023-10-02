// Description:

// Given a string, you need to write a method that order every letter in this string in ascending order.

// Also, you should validate that the given string is not empty or null. If so, the method should return:

// "Invalid String!"

// Notes
// • the given string can be lowercase and uppercase.
// • the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
// Examples

// "hello world" => " dehllloorw"
// "bobby"       => "bbboy"
// ""            => "Invalid String!"
// "!Hi You!"    => " !!HYiou"

// Good luck! Hope you enjoy it

// My solution:
const orderWord = (s) => s ? s.split('').sort().join('') : "Invalid String!";

/*
params: "s" as a string
ret: "s" sorted alphabetically
ex:
orderWord("Hello, World!"), " !,HWdellloor"
orderWord("bobby"), "bbboy"

check if s is not empty
split the string into an array of letters
sort it
join and return the string
*/
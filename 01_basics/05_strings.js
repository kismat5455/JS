//string literal
let string1="literal string";

//string object
let string2=new String("string object")

console.log(string1);
console.log(`${string2}`);//using backticks is new way called string interpolation 

//note:use string interpolation whenever you are concatenating this improves code readability

console.log(`concatanating two string together ${string1} and  ${string2}`)

//there are various methods in strings that might be useful

console.log(string2.charAt(3));
console.log(string2.length);

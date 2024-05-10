//""===" this checks the data type of two operators

let value1=1111;
let value2="1111";

console.log(value1===value2);//this will always give false if we have two different operators with different data types

value2=1111;

console.log(value1===value2);//true


//never do comparisions that are of differnet data types..it will produce different outcomes than expected

value2="1111s";
console.log(value1>=value2);

//other comparision work as expected so make sure to use '===' for equality and make sure operators are of same data types >=,<=,!=


let value=1234;
console.log(typeof(value));//number

//to convert to string type
value=String(value);
console.log(value);//string

//note: you need to be aware as always the values you pass will not be something you want
//example
value="355A";
value=Number(value);//even though value will be converted to number type,its actual value is Nan
console.log(value);
console.log(typeof value);


//always focus on code readability
//don't do something like this
console.log(1+"aa"+2);

//note :use  proper brackets for the above operation as JS does not do what you intended it for you to do


//postfix and prefix

value=1;
console.log(++value);//output:2
console.log(value++);//output:2 not three
console.log(value);//output:3
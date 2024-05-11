//Dates

let date1=new Date();
console.log(date1);

console.log(date1.getMilliseconds());

console.log(date1.toDateString());

console.log(date1.toLocaleString());

date1=new Date(2022,0,22)

console.log(date1);

//to overide default behaviour of methods

Date.prototype.toLocaleString = function() {
    
    return "ssss"
  }

console.log(date1.toLocaleString());
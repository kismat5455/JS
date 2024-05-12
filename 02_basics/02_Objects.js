// objects can be created two ways:
// 1. singleton through constructor --> Object.create
// 2.literals


const sym=Symbol()

const Juser={
    name:"Harry",
    email:"harry@gmail.com",
    [sym]:"key1222",
    address:"2022 ABDSDSD",
    netWorth:2222
}

console.log(Juser[sym]);
console.log(Juser.name);

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");


//freeze object--->this will prevenet any further changes to 
//Object.freeze(Juser);

//adding a function

Juser.welcome=function(){
    console.log("Welcome to this world!!!!");
}


Juser.welcome();

//array of objects..usually comes from databases

let usersData=[
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 30,
      "city": "Toronto"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "age": 25,
      "city": "Vancouver"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bobjohnson@example.com",
      "age": 40,
      "city": "Montreal"
    }
  ]

  console.log(usersData[0]);
  console.log(usersData[0].name);

  //some useful methods
  console.log(Object.keys(Juser));
  console.log(Object.values(Juser));
  console.log(Object.entries(Juser));

  //nesting objects
  const userData = {
    id: 1,
    name: "John Doe",
    contact: {
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: {
        street: "123 Main St",
        city: "Toronto",
        province: "Ontario",
        country: "Canada"
      }
    },
    interests: {
      hobbies: ["reading", "hiking", "coding"],
      sports: ["basketball", "tennis", "soccer"]
    }
  };

  //to access nestec objects using chaining and make sure to use "? "--> used for if exits for good practise
  console.log(userData.contact?.address?.city);

  //to check if object has any property
  console.log(userData.hasOwnProperty("contact"));


  //object de-structuring-->will be useful in react
  const {name:n}=Juser;
  console.log(n);

  //basic introduction of API

  //API usually comes in either {} or[
  //   {} ,{}
  // ]
  //json formats

"use strict";  //treat all JS code as newer version

//alert("Hey")  //we are using node.js not browser

console.log(3+3)
console.log("HEY,GOOD MORNING")

let name = "Mansi"             //string =>"" 
let age = 19                   //number 2 to power 53  //bigint
let isLoggedIn = false         //boolean =>true/false  
let state;                     //undefined   
let temperature = null         //null =>standalone value 

//symbol => unique

//object
console.log(typeof undefined);   //undefined
console.log(typeof null);     //object


//*************DataTypes Summary***************//

//Primitive

// 7 types  : String, Number , Boolean, null, undefined, Symbol,Bigint

const score = 100
const scorevalue = 100.3
const isLogIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);   //false

const bignumber = 986436925776n

//Reference (Non Primitive)
//Array , Object , Functions

const subjects = ["Physics","Chemistry","Maths"];
let myobj = {
    name:"Sushree",
    age: 19
}

const myfun = function(){
    console.log(" Hey Sushree");
}

console.log(typeof subjects);   //object
console.log(typeof myobj);      //object
console.log(typeof myfun);      //function
console.log(typeof id);        //symbol
console.log(typeof anotherId); //symbol


//stack (Primitive) , Heap (Non Primitive)

let myname = "sushree"
let anotherName = myname
anotherName = "sangeeta"

console.log(myname);
console.log(anotherName);

let user1 ={
   email: "sushree@gmail.com",
   upi: "user@ybl"
}

let user2 = user1

user2.email = "sangeeta@gmail.com"
console.log(user1);
console.log(user2);

 //stack -> changes commit in copy
 //heap -> changes commit in reference
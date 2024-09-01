let score = null
console.log(typeof score);          //object
console.log(typeof (score));        //object

let valueInNumber = Number(score)
console.log(typeof valueInNumber);    //number
console.log(valueInNumber);           //0 




let score2 = "ab94"
console.log(typeof score2);         //string
console.log(typeof (score2));       //string

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);  //number
console.log(valueInNumber2);         //NaN  -> not a number 

let score3 = "98"
console.log(typeof score3);          //string 
console.log(typeof (score3));        //string

let valueInNumber3  = Number(score3)
console.log(typeof valueInNumber3);   //number 
console.log(valueInNumber3);          //98

let isloogedIn = "Sushree"
let booleanIsloogedIn = boolean(isloogedIn)
console.log(booleanIsloogedIn);

//true =>1 ; false =>0
//"" => false
//"Sushree" =>true




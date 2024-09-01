const accountId = 14432
let accountEmail = "MysticPersona.com"
var accountPassword = "pswd@123"
accountCity = "Bhubaneswar"
let accountState;

//  accountId = 2   not Allowed
accountEmail = "spsh.com"
accountPassword = "23234"
accountCity = "Puri"

console.log(accountId);

/*Prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



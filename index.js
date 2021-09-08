const validatePassword = require('./passwordvalidation'); //import the function
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

getPassword();


function getPassword(){

    rl.question('What is your Enter a password to validate (or :q to quit)' , (pass) => {

        if(validatePassword(pass) == true){
            console.log("the password is valid");
            return getPassword();
        }
        else if(validatePassword(pass) == false && pass == 'q'){
            rl.close();
        }
        else if(validatePassword(pass) == false){
            console.log("invalid pasword");
            return getPassword();
        }  

        });

}

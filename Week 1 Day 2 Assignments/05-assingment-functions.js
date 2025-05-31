//Function declaration

function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile('Puvi'); 

//Arrow function

const double = (number) => {
   let doubleVal = number*10;
   console.log(doubleVal);
};

double(5); 

//Anonymous Function

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);


//Callback Function
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "Puvi", age: 45 };
        callback(user);
    }, 3000);
}

getUserData((user) => {
    console.log(`User name is ${user.name} and age is ${user.age}`);
});














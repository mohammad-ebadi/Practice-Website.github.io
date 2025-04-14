// Object
let person = {
    userName : "silco" ,
    age : 25

};
console.log(person);
console.log(person.userName);
console.log(person.age);
console.log(typeof person);

// Array
let selectedColor = ['red' , 'green' , 'blue'];
console.log(selectedColor);
console.log(selectedColor[2]);
console.log(selectedColor.length);
console.log(typeof selectedColor);

// Functions
function greet (firstName , lastName){
    console.log("Hello " + firstName + " " + lastName);
}
greet("silco" , "powder");
///////////////////////
function squer(num1 , num2){
    return num1 * num2;
}
console.log(squer(2 ,2));


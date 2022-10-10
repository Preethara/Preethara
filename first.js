//my first js file
console.log("Hello world");
let var1 = 10; //number
console.log(var1);
const pi = 3.14; //constant
console.log(pi);
let first_name = "Preetha", last_name = "Ramesh", user_name, my_name = "Preetha Mohanraj";
console.log(typeof my_name, my_name);
var1 = 15e12; //15 * 10 power of 12
console.log(typeof var1, var1);
var1 = 100_00_00_000; //we have seperate like this it won't be a error
console.log(typeof var1, var1);
var1 =  12/0; //anything divide by zero is infinity
console.log(typeof var1, var1);
var1 = -12/0; //also represent negative and positive values 
console.log(typeof var1, var1);
console.log(Number.MAX_VALUE); //prints the maximum value assigned fro number datatype
//when we are made any operations to this MAX_VALUE it will represent he o/p as infinity
console.log(Number.MAX_VALUE * 10);
var1 = 0XF; //to print the hexadecimal values
console.log(typeof var1, var1);
var1 = 1010101010101010101010101n; //represent the big int values bcoz of it is more than the Number datatype MAX_VALUE
console.log(typeof var1, var1);
// big int can't mix with any values for ex var1 = 10101010101011010101n + 3; not allowed
var1 = 1010101010101010101010101n + 2n;
console.log(var1);
user_name =  first_name + last_name;
console.log(user_name);
user_name = first_name + " " + last_name;
console.log(user_name);
user_name = "Web developer : \"Preetha Mohanraj\""; // need double quotes for your output
console.log(user_name);
// /operations = \b \n  new line \t tab space \v vertical tab space \d deleting a letter
my_name = "\bPree\ntha\tMohan\vraj";
console.log(my_name);
let boolean_operation = 2>10;
console.log(typeof boolean_operation, boolean_operation);
let var2 = null;
console.log(typeof var2, var2);
let var3;
console.log(typeof var3, var3);
var1 = 10;
console.log(typeof (10 / "preetha")); //it will return the base value datatype
var1 = String(10); //type conversion
console.log(typeof var1, var1);
var1 = Number("123");
console.log(typeof var1, var1);
//coercion operations
var1 = 8;
var2 = "";
var3 = var1 + var2;
console.log(typeof var3, var3, var1 - var2, var3 - 3);
var1 = !var1;
console.log(typeof var1, var1);
ES is the version of javascript.
ES is called ECMA Script.
There are lot of issue and loop holes in ES5 version.
When we use 'var' we use ES5
When we use 'let' and 'const' then we use ES6.

-) Words vs Keywords
Keywords:
Jin words sy hum kuch kr skty hain unhain 'Keywords' kehty hain.
eg. let, if, else, function etc. We use 'let' to make a variable.

-)Variables
Every programming language have Variables.
Variables are containers that holds the data.
eg: When you insert a card in ATM machines it remembers you until it completes the transaction.
They help us store, reuse, and update information in JavaScript — from simple values like numbers to complex data like arrays and objects.
In JavaScript, you create these boxes using keywords: var , let , or const .

-) var
var is old so we are not using it.
Scoped to functions.
Problems with var:
It runs in windows,
It can be re-declared,
It can be used anywhere in a function.

-) let
we use let when we have to change the value in future.
eg; Like score; my score in a game is 0 now it will be 10 later then 20 then 30 so we use 'let' here.
let score = 0
Scoped to block.
Can be reassigned but not redeclared.

-) const
like the value of pi
e.g; pi value always stays the same like 3.14 it is not gonna change in future.
const pi = 3.14
if we change the value of pi later it will give an error which says you cant change the value.

--) Scope (global, block, functional)
functional scope:
if you create a function like this

function abcd(){
  var a = 12;
}

then it cannot be used in the whole other code it can only be used inside function.
but,

Global Scope:
if you make a variable in open like this,
  var a = 12;
then it can be used in whole code.

Block Scope:
Code inside curly braces{} is called block scoped.
e.g; 
   {
       let a = 12;

	}
whenever we use curly braces{} we use let in it bcoz its block scope.

sidenote:
if we use var instead of let in a block scope like this
	{
	    var a = 12;
		}
then it can be used in the whole code too bcoz var is a functional variable but there is no function in this code so it acts like a functional variable.
When we run our code the whole code run in a function that makes var works even without creating a function.

……………………………………………………………………….

we use let like this in a function

function abcd(){
if(true){
 let a = 12;
  }
}



-) Reassignment & Redeclaration
Reassignment:

var a = 13;
a = 33;

or,

let a = 12;
a = 33;

Redeclaration:

with 'let' once we declare
let a = 12;
we cannot declare 'a' again
let a = 233;

with 'var' once we declare
var a = 12;
we can declare 'a' again
var a = 233;

conclusion; Redeclaration is possible with 'var' but not possible with 'let'


--)The Temporal Dead Zone (TDZ)
The Temporal Dead Zone (TDZ) is the time between when a 'let' or 'const' variable is found in the code and when it's actually declared. If you try to use it before the declaration, you'll get an error.
e.g;
our first line of code is
line 1 console.log(a)
it gives an error which says:
ReferenceError: a is not defined

but if we write our code as:

line1 console.log(a)
line5 let a = 12;

it gives an error which says:
Cannot access 'a' before initialization

TDZ is/are the lines/area which is between line1 and line5.
In other words, 
If we use the variable 'a' before we declare it, the lines in between are called Temporal Dead zone of variable a.

--)Hoisting
JavaScript prepares memory before running code.
When a variable is made in JS, it breaks into two parts.
It moves all declarations to the top and all Initializations remains down — this is called hoisting.
e.g;
we create a variable is JS
var a = 12
it breaks into two parts like this

var a = undefined
a = 12;

then the declaration part which is var a = undefined
goes to the top of the code.

so, when we run
cosole.log(a)
var a =12;
if gives undefined in console because break into 2 parts and works as this

var a = undefined
cosole.log(a)
a = 12;

Chapter 2: Data Types
--)Primitive types Reference types
-)Primitive types:
primitives —> aisi saari values jinko copy karne par
tumhe ek real copy mil jaaye.
The data types that are stored without brackets are Primitive types.
string, number, boolean, null, undefined, symbol, bigint are Primitive types.

e.g;
let a = 12;
let b = a;
it will show the output as a=12, b=12
but when we change the value of 1st 'a' the value of 'b' doesn't change
let a = 12;
let b = a;
a = a + 2;
now it will show the output as a = 14, b = 12

-)Reference types:
inko copy karne par real copy nahi milegi but aapko reference milega parent ka.
The data types that are stored with brackets are Reference types.
array[], object{} and functions() are  Reference types.
e.g;

let a = [1,2,3];
let b = a;
it prints 'a' as, a=[1,2,3] , and 'b' as [1,2,3]
but 'b' becomes 'a' too which means change in 'b' means change in 'a'.
e.g:

let a = [1,2,3];
let b = a;
b.pop();
now, it prints 'a' as, a=[1,2] , and 'b' as [1,2].

There are 3 ways to make string in JavaScript.
1. with single quotes ''
2. With double quotes ""
3. With backticks ``

-)Dynamic Typing
Js main Static typing nhi hy Dynamic typing hy
e.g
let a = 12;
a = true;
a = "Arslan";
a = [];
a = null;
a = undefined;
all the value are right.

-)Quirks
typeof NAN is number
1 + '1' is 11
type of null is objects
etc

-) Type Coercion
when we say
"5" + 1
5 is string and 1 is number, and + sign do 2 things in js, it adds and it concatenate meanwhile if one of the two values is a string than JS makes the other value a string too.
"5" + 1
result is '51'

and When we say
"5" - 1
the result is 4, bcoz '-' sign just do one thing and its subtraction meanwhile JS turns the String into Number while doing Subtraction.

-) Truthy vs falsy values
Falsy values are:
0 false "" null undefined NaN document.all
How to check? use !!0, !!Nan etc.
e.g:
if(){
}
we should write trur or false in function like this:
if(true){
}
 but if we wrote something else like
if(null){
}
then JS sees the nature of the null(the nature of null is falsy) so JS takes it as false.

-)Truthy Values:
All the values other then falsy values are truthy values
e.g;
if(-1){
}
here, -1 is taken as true.


----) Chapter 3 
-) Operators
Arithmetic Operators:
+ - / * % **
+ Operator:
1+2 = 3
"Ars" + "lan" = "Arslan"
'+' operator adds if number and concatenate if it is String.

% Modulus operator:
it gives the reminder of the value
e.g:
12%2 = 0
12%5 = 2

**Operator:
** is called Exponentiation Operator 
e.g:
2**3 = 8

COmparions Operators:
==
===
!= not equal
!==
>=
<=
>
<

-) Assignment Operators
let a = 12;
a += 3;
a -= 11;
a *= 2;
a /= 2;
a %= 3;

-)Logical Operators:
AND && , OR || and ! are 3 logical operators
AND&&:
Both sides have to be true
true && true = true
false && true = false
true && false = false
false && false = false
use case:
12>13 && 13>10
which means
false && true = false

OR||:
If one side is true then then condition is true.
12>13 || 13>10
false || true = true

NOT!:
It flip the condition, if true it makes false, if false it makes it true.
!false = true
!true = false

Unary Operators:
+ - ! typeof ++ --

++a means pre-increment and a++ means post increment
++a e.g:

let a = 12;
++a
result 13

a++ e.g:
let  = 2;
a++ + a
result is 5

Ternary Operator ?: :
12>13 ? console.log("true): console.log("false");
in other words,
if 12>13 then print True else print False
so, the result is false.

---)Chapter 4
What is Control Flow
Control flow decides which code runs, when it runs, and how many times it runs.
It's like decision-making + direction in your JavaScript program.
)if, else, else-if
)switch case
)early return pattern

I-) f else Statements:

if (condition) {
// runs if condition is true
} else if (anotherCondition) {
// runs if first was false, second is true
} else {
// runs if none are true
}

e.g:

if (condition) {
// runs if condition is true
} else if (anotherCondition) {
// runs if first was false, second is true
} else {
// runs if none are true
}

-) Switch-case:
Great for checking one variable against many values.

switch (value) {
case value1:
// code
break;
case value2:
// code
break;
default:
// fallback
}

example:

let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red");
break;
default:
console.log("Unknown");
}

-)Early Return Pattern:
Used in functions to exit early if some condition fails.

function checkAge(age) {
if (age < 18) return "Denied";
return "Allowed";
}

This avoids deep nesting and makes logic cleaner.
example:

function getVal(val) {
if (val < 100) return "A";
else if (val < 75) return "B";
else if (val < 50) return "C";
else return "D";
}
getVal(12);
the result is A.

--) Loops
Repeat krny ko Loops kehty hain
for, while, foreach

 kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai
 for loop
1-50


 kaha se jaana hai —> kab rukna hai -> kaise jaana hai
 while loop

e.g:
1 — 40 for
20 — 30 for
hello na aajaye - while

For loop:
for loop has 3 conditions in it.
Structure of for loop: for(start; end; change){
}
Q. Make a for loop from 1-100?

for(let i = 1; i<101; i++){
console.log(i);
}

While Loop:
Structure of while loop:
start
while(end){
//code
change
}
example:
Q. Make a while loop from 1-100?

let i = 1;
while(i<101){
console.log(i)
i++;
} 

Do-while loop:
do runs one time even if the statement in while is incorrect
Structure:
do{
//it runs first
}
while(end)

example:
let i = 1;
do{
console.log(i);
i++;
}
while(i<20)


Break in loops:
for( let i = 1; i<201; i++){
console.log(i);
if(i==32){
break;
}
}
example:
for( let i = 1; i<201; i++){
if(i===32){
continue;
}
console.log(i);
}



----) Functions
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.

when we write the code it executes immediately, to stop that we use function so that it runs only when we want

usecase:
function dance(){
console.log('dance');
console.log('dance');
console.log('dance');
}
dance();

another usecase:
we can call the function multiple or as many times as we want and we don't have to write the whole code of it again.
 e.g; if we have to call the above function we say
dance();
if we have to print dance 6 times we say
dance()
dance()
so it prints it 6 times.

Ways to create a function:
It is called Function statement:
function ball(){
console.log('ball');

}

another way:
It is called Function expression:
let ball = function(){
console.log('ball');

}
calling the function:
ball();

another way:
Fat arrow function:
()=>{
}
or 
let ball = () =>{
console.log('ball');
}

ball();


Functions with Parameters and Arguments:
Parameters are the part inside the bracket of function: function dance(e), here is e is parameter.
Arguments: Arguments are the part inside the bracket of the function call: dance(e), here is e is argument.

1)
function dance(e){
console.log(`${e} is dancing`)
}
dance('horse');
dance('lion');
dance('bull');

2)
function add(v1, v2){
console.log(v1+v2);
}
add(1,2);

-) Default Parameters:

functoin add(v1,v2){
    console.log(v1 + v2);
}
add();
its result is NaN bcox there is no value given to the argument.

but we can do it as:

functoin add(v1=0,v2=0){
    console.log(v1 + v2);
}
add();
so that if there is no value given to the argument the result is 0.

Rest Parameters:
jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karte hai ... agar … function ke parameter space mein lage to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator hai.

function abcd(...val){
console.log(val);
}
abcd(1,2,3,4,5,6,7,8,9,10);
result is: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

we can write it as:
function abcd(a,b,c,...val){
console.log(a,b,c, val);
}
abcd(1,2,3,4,5,6,7,8,9,10);
result is: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Return:
return matlab jaha se aaye ho wahi daal denge.
function abcd() {
return 12;
}
let val = abcd();
console.log(val);
the result is 12.

another usecase:
function abcd(v) {
return 12 + v;
}
let val = abcd(23);
console.log(val);
the result is 35;


-) First Class Functions:
first class fncs —> functions ko values ki tarah treat karty hain

function abcd(val) {
val();
}

abcd(function(){
console.log("hey");
});

-) Higher order function:
hof wo function hota hy jo ki return kare function ya fir accept kry ek function apne parameter main.
this is the example of HOF bcoz it accepts the function in its parameter.

function abcd(val){

}
abcd(function(){
})

and, this is the example of HOF bcoz it return a function.

function abcd(){
return function(){
console.log('hey')
}
}
abcd()();

-) Pure vs impure functions:
aisa fnc jo ki baahar ki value ko naa badle wo hai pure function.
aisa fnc jo baahar ki value ko badal de wo hai impure function.

Pure function example:
let a= 3;
function abcd(){
console.log("Hey")
}
abcd();
its a pure function bcoz the values outside the functions are not affected by it.

Impure function example:
let a= 3;
function abcd(){
a++;
}
abcd();
console.log(a);


--)Closurs:
closures —> ek fnc jo return kare ek aur function aur return hone waala function humesha use karega parent fnc ka koi variable.

function abcd(){
let a= 12;
return function(){
console.log(a);
}
}

-) Lexical Scoping:
Lexical scoping in JavaScript means the scope of a variable is determined by its position in the source code (where it is written, not where it is called).

function abcd() {
    let a = 12;

    function defg() {
        let b = 13;

        function ghij() 
{
            let c = 14;
        }
    }
}


-)  IIFE – Immediately Invoked Function Expression

(function () {
 console.log("Runs immediately");
})();

Used to create private scope instantly.

-) Hoisting: Declarations vs Expressions

line1 hello(); 
.
.
.
line11 function hello(){
line12 console.log("Hi");
line13 }
hoisting works with function means it will show 'Hi' eventhough if we call it before declaration.

but, it we create a variable an makes it a function it will show an initialization error.
 
line1 fnc(); 
.
.
.
line11 let fnc = function hello(){
line12 console.log("Hi");
line13 }

--)Array
Arrays help you store multiple values in a single variable — numbers, strings, or even
objects/functions.

let marks = [10,20,30,40]
marks[0];
marks[1];

to call them we use marks[0] which shows 10 in console which is at 0 index.
marks[1] which shows 20 in console which is at 1 index etc.

To Modify array:
let arr = [10,20,30,40];
arr[2] = 12;
the result is [10,20,12,40]


Methods in Array:
what is a method?
when there is dot. somethingwritten push and brackets() it is called method.
e.g; .push() is a method

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order

splice example;
let arr = [1,2,3,4,5]
arr.splice(2,1)
(2) means remove value from 2nd index which is 3 and (1) means how many values should be removed.

slice example;
It doesn't change main array it makes a copy of the main array and changes it.
e.g;
let arr = [1,2,3,4,5,6];
let newArr = arr.slice(0, 3); // Copy from index 0 and stops before index 3.
result is [1,2,3].

sort example;
sort always accepts a function
let arr = [11,62,3,41]
let sr = arr.sort(function(a,b){
return a-b;
})
result is [3,11,41,62] a-b gives result is accending order.
b-a gives result is decending order [62,41,11,3]

-) forEach
forEach accepts a function.
forEach runs function for each value
e.g:

let arr = [11, 62, 3, 4, 25];
arr.forEach(function(val) {
console.log(val);
});
result is:
11
62
3
4
25

it runs for all the values in array.

usecase:
let arr = [11, 62, 3, 4, 25];
arr.forEach(function(val) {
console.log(val + 5);
});

result is:
16
67
8
9
30

it adds 5 in every value separately.

-) Map:
map srf tab youse karna hai jab aapko ek naya array
banana hai pichhle array ke data ke basis par

// map dikhte hi saath man mein ek blank array bana liya karo

let arr = [11, 62, 3, 4, 25];
let newarr = arr.map(function(val){
return 12;
})

result is [12,12,12,12,12]

usecase:

let arr = [11, 62, 3, 4, 25];
let newarr = arr.map(function(val){
if (val > 10) return val;
});
result is [11,62,undefined,undefined,25] bcoz we didn't give the value of else.

when to use map?
// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega.


-) filer:
filter accepts a finction.
// filter dikhte hi saath man mein ek blank array bana liya karo

let arr = [1, 2, 3, 4, 5, 6,7,8];

 arr.filter(function(val){
return true;
});

true means this value goes to new array, false means this value doesn't go to the new array.

usecase:

let arr = [1, 2, 3, 4, 5, 6,7,8];

 let nearr = arr.filter(function(val){
if (val > 4) return true;
});
result is [5,6,7,8]

-) Reduce:
reduce means to make it in a single value.
reduce accepts a function.

let arr = [1, 2, 3, 4, 5, 6,7,8];

let ans = arr.reduce(function(accumulator,val){
return accumulator + val;
}, 0);
result is 21.


-) Find:
find returns the value that matches first.
it accepts a function.

let arr = [1, 2, 3, 1, 4, 5];

let va = arr.find(function(val){
return val === 1;
});
result is 1.

-) Some:
if even one condition satisfy then it returns true.
it accepts a function.

let arr = [10, 30, 32, 90];
let any = arr.some(function(val) {
return val > 85;
});
result is true.

-) Every:
if every condition satisfy then it returns true.
it accepts a function.

let arr = [10, 30, 32, 90];
let any = arr.every(function(val) {
return val > 5;
});
result is true.

and if,
let arr = [10, 30, 32, 90];
let any = arr.every(function(val) {
return val > 15;
});
result is false bcoz one condition fails.


-) Destructuring:

let arr= [1,2,3,4,5];
let [a,b] = arr;

a and b carries the values of 1st and 2nd index.
it returns a = 1, b = 2
if we want to skip the3rd valuean get the 4th we do:

let arr= [1,2,3,4,5];
let [a,b, , d] = arr;


-)Spread Operator:
in arrays … is called spread operator.

let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [...arr];

it copies all the array values.
if we use only 
let arr2 = arr
then it is not a copy any change done in arr2 modifies arr itself.


---) Object
If we want full detail of one person Arslan we make object.
If we want full detail of all the Arslan's in the city then we make an array.

let obj = {}
this is an blank object.

e.g:
let person = {
  name: "Arslan",
  age: 22,
};

we have to write string in "".

How to access/call objects:
we use dot . notation to call objects.
example:

obj.age

result is 22.

Another way to access objects is this:
obj["age"]

use case of object dot(.) and array[] access use:
what dot(.) do:

let person = {
  name: "Arslan",
  age: 22,
};
let aa = "name";
obj.aa

Result is undefined bcoz dot(.) find aa in obj but there is no aa in obj.

what array[] do:

let person = {
  name: "Arslan",
  age: 22,
};
let aa = "name";
obj['aa']

Result is 'Arslan' 
bcoz dot(.) just find whats inside obj while array[] convert 'aa' value to name so when we call 'aa' we get value of name .

Key value structure:

let person = {
  name: "Arslan",
  age: 22,
  isStudent: true,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

name, age, isStudent, greet are → properties (keys)
"Arslan", 22, true, function() are → values

Nesting and Deep Access:

let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001,
location: {
latitude: 23.2,
longitude: 77.4,
},
 },
};

to get longitude value we write:

user.address.location.longitude;
the result is 77.4

Object Destructuring:

let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001,
location: {
latitude: 23.2,
longitude: 77.4,
},
 },
};

to get latitude and longitude value we write:

let {latitude, longitude} = user.address.location;

-) Looping:
for-in:

let obj = { 
name: "harsh",
age: 26,
email: "test@test.com" ,
};

for (let key in obj){
console.log(key, obj[key]);
}

Object.keys:
let obj = { 
name: "harsh",
age: 26,
email: "test@test.com" ,
};

Object.keys(obj);
the result is:
['name', 'age', 'email']
it gives all the object keys in array.


Object.entries():
Ye ek built-in method hai jo ek object ko array of arrays me convert karta hai.
example:

const person = {
  name: "Arslan",
  age: 22,
  city: "Lahore"
};

const entries = Object.entries(person);
console.log(entries);

output:
[
  ["name", "Arslan"],
  ["age", 22],
  ["city", "Lahore"]
]

Copying Object using:
Spread:

let person = {
  name: "Arslan",
  age: 22,
  city: "Lahore"
};

let person2 = {...person}
now person2 copies all the values of person in an object.


Object.assign:
it does the same purpose as spread.
let person2 = Object.assign({}, obj);
this copies all the values of person in an object in and assign it to person2.


Deep Clone:
When an object becomes nested object and we copies it using spread operator then only the top level values really got copied. The nested objects are not copied that pass reference which means changing the copy impacts changing the original.

JSON.stringify():
JSON.stringify Object ko string banata hai jo easily save ya send kar sakte ho (like API requests me).
JSON satnds for (JavaScript Object Notation).  

JSON.parse():
Tumhare paas ek JSON format ka string hai (API se aaya ya localStorage se), usko normal JS object/array me badal deta hai taake tum use access kar sako.

Using deepclone:
let obj = {
  name: "Arslan",
  age: 22,
  city: "Lahore",
address: {
 sector: "i11/2",
},
};

let obj2 = JSON.parse(JSON.stringify(obj));
now this will copy the nested obj and change in obj2 sector doesn't affect change in obj itself.

Optional Changing:

let obj = {
  name: "Arslan",
  age: 22,
  city: "Lahore",
address: {
 sector: "i11/2",
},
};
it we run in console obj.address.sector it returns i11/2 but what if in future the address words gets changed and become addresses or anything else then running this command obj.address.sector gives an error.
We don't want errors to occur in our code so we use it this way:
obj?.address?.sector


Computer Properties:

let role = 'admin'

let obj = {
  name: "Arslan",
  age: 22,
  city: "Lahore",
address: {
 sector: "i11/2",
},
[role]: 'Arslan',
};

output of obj is: {name: 'Arslan', age: 22, city: 'Lahore', address: {…}, admin: 'Arslan'}



Part:2
DOM Manipulation:

First step; 
Selecting:

1) document.getElementById:
🔹 Ye method ek hi element ko select karta hai jo ek unique id ke saath hai.
📌 Remember: id page mein ek hi baar hota hai.

📝 Syntax:

document.getElementById("id_name")


2) document.getElementsByClassName
🔹 Ye method ek saath multiple elements ko select karta hai jo ek hi class ke andar hain.
📌 Important: Ye HTMLCollection return karta hai (array jaisa hota hai).
📝 Syntax:

document.getElementsByClassName("class_name")


3) document.querySelector
🔹 Ye sabse flexible hai.
🔹 Ye CSS selectors use karke pehla match hone wala element select karta hai.
📝 Syntax:

document.querySelector("css_selector")

4)document.querySelectorAll
🔹Agar aapko multiple elements chahiye, toh use:

📝 Syntax:

document.querySelectorAll(".myClass")

Second Step:
Changing:

html:
<h1>Where am I<h1/>

js:
let h1 = document.querySelector("h1")
console.dir(h1)
dir will show the details inside this h1
h1.innerHTML = "I am Fine";

we can also use
h1.innerTEXT = "I am Fine";
h1.textContent = "I am Fine";

all 3 of these methods works the same to change the inner data of the h1 tag.

innerHTML
🔹 Ye HTML ke content (tags + text) dono ko read aur set karta hai.
🔹 Agar element ke andar HTML tags hain, toh wo bhi include karta hai.
🔹if we want to write HTML in any element then we use this.
e.g:
h1.innerHTML = "<i>hey</>"


innerText
🔹 Ye sirf visible text ko read/set karta hai.
🔹 Ye CSS ke effects ko respect karta hai (e.g., display: none wale text ko ignore karega).

textContent
🔹 Ye sabhi text (visible + hidden) ko return karta hai.
🔹 Ye CSS ko ignore karta hai.
🔹 Tags ko ignore karke plain text return karega


--) Attributes

without the tag itself, Attributes are everything else in a tag.
ex:
<img src="cat.jpg" alt="Cute Cat" width="300">

So, src, alt, width attributes hain, aur "cat.jpg", "Cute Cat", 300 unki values hain.

-) setAttribute()
🔹 Kisi element ka attribute add/update karne ke liye.
ex:
let a = document. querySelector("a");
a.setAttribute("href" ,"https://www.google.com");

ex2:
html:
<img id="myImg" src="dog.jpg">

<script>
  let img = document.qureySelector("myImg");
  img.setAttribute("src", "cat.jpg"); // Image ab cat.jpg ho gayi.
</script>

-) getAttribute()
🔹 Kisi element ka attribute read karne ke liye.
🔹ya Kisi element ka attribute kivalue get karne ke liye.


📝 Syntax:
element.getAttribute("attributeName")
ex;
let a = document.querySelector("a");
a.getAttribute("href");

so, if href value was previously ww.google.com, it will get the value an show the value in console which is ww.google.com

-)removeAttribute()
🔹 Kisi element ka attribute remove karne ke liye.

📝 Syntax:
element.removeAttribute("attributeName")
ex;
let a = document.querySelector("a");
a.removeAttribute("href");

Creating:

document.createElement()
🔹 Ye ek naya HTML element banata hai (but page par add nahi karta — abhi memory mein hai).

📝 Syntax:
let newElement = document.createElement("tagName");
ex:
let h1 = document.createElement("h1"); 
h1.textContent = "Hello from JS!";

but this h1 is not seen on screen and on console, to show this h1 on console or in body we use append.

-) Append & Prepend:

document.querySelector("body").append
or we use,
document.querySelector("body").prpend(h1)

prpend means it attaches on top in the body.
append means it attches on bottom in the body.

full code:

document.createElement("h1");
let h1.textContent = "hello ji kaise ho";
document.querySelector("body").prepend(hl);

to remove the h1 we use remove();
ex:
document.querySelector("body")
h1.remove();

-)Change color, backgroundcolor, font, capitalize through javascript:

document.querySelector("h1");
h1.style.color = "red";

to change the background color
h1.style.backgroundColor = "red";

to change font:
h1.style.fontFamily = "Gilroy";

to capitalize:
h1.style.textTransform = "capitalize";

-) Style updates via .style and classList(add, remove, toggle)

let h1 = document.querySelector("h1");
h1.classList.add("hulu");

To remove class of h1
h1.classList.remove("hulu")

To Toggle class of h1
h1.classList.toggle("hulu");

agar class lgi ho gi to toggle method usy hata dy ga agr class nhi lgi hogi to toggle usy lga dy ga.

What does setAttribute() do?


----) Event & Events Handling

-) Add event Listner:
Browser mein page par koi bhi harkat karo
event raise ho jaayega

Use case:
kuchh screen par ho aur aapko reaction dena
ho to us waqt aapko event handle karna aana
chahiye
// event matlab hota hai koi action hua
// event listener ka mat lab hai aapne koi action
ka reaction diya.

structure of eventlistner:
element.addEventListner("event name" ,function(){
});

Example:
let hl = document.queryselector("h1"); //selecting the h1
hl.addEventListener("click", function(){
hl.style.color = 'red';
}

Remove Event Listner:
Example:
let h1 = document.querySelector("h1");
function dblclick(){
    h1.style.color = "red";
}

h1.addEventListener('dblclick', dblclick);
h1.removeEventListener('dblclick', dblclick);

--) Common Events:
-) Input:
let input = document.querySelector('input');
input.addEventListener("input", function(){
    console.log("typed");
});

-) Change event:
// change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye.


-) mouseover, mouseout & mousemove Events

let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
})

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
})

window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
})


-) What is the Event Object?

When an event happens in JavaScript (like a click, key press, mouse move, etc.), the browser creates an object that contains all the information about that event.
This object is called the Event Object.
example:
window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";

here, dets is the event object.


-) what is event.preventDefault()?
It is a method of the event object.

It tells the browser:
“Don’t do the default action that normally happens for this event.”
example, dets.preventDefault();

--) Event Bubbling
// jispe event aayega agar uspar listener nahi
hua to humaara event uske parent par listener
dhundhega aur aisa krte krte upar ki taraf move
karega.

example code:
html:
  <div id="parent" style="padding:20px; background:lightblue;">
Parent
  <button id="child">Click Me</button>
</div>

js: document.getElementById("parent").addEventListener("click", () => {
  alert("Button clicked!");
});

Key Points:

Bubbling = event flows upwards (child → parent → body → document).
Useful because you can put one handler on a parent instead of every child (called event delegation).

To stop bubbling, use event.stopPropagation().


--) Event Bubbling
jab bhi aap click krte ho ya koi bhi event raise krte ho to
aapka jo event flow do phases mein chalta hai:
phase 1: event top level element se neeche ki taraf aayega
phase 2: event raised element se parent ki taraf jaayega
aur pahle phase 1 hoti hai

Event Bubbling vs Event Capturing

Bubbling: Event goes from the target → up (child → parent → body → document).

Capturing: Event goes from the top → down (document → body → parent → child).

humesha phase 1 hi pahle hot i hai par vo by default off
rahti hai, agar hum usey on kar dein to pahle phase 1 ka
answer mi lega


--) Forms and Form Validation

Code:

let form = document.querySelector("form");
let nm = document.querySelector("#name");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
if(nm.value.length <= 2){
    document.querySelector("#hide").style.display = "initial";
}
else{
        document.querySelector("#hide").style.display = "none";
}
})

What Your Code Does?

form.addEventListener("submit", ...):
When the user clicks the submit button, this function runs.

dets.preventDefault():
Stops the form from actually submitting (so the page doesn’t reload).

if (nm.value.length <= 2):
Checks if the name input is too short.

document.querySelector("#hide").style.display = "initial";
Shows an error message if the name is invalid.

else { ... }
Hides the error message if the name is valid.

-) Regex

         //  Your code checks if a given string looks like an email.
// .test("a@a.a") → returns true.
//  Regex is basically a mini-language for finding patterns in text.

let form = document.querySelector("form");
let nm = document.querySelector("#name");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let ans = regex.test("a@a.a");
console.log(ans);
})

--) SetTimeout
Runs a function once after a specified delay (in milliseconds).

code:
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

--) setInterval
Runs a function repeatedly at the given time interval.

code:
setInterval(() => {
  console.log("Repeats every 3 seconds");
}, 3000);

-) clearTimeout()
setTimeout() schedules a function to run once after some time.
If you change your mind and want to stop it before it runs, you use clearTimeout().

code:
let timer = setTimeout(() => {
  console.log("This will NOT run, because I will clear it!");
}, 3000);

// cancel the timeout after 1 second
let tm = setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

clearTimeout(tm);

-) clearInterval
clearInterval works the same as clearTimeout.

--) Local Storage
// localStorage hy aapke browser ke andar data store karna
jo ki browser band hone par bhi delete nahi hogal
its storage capacity is near 5mb


// store kaise kare? use setItem
// data fetch kaise kare? use getItem
// remove kaise kare? use removeItem
// update kaise karé? use setItem
// clear kaise kare?  clear()

To Store data in localStorage:
localStorage.setltem('name', "arslan");

To Fetch(Get) data from localStorage:
let val = localStorage.getItem("name");

To remove data from localStorage:
localStorage.removeItem("name");

To Update data in localStorage:
localStorage.setltem('name', "arslan");

To clear data in localStorage:
localStorage.clear();

what setItem do is if there is no property exists than it will create it or if the property exists already than it will override it with the new value.

--) Session storage
// sessionstorage —> ye aapka data temporarily store karta
hai mat lab ki tab band hua aur data gaya
its storage capacity is near 5mb


// store kaise kare? use setItem
// data fetch kaise kare? use getItem
// remove kaise kare? use removeItem
// update kaise karé? use setItem

To Store data in sessionStorage:
sessionStorage.setltem('name', "arslan");

To Fetch(Get) data from sessionStorage:
let val = sessionStorage.getItem("name");

To remove data from sessionStorage:
sessionStorage.removeItem("name");

To Update data in sessionStorage:
sessionStorage.setltem('name', "arslan");


To clear data in sessionStorage:
sessionStorage.clear();


--) Cookies
// cookies -> ye bhi data store karta hai and aapka data
browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke Iiye hota hy
its storage capacity is near 4kb
// cookies mein jo bhi data store karoge wo data page reload par automatically server par jaayega.

To Store data in cookies:
document.cookie = 'email=arslan@test.com'

to edit cookie search on google 'EditThiscookie(V3)' extention

To check it cookie exists use document.cookie in console
We cant directly store array or objects in localstorage we can only use strings.

-) JSON.Stringify
We cant directly store array or objects in localstorage so, to store array/objects in localStorage we use JSON.stringify.

localStorage.setItem("friends" ,JSON.stringify(["Azam", "Gul", "Medha"]));

so, when we get the data using localStorage.getItem('name');
we get a string again '["Azam", "Gul", "Medha"]' which is a problem because we want to get array here.
To get the data from string to its original form we use JSON.parse().

-) JSON.parce()
 JSON.parse('["Azam", "Gul", "Medha"]')
now it will return an array
['Azam', 'Gul', 'Medha']
so instead of using this:
localStorage.getItem("friends")

we can use:
JSON.parse(localStorage.getItem("friends"))

to see it, store in a variable and console.log it
let fr = JSON.parse(localStorage.getItem("friends"))
console.log(fr)






// 1
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY INTERPRETER:
// var hello;
// console.log(hello);
// hello = "world";
// 
// OUTPUT:
// undefined

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY INTERPRETER:
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// 
// OUTPUT:
// magnet

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY INTERPRETER:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// 
// OUTPUT:
// super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY INTERPRETER:
// var food = 'chicken';
// console.log(food);
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// eat();
// 
// OUTPUT:
// chicken
// half-chicken

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY INTERPRETER:
// var mean;
// mean();
// console.log(food);
// mean = function(){
//     var food;
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// console.log(food);
// 
// OUTPUT:
// mean is not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);    
// AFTER HOISTING BY INTERPRETER:
// var genre;
// function rewind(){
//     var genre;
//     genre = 'rock';
//     console.log(genre);
//     genre = 'r&b';
//     console.log(genre);
// }
// console.log(genre);
// genre = 'disco;
// rewind();
// console.log(genre);
// 
// OUTPUT:
// undefined
// rock
// r&b
// disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY INTERPRETER:
// function learn(){
//     var dojo;
//     dojo = 'seattle';
//     console.log(dojo);
//     dojo = 'burbank';
//     console.og(dojo);
// }
// dojo = 'san jose';
// console.log(dojo);
// learn();
// console.log(dojo);
// 
// OUTPUT:
// san jose
// seattle
// burbank
// san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY INTERPRETER:
// function(name, students){
//     const dojo = {};
//     dojo.name = name
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// 
// OUTPUT:
// constant dojo cannot be changed
// (Assignment to constant variable)
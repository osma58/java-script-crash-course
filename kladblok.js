// //arrays

// const fruits = ['apples', 'oranges', 'pears' ];

// fruits[3]='grapes'; // voegt 1tje erbij

// fruits.push('mango'); // ovoegt 1tje naar het einde

// fruits.unshift('strawberries'); //voegt 1je naar het begin

// fruits.pop();// haalt de laatste eruit 

// console.log(array.isArray('hello')); //kan je controleren of het een array is ja of nee.

// console.log(fruits.indexOf('oranges')); // laat jou zien welke positie 'oranges staan'

// console.log(fruits); // laat de array fruits Zien

// ===============================================================================================================================================

// een persoon aan maken

// const person = {
//     firstName: 'osman',
//     lastName: 'oz',
//     age: 18 ,
//     hobbies: ['muziek', 'game', 'films'],
//     adress: {
//         street: 'Geulstraat',
//         city: 'Amsterdam',
//         State: 'North-Holland'
//     }
// }

// // console.log(person.age, person.lastName);// als je specefieke info wilt hebbe uit een lijst.


// person.email = 'osman_yasin@hotmail.nl';// toevoegen van

// console.log(person);// het persoon laten zien

// ===============================================================================================================================================
// een simple todo lijst maken

// const todos = [ {
//     id: 1,
//     text: 'maak je kamer schoon',
//     isCompleted: true
// },
// {
//     id: 2,
//     text: 'koken',
//     isCompleted: true
// },
// {
//     id: 3,
//     text: 'opdrachten maken',
//     isCompleted: false
// }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);                 // JSON code genereren.

// ===============================================================================================================================================
//for looops

// for(let i = 0; i < 10; i++) {
//     console.log(`for loop number: ${i}`);
// }

// ===============================================================================================================================================
//while loop 

// let i = 0;
// while(i< 10) {
//     console.log(`while loop number: ${i}`);
//     i++;
// }

// ===============================================================================================================================================
// loop trough arrays

// for(let todo of todos) {
//     console.log(todo);
// }                             // een manier op specefieke punten uit de 'todos' lijst eruit te halen.

// ===============================================================================================================================================
// forEach, map, filter

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// map 

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);

//filter 

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

// ===============================================================================================================================================
// gebruijk maken van variables groter of kleinder dan, || betekent: of, && betekent: en, ? betekent: en dan.
// const x = 10;
// const y = 11;

// if(x > 5 || y > 10) {
//     console.log('x more then 5 or y is more than 10');
// } 

// ===============================================================================================================================================
// functie swtich

// const x = 9;

// const color = 'green';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
// }

// ===============================================================================================================================================
// arrow functie
// const addNums = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addNums(10, 5));

// ===============================================================================================================================================
// constructor funtie, als je een constructor functie aan maakt moet het beginnen met een hgoofdletter.

//object georienteerd programmeren

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {                                    <----------  dit is manier 1
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName}  ${this.lastName}` ;
// }

//class========================================================================================== 
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//                                                                                     // <----------  dit is manier 2
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName}  ${this.lastName}` ;
//     }
// }

// //instantiate object
// const person1 = new Person('John', 'Oz', '06-06-3001');
// const person2 = new Person('Willy', 'Oz', '4-6-3001');
// const person3 = new Person('Sam', 'Oz', '4-6-3001');

// console.log(person1.getFullName());

// console.log(person1);

//========================================================================================== 

// // single Element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));



// //multiple element 

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//=========================================================
//het veranderen van html of css 
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
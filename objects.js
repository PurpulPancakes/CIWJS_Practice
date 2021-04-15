// var student = {
//     name: "Marc",
//     height: 5.4,
//     id: 1,
//     favColor: "purple"
// };

// console.log(student.name);
// Marc

// student.favFood = "Taquitos"
// console.log(student.favFood);
// Taquitos

// delete student.name;

// student.["is poor"] = true
// console.log(student["is poor"])
// true

// let student = {}

// let nameChoose = prompt("What is your name?", "Marc");
// let heightChoose = prompt("How tall are you?", "5 4");
// let idChoose = prompt("What is your number?", "1");
// let favColorChoose = prompt("What is your favorite color", "Purple");

// student["name"] = nameChoose;
// student["height"] = heightChoose;
// student["id"] = idChoose;
// student["favColor"] = favColorChoose;

// let createStudent = function(firstname, height, id, favColor){
//     return {
//         firstname,
//         height,
//         id, 
//         favColor
//     };
// }

// let marc = createStudent("Marc", "5 4", "1", "Purple");

// "key" in object; //true or false
//"cash" in wallet; //false, if there is no cash in the wallet

// for(let key in wallet){
//     console.log(key); //card, cash
//     console.log(wallet[key]);//"debit", 442
// }

// let Catheryn = {
//     grade1: 70,
//     grade2: 27,
//     grade3: 27,
//     grade4: 13,
//     grade5: 60,
//     grade6: 3,
//     grade7: 29,
//     grade8: 23,
//     grade9: 67,
//     grade10: 16,
//     grade11: 18,
//     grade12: 70,
//     grade13: 76,
//     grade14: 13,
//     grade15: 26,
//     grade16: 30,
//     grade17: 41,
//     grade18: 16,
//     grade19: 33,
//     grade20: 26,
//     grade21: 59,
//     grade22: 1,
//     grade23: 57,
//     grade24: 3,
//     grade25: 61,
//     grade26: 78,
//     grade27: 10,
//     grade28: 22,
//     grade29: 62,
//     grade30: 72,
//     grade31: 59,
//     grade32: 82,
//     grade33: 59,
//     grade34: 84,
//     grade35: 20,
//     grade36: 34,
//     grade37: 52,
//     grade38: 81,
//     grade39: 76,
//     grade40: 41,
//     grade41: 18,
//     grade42: 90,
//     grade43: 41,
//     grade44: 31,
//     grade45: 16,
//     grade46: 15,
//     grade47: 68,
//     grade48: 44,
//     grade49: 47,
//     grade50: 25,
//     grade51: 20,
//     grade52: 20,
//     grade53: 46,
//     grade54: 44,
//     grade55: 14,
//     grade56: 79,
//     grade57: 81,
//     grade58: 2,
//     grade59: 62,
//     grade60: 88,
//     grade61: 29,
//     grade62: 34,
//     grade63: 27,
//     grade64: 45,
//     grade65: 26,
//     grade66: 59,
//     grade67: 75,
//     grade68: 73,
//     grade69: 31,
//     grade70: 82,
//     grade71: 85,
//     grade72: 39,
//     grade73: 13,
//     grade74: 14,
//     grade75: 9,
//     grade76: 52,
//     grade77: 49,
//     grade78: 27,
//     grade79: 4,
//     grade80: 30,
//     grade81: 38,
//     grade82: 21,
//     grade83: 10,
//     grade84: 73,
//     grade85: 44,
//     grade86: 23,
//     grade87: 24,
//     grade88: 13,
//     grade89: 69,
//     grade90: 35,
//     grade91: 63,
//     grade92: 8,
//     grade93: 57,
//     grade94: 59,
//     grade95: 79,
//     grade96: 76,
//     grade97: 74,
//     grade98: 81,
//     grade99: 96,
//     grade100: 13
// }

// console.log(Object.keys(Catheryn).length);
// console.log(Object.values(Catheryn));

// let sum = 0;
// for (let key in Catheryn) {
//     sum += Catheryn[key];
// }
// console.log(sum);

// console.log(sum / Object.keys(Catheryn).length);

// user = {
//     sayHi: function() {
//         alert("Hello");
//     }
// };

// user = {
//     sayHi() { // same as "sayHi: function ()"
//         alert("Hello");
//     }
// };

// let giraffe = {
//     name: "Real",
//     age: 23,

//     eat() {
//         alert(this.name);
//         // alert("The giraffe ate a nice and healthy meal.");
//     }
// };

// giraffe.eat();

// volvo = {
//     drive() {
//         alert("The volvo drove a nice and healthy mile.");
//     }
// };

// phoenix = {
//     event() {
//         alert("Pheonix had a nice and healthy football event.");
//     }
// };

// function Student(fullName, id, gradeLv, currentGrade) {
//         this.fullname = fullName;
//         this.id = id;
//         this.gradeLv = gradeLv;
//         this.currentGrade = currentGrade;
//         this.admin = false;
//         this.graduate = function () {
//             return this.gradeLv++;
//         };
//         this.whiteList = function () {
//             return this.admin = true;
//         };
//         this.setGrade = function (value) {
//             return this.currentGrade = value;
//         };
// }

// let marc = new Student('Marc Tinney', 1, 12, 'smart');
// console.log(marc.whiteList());
// console.log(marc);

// class Rectangle {
//     constructor(width, length){
//         this.width = width;
//         this.length = length;
//     }
//     get area() {
//         return this.length * this.width;
//     }
// }
// const rect1 = new Rectangle(10, 5);
// const rect2 = new Rectangle(6, 12);
// const rect3 = new Rectangle(15, 20);

// console.log(rect1.area);
// console.log(rect2.area);
// console.log(rect3.area);

// class Circle {  
//     set radius(radius){
//         this._radius = radius;
//         this.area = 3.14 * Math.pow(radius, 2);
//         this.circumference = 2*(3.14)*radius;
//     }
// }
// const circ = new Circle();  

// class Animal {
//     constructor(speed) {
//         this.speed = speed;
//     }
//     run(){
//         distance += this.speed;
//     }
// };

// class Cat extends Animal {
//     lives(lives){
//         this.lives = lives
//     }
// };

// Year 4 Digits, Month from 0 (Jan) - 11 (Dec), Date starts at 1, Hours, minutes, seconds, ms (All start at 0)

//getFullYear(), get Month(), getDate(), getHours, minutes, etc..., getDay()(0-6)

//Date.now() Returns the current time on device you are using

//e.currentTarget.style.background = 'red'
//Using style.property on the current target element will allow you to change the property to whatever you want

//e = event

let userName = prompt("Welcome to Dan's site...What's your first name?");
console.log(userName);
let elName = document.getElementById ("name");
elName.innerHTML = userName;

let userLastname = promp("What is your last name?");
console.log(userLastname);
let elLastname = document.getElementById ("last name");
elLastname.innerHTML = userLastname;

let userHome = prompt("Howdy! " + userName + userLastname + "tell me, Where are you from?");
console.log(userHome);
let elHome = document.getElementById ("home");
elHome.innerHTML = userHome;

let userColor = prompt("Wow your all the way from " + userHome + ". That is cool." + " What is your favorite color?");
console.log(userColor);
let elColor = document.getElementById ("color");
elColor.innerHTML = userColor;

let userFood = prompt(userColor + " is a nice color. " + "What would you say is your favorite food?")
console.log(userFood);
let elFood = document.getElementById ("food")
elFood.innerHTML =userFood;

let userTotal = alert(userName + "from " + userHome + ", " +""+ userColor + " is one of my favorite colors and I also enjoy eating " + userFood +"." + " It has been great getting to know you. Thank you for stopping by.")

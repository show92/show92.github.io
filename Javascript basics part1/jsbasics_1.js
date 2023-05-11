function myFunction() {
    document.getElementById("demo2").innerHTML = "Paragraph changed to I am in Trichy";
  }
  document.write("The addition :",6 + 6);
  document.getElementById("demo").innerHTML = 8 + 8;
  document.getElementById("demo1").innerHTML = 8 + 6;
  window.alert("Welcome to our world");
  console.log("How is it!");
 //var 
  var  x = 10;
  // Here x is 10
  alert(x);
  console.log(x);
  {  
  var x = 2;
  // Here x is 2
  console.log(x);
  }
  
  // Here x is 2
  document.getElementById("demo3").innerHTML = x;
  //let
  let  y = 100;
  // Here y is 100
  alert(y);
  console.log(y);
  {  
  let y = 23;
  console.log(y);
  // Here y is 23
  }
  
  // Here y is 100
  document.getElementById("demo4").innerHTML = y;
  //const variable
  const PI = 3.141592653589793;
    // This will give an error
const new_PI = PI + 10; 
console.log(PI);
document.getElementById("demo5").innerHTML = new_PI;

//const array

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
console.log(cars[1]);
alert((cars[0]));

// You can add an element:
cars.push("Audi");
document.getElementById("demo6").innerHTML = cars[3];


//constant object

const food={color:"red", type:"indian" , time:"lunch"};

// You can change an element:
food.color = "white";
console.log(food.color);
alert((food.type))

// You can add an element:
food.maker="home";
document.getElementById("demo7").innerHTML = food.maker;
//Hoisting
myName="showmia";
var myName;
console.log(myName);
//







  


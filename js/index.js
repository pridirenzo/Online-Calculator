let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");
let number8 = document.getElementById("number8");
let number9 = document.getElementById("number9");
let number10 = document.getElementById("number10");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let percentage = document.getElementById("percentage");
let equals = document.getElementById("equals");
let slash = document.getElementById("slash");
let numbersArray = [];
let wordsArray = []; 
let total = 0;
let anyNumber = document.getElementsByClassName("number");
let title = document.getElementById("title");
let clear = document.getElementById("clear-button");

clear.addEventListener("click", ()=>{
   numbersArray = [];
   total = 0;
   title.textContent = "Go! Make your calculations.";
});

number1.addEventListener("click", function(){
    numbersArray.push(parseInt(number1.value));
    title.textContent = number1.value;
    console.log(numbersArray);
   //  for(let x = 0; x<wordsArray.length; x++){
   //    title.innerHTML = wordsArray[x];
   //  };
    
});


number2.addEventListener("click", function(){
     numbersArray.push(parseInt(number2.value));
     console.log(numbersArray);
     title.textContent = number2.value;
 });

 number3.addEventListener("click", function(){
    numbersArray.push(parseInt(number3.value));
    console.log(numbersArray);
    title.textContent = number3.value; 
 });

 number4.addEventListener("click", function(){
    numbersArray.push(parseInt(number4.value));
    console.log(numbersArray);
    title.textContent = number4.value;
 });


 number5.addEventListener("click", function(){
    numbersArray.push(parseInt(number5.value));
    console.log(numbersArray);
    title.textContent = number5.value; 
 });

 number6.addEventListener("click", function(){
    numbersArray.push(parseInt(number6.value));
    console.log(numbersArray);
    title.textContent = number6.value; 
 });


 number7.addEventListener("click", function(){
    numbersArray.push(parseInt(number7.value));
    console.log(numbersArray);
    title.textContent = number7.value; 
});


 number8.addEventListener("click", function(){
    numbersArray.push(parseInt(number8.value));
    console.log(numbersArray);
    title.textContent = number8.value; 
 });
 number9.addEventListener("click", function(){
    numbersArray.push(parseInt(number9.value));
    console.log(numbersArray);
    title.textContent = number9.value; 
 });

 number10.addEventListener("click", function(){
    numbersArray.push(parseInt(number10.value));
    console.log(numbersArray);
    title.textContent = number10.value; 
 });

 plus.addEventListener("click", function(){
   title.textContent = "+";
   
 });
 
equals.addEventListener("click", ()=>{
   for(let x = 0; x<numbersArray.length;x++){
      total = total + numbersArray[x];
      title.innerHTML = "TOTAL: " + total;
   };
      title.style.color = "white";
});
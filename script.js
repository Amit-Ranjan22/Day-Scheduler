let currentDateTime = function(){
    $("#currentDay").text(moment().format("dddd, MM-Do-YYYY, h:mm:ss a"));
};
setInterval(currentDateTime, 1000);

let storageInput1 = document.querySelector(".textBox1");
let storageInput2 = document.querySelector(".textBox2");
let storageInput3 = document.querySelector(".textBox3");
let storageInput4 = document.querySelector(".textBox4");
let storageInput5 = document.querySelector(".textBox5");
let storageInput6 = document.querySelector(".textBox6");
let storageInput7 = document.querySelector(".textBox7");
let storageInput8 = document.querySelector(".textBox8");

let text1 = document.querySelector(".savedText1");
let text2 = document.querySelector(".savedText2");
let text3 = document.querySelector(".savedText3");
let text4 = document.querySelector(".savedText4");
let text5 = document.querySelector(".savedText5");
let text6 = document.querySelector(".savedText6");
let text7 = document.querySelector(".savedText7");
let text8 = document.querySelector(".savedText8");

let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");
let button4 = document.querySelector(".btn4");
let button5 = document.querySelector(".btn5");
let button6 = document.querySelector(".btn6");
let button7 = document.querySelector(".btn7");
let button8 = document.querySelector(".btn8");

let clearButton1 = document.querySelector(".clrbtn1");
let clearButton2 = document.querySelector(".clrbtn2");
let clearButton3 = document.querySelector(".clrbtn3");
let clearButton4 = document.querySelector(".clrbtn4");
let clearButton5 = document.querySelector(".clrbtn5");
let clearButton6 = document.querySelector(".clrbtn6");
let clearButton7 = document.querySelector(".clrbtn7");
let clearButton8 = document.querySelector(".clrbtn8");

let storedInput1 = localStorage.getItem("textinput1");
let storedInput2 = localStorage.getItem("textinput2");
let storedInput3 = localStorage.getItem("textinput3");
let storedInput4 = localStorage.getItem("textinput4");
let storedInput5 = localStorage.getItem("textinput5");
let storedInput6 = localStorage.getItem("textinput6");
let storedInput7 = localStorage.getItem("textinput7");
let storedInput8 = localStorage.getItem("textinput8");

//setting local storage for 1st row of table
if(storageInput1){
     text1.textContent = storedInput1;
}

storageInput1.addEventListener("input", function(letter){
    text1.textContent = letter.target.value;
});

let saveToLocalStorage1 = function(){
    localStorage.setItem("textinput1", text1.textContent)
}

button1.addEventListener("click", saveToLocalStorage1);

clearButton1.addEventListener("click", function(){
    text1.textContent = "";
    localStorage.setItem("textinput1", text1.textContent);
});

//setting local storage for 2nd row of table
if(storageInput2){
     text2.textContent = storedInput2;
}

storageInput2.addEventListener("input", function(letter){
    text2.textContent = letter.target.value;
});

let saveToLocalStorage2 = function(){
    localStorage.setItem("textinput2", text2.textContent)
}

button2.addEventListener("click", saveToLocalStorage2);

clearButton2.addEventListener("click", function(){
    text2.textContent = "";
    localStorage.setItem("textinput2", text2.textContent);
});

//setting local storage for 3rd row of table
if(storageInput3){
    text3.textContent = storedInput3;
}

storageInput3.addEventListener("input", function(letter){
    text3.textContent = letter.target.value;
});

let saveToLocalStorage3 = function(){
    localStorage.setItem("textinput3", text3.textContent)
}

button3.addEventListener("click", saveToLocalStorage3);

clearButton3.addEventListener("click", function(){
    text3.textContent = "";
    localStorage.setItem("textinput3", text3.textContent);
});

//setting local storage for 4th row of table
if(storageInput4){
    text4.textContent = storedInput4;
}

storageInput4.addEventListener("input", function(letter){
    text4.textContent = letter.target.value;
});

let saveToLocalStorage4 = function(){
    localStorage.setItem("textinput4", text4.textContent)
}

button4.addEventListener("click", saveToLocalStorage4);

clearButton4.addEventListener("click", function(){
    text4.textContent = "";
    localStorage.setItem("textinput4", text4.textContent);
});

//setting local storage for 5th row of table
if(storageInput5){
    text5.textContent = storedInput5;
}

storageInput5.addEventListener("input", function(letter){
    text5.textContent = letter.target.value;
});

let saveToLocalStorage5 = function(){
    localStorage.setItem("textinput5", text5.textContent)
}

button5.addEventListener("click", saveToLocalStorage5);

clearButton5.addEventListener("click", function(){
    text5.textContent = "";
    localStorage.setItem("textinput5", text5.textContent);
});

//setting local storage for 6th row of table
if(storageInput6){
    text6.textContent = storedInput6;
}

storageInput6.addEventListener("input", function(letter){
    text6.textContent = letter.target.value;
});

let saveToLocalStorage6 = function(){
    localStorage.setItem("textinput6", text6.textContent)
}

button6.addEventListener("click", saveToLocalStorage6);

clearButton6.addEventListener("click", function(){
    text6.textContent = "";
    localStorage.setItem("textinput6", text6.textContent);
});

//setting local storage for 7th row of table
if(storageInput7){
    text7.textContent = storedInput7;
}

storageInput7.addEventListener("input", function(letter){
    text7.textContent = letter.target.value;
});

let saveToLocalStorage7 = function(){
    localStorage.setItem("textinput7", text7.textContent)
}

button7.addEventListener("click", saveToLocalStorage7);

clearButton7.addEventListener("click", function(){
    text7.textContent = "";
    localStorage.setItem("textinput7", text7.textContent);
});

//setting local storage for 8th row of table

if(storageInput8){
    text8.textContent = storedInput8;
}

storageInput8.addEventListener("input", function(letter){
    text8.textContent = letter.target.value;
});

let saveToLocalStorage8 = function(){
    localStorage.setItem("textinput8", text8.textContent)
}

button8.addEventListener("click", saveToLocalStorage8);

clearButton8.addEventListener("click", function(){
    text8.textContent = "";
    localStorage.setItem("textinput8", text8.textContent);
});

//using for-loop to assign different color for past, present & future timestamp
let rowsArr = $(".eachRow");
for (let z = 0; z < rowsArr.length; z++){
    let rowsEl = parseInt(rowsArr[z].id);
    let currentHour = parseInt(moment().format("H"));
    if (rowsEl < currentHour){
        setColor(rowsArr[z], "#ccc5b9");
    } else if (rowsEl > currentHour){
        setColor(rowsArr[z], "#4f772d");
    } else {
         setColor(rowsArr[z], "#b7094c");
    }
};

//writing setColor function
function setColor(element, color) {
  element.style.backgroundColor = color;
};
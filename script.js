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

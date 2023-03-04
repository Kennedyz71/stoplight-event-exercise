// let lightOn = <textContent> bulb on

// console.log(controls.firstElementChild);
// console.log(buttonControls.children[0]);

let stopButton = document.getElementById("stopButton");
let redLight = document.getElementById("stopLight");
stopButton.addEventListener("click", function () {
  redLight.classList.toggle("stop");
  console.log("STOP");
});

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
  console.log("SLOW");
});

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
  console.log("GO");
});

stopButton.addEventListener("mousenter", () => {
  buttonLog("stop");
});

let buttons = document.querySelectorAll(".button");

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", function (event) {
    // console.log(event);
    buttonLog(event.target.innerText);
    // event.target.classList.toggle(event.target.innerText.toLowerCase());
  });
}
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseleave", function (event) {
    // console.log(event);
    buttonLogOut(event.target.innerText);
  });
}

redLight.addEventListener("mouseenter", (event) => {
  redLight.classList.toggle("stop");
});

function buttonLog(buttonName) {
  console.log(`Enter ${buttonName} button`);
}

function buttonLogOut(buttonName) {
  console.log(`Left ${buttonName} button`);
}

var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
console.log(buttons);
var value = "";
for (var i of buttons) {
  i.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log(buttontext);
    if (buttontext === "X") {
      buttontext = "*";
      value += buttontext;
      screen.value = value;
    } else if (buttontext === "C") {
      value = "";
      screen.value = value;
    } else if (buttontext === "=") {
      screen.value = eval(value);
    } else {
      value += buttontext;
      screen.value = value;
    }
  });
}

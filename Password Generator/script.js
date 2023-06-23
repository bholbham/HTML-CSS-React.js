let strengthSymbol = document.querySelector(".symbol");

let dashboard = document.querySelector(".content");
let generatePassword = document.querySelector(".btn");

let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");

let range = document.querySelector("#slider");
let val = document.querySelector("#slider-output");

range.oninput = function () {
  val.innerHTML = this.value;
};
generatePassword.addEventListener("click", function () {
  createRandom(val.innerHTML);
});
function createRandom(length) {
  let res = "";
  let buffer =
    "ABCDEDFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*";
  let container = buffer.split(" ");
  let a1 = (a2 = a3 = a4 = false);
  for (let i = 0; i < length; i++) {
    if (uppercase.checked) {
      let str = container[0];
      res += str.charAt(Math.floor(Math.random() * str.length));
      a1 = true;
    }
    if (lowercase.checked) {
      let str = container[1];
      res += str.charAt(Math.floor(Math.random() * str.length));
      a2 = true;
    }
    if (numbers.checked) {
      let str = container[2];
      res += str.charAt(Math.floor(Math.random() * str.length));
      a3 = true;
    }
    if (symbols.checked) {
      let str = container[3];
      res += str.charAt(Math.floor(Math.random() * str.length));
      a4 = true;
    }
  }
  dashboard.innerHTML = res;
  if (a1 && a2 && a3 && a4) {
    strengthSymbol.style.backgroundColor = "light-green";
  } else {
    strengthSymbol.style.backgroundColor = "red";
  }
}

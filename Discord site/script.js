// // let headings = document.querySelectorAll("h2");
// // console.log(headings);

// // for (let i = 0; i < headings.length; i++) {
// //   headings[i].addEventListener("click", function () {
// //     headings[i].style.color = "green";
// //   });
// // }

// function hi() {
//   console.log("hello");
// }
// function bye() {
//   console.log("bye");
//   hi();
// }
// hi();
// bye();

async function print() {
  console.log("abcd");
  return 7;
}
console.log(print());

// new Promise(function (resolve, reject) {
//   function print() {
//     console.log("abcd");
//     return 7;
//   }
//   resolve(print());
// }).then(function (value) {
//   console.log(value);
// });

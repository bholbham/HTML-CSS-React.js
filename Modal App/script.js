let profile = document.querySelector(".share-via");
let sharebtn = document.querySelector(".share-profile");
let followbtn = document.querySelector(".follow-btn");

let card = document.querySelector(".card");

let cancel = document.querySelector(".cross-btn");

sharebtn.addEventListener("click", function () {
  profile.style.visibility = "visible";
  card.style.opacity = 0.3;
  profile.style.opacity = 1;
});
followbtn.addEventListener("click", function () {
  profile.style.visibility = "visible";
  card.style.opacity = 0.3;
  profile.style.opacity = 1;
});

cancel.addEventListener("click", function () {
  profile.style.visibility = "hidden";
  card.style.opacity = 1;
});

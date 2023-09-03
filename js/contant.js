$("#nav-Contact").click(function () {
  $("#home-inner").css("display", "none");
  $("#search").css("display", "none");
  $("#area").css("display", "none");
  $("#Ingredients").css("display", "none");
  $("#Contact").css("display", "block");
});
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let passInput = document.getElementById("pass");
let mailInput = document.getElementById("mail");
let ageInput = document.getElementById("age");
let repassInput = document.getElementById("repass");
let submitBtnInput = document.getElementById("submitBtn");

// if (nameInput.value == "") {
//   console.log("hello");
// }

$("#nav-Area").click(function () {
  $("#home").css("display", "none");
  $("#Categories").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#search").css("display", "none");
  $("#Contact").css("display", "none");
  $("#area").css("display", "block");
});
let areaArray = [];
async function getArea() {
  let Adata = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  //   console.log(Adata);
  let fdArea = await Adata.json();
  //   console.log(fdArea);
  areaArray = fdArea.meals;
  //   console.log(areaArray);
  displayArea();
}
getArea();

function displayArea() {
  let cartonaa = ``;
  for (let i = 0; i < areaArray.length; i++) {
    cartonaa += `<div class="col-md-3 mb-3 text-center text-white Areaa">
<div class="Areaa">
  <i class="fa-solid fa-house-laptop fa-4x"></i>
</div>
<h3>${areaArray[i].strArea}</h3>
</div>`;
  }
  document.getElementById("areaData").innerHTML = cartonaa;
}
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});
// =====================================================================

// let areainfo = [];
// async function getArea(city) {
//   let Adatainfo = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`
//   );
//   //   console.log(Adata);
//   let fdAreainfo = await Adatainfo.json();
//   //   console.log(fdArea);
//   areainfo = fdAreainfo.meals;
//   //   console.log(areaArray);
//   displayAreainfo();
// }

// function displayAreainfo() {
//   let cartonaa = ``;
//   for (let i = 0; i < areainfo.length; i++) {
//     cartonaa += `<div class="col-md-3 mb-3 text-center text-white Areaa">
//     <div class="demo8"> <img id="y" class="w-100" src="${alldata[i].strMealThumb}" alt="" />
//     <div class="layer8"><h6 class="fs-2 ps-3">${alldata[i].strMeal}</h6></div></div>
// </div>`;
//   }
//   document.getElementById("data8").innerHTML = cartonaa;
//   let demo0 = document.querySelectorAll(".demo8");
//   for (let i = 0; i < demo0.length; i++) {
//     demo[i].addEventListener("click", function (e) {
//       //   console.log("hello");
//       //   console.log(e.target);
//       $("#home").css("display", "none");
//       $("#Categories").css("display", "none");
//       $("#home-inner").css("display", "none");
//       $("#area-inner").css("display", "block");
//     });
//   }
// }

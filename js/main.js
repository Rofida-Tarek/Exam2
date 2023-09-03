$(".open ,.fa-bars").click(function () {
  let sidebarinnerWidth = $("#navBar").innerWidth();
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({ left: -sidebarinnerWidth }, 1000);
    $(".links").hide(1000);
    $("#icon2").css("display", "block");
    $(".open").css("display", "none");
  } else {
    $("#sideBar").animate({ left: "0px" }, 1000);
    $("#icon2").css("display", "none");
    $(".open").css("display", "block");
    $(".links").slideDown(2000);
  }
});
$("#home-inner").css("display", "none");
$("#search").css("display", "none");
$("#area").css("display", "none");
$("#Ingredients").css("display", "none");
$("#Contact").css("display", "none");
let alldata = [];
async function getData() {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let finalydata = await data.json();
  let meals = finalydata.meals;
  alldata = meals;
  dispalydata();
}
getData();
function dispalydata() {
  let cartonaa = ``;
  for (let i = 0; i < alldata.length; i++) {
    cartonaa += `<div class=" col-md-3 mb-3">
    <div class="demo1"> <img id="y" class="w-100" src="${alldata[i].strMealThumb}" alt="" />
    <div class="layer1"><h6 class="fs-2 ps-3">${alldata[i].strMeal}</h6></div></div>
      </div>`;
  }
  document.getElementById("rowData").innerHTML = cartonaa;
  let demo = document.querySelectorAll(".demo1");
  for (let i = 0; i < demo.length; i++) {
    demo[i].addEventListener("click", function (e) {
      //   console.log("hello");
      //   console.log(e.target);
      $("#home").css("display", "none");
      $("#Categories").css("display", "none");
      $("#home-inner").css("display", "block");
    });
  }
}
$("#nav-search").click(function () {
  $("#home").css("display", "none");
  $("#Categories").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#search").css("display", "block");
});
$("#nav-Contact").click(function () {
  $("#home").css("display", "none");
  $("#Categories").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#Contact").css("display", "block");
});
// ===============================Recipes Api=========================//
let alldata2 = [];
async function getdata3() {
  let data3 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let finaldata3 = await data3.json();
  let meals3 = finaldata3.meals;
  //   console.log(meals3);
  alldata2 = meals3;
  dispalydata3();
}
getdata3();
function dispalydata3() {
  let cartonaa = ``;
  for (let i = 0; i < alldata2.length; i++) {
    cartonaa += `<div class="col-4 text-white">
    <img class="w-100 rounded-3" src="${alldata2[i].strMealThumb}" alt="" />
    <h2 class="text-white">${alldata2[i].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white">
    <h2>Instructions</h2>
    <p>${alldata2[i].strInstructions}</p>
    <h3><span>Area</span>: ${alldata2[i].strArea}</h3>
    <h3><span>Category</span>: ${alldata2[i].strCategory}</h3>
    <h3>Recipes :
    </h3>
    <ul class="list-unstyled d-flex flex-wrap">
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure1 + alldata2[i].strIngredient1
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure2 + alldata2[i].strIngredient2
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure3 + alldata2[i].strIngredient3
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure4 + alldata2[i].strIngredient4
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure5 + alldata2[i].strIngredient5
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure6 + alldata2[i].strIngredient6
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure7 + alldata2[i].strIngredient7
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure8 + alldata2[i].strIngredient8
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure9 + alldata2[i].strIngredient9
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure10 + alldata2[i].strIngredient10
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure11 + alldata2[i].strIngredient11
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure12 + alldata2[i].strIngredient12
      }</li>
      <li class="alert alert-info m-2 p-1">${
        alldata2[i].strMeasure13 + alldata2[i].strIngredient13
      }</li>
    
     
    </ul>
    <h3>Tags :
    </h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
      <li class="alert alert-danger m-2 p-1">${alldata2[i].strTags}</li>
    </ul>
    <a
      target="_blank"
      href="${alldata2[i].strSource}"
      class="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${alldata2[i].strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>
  </div>`;
  }
  document.getElementById("data3").innerHTML = cartonaa;
  //   $("#home-inner").css("display", "none");
}
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});

$("#nav-search").click(function () {
  $("#home").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#Ingredients").css("display", "none");
  $("#Contact").css("display", "none");
  // $("#search-img").css("display", "block");
});
let alldata4 = [];
async function getdata3(NameSearch) {
  let data4 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${NameSearch}`
  );
  let finaldata4 = await data4.json();
  let meals4 = finaldata4.meals;
  //   console.log(meals3);
  alldata4 = meals4;
  dispalydata4();
}
let searchInput = document.getElementById("search-By-Name");
// console.log(searchInput);
searchInput.addEventListener("keyup", function () {
  //   console.log(this.value);
  getdata3(this.value);
});
function dispalydata4() {
  var cartonaa = ``;
  for (let i = 0; i < alldata4.length; i++) {
    cartonaa += `<div class=" col-md-3 mb-3">
    <div class="demo4"> <img class="w-100" src="${alldata4[i].strMealThumb}" alt="" />
    <div class="layer4"><h6 class="fs-2 ps-3">${alldata4[i].strMeal}</h6></div></div>
      </div>`;
  }
  document.getElementById("search-img").innerHTML = cartonaa;
}
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});

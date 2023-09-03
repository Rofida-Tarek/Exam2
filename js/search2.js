$("#nav-search").click(function () {
  $("#home").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#Ingredients").css("display", "none");
  $("#Contact").css("display", "none");
  // $("#search-img").css("display", "block");
});
let allsearchdata = [];
async function getdata7(nameSearch) {
  let data7 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${nameSearch}`
  );
  let finaldata7 = await data7.json();
  let meals7 = finaldata7.meals;
  //   console.log(meals3);
  allsearchdata = meals7;
  dispalydata7();
}

let searchInput2 = document.getElementById("search-By-fletter");
// console.log(searchInput);
searchInput2.addEventListener("keyup", function () {
  //   console.log(this.value);
  getdata7(this.value);
});
function dispalydata7() {
  var cartonaa = ``;
  for (let i = 0; i < allsearchdata.length; i++) {
    cartonaa += `<div class=" col-md-3 mb-3">
    <div class="demo4"> <img class="w-100" src="${allsearchdata[i].strMealThumb}" alt="" />
    <div class="layer4"><h6 class="fs-2 ps-3">${allsearchdata[i].strMeal}</h6></div></div>
      </div>`;
  }
  document.getElementById("search-img2").innerHTML = cartonaa;
}
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});

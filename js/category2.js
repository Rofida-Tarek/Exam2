$("#nav-Categories").click(function () {
  $("#home").css("display", "none");
  $("#search").css("display", "none");
  $("#area").css("display", "none");
  $("#Contact").css("display", "none");
  $("#Categories").css("display", "block");
});
let Datacat = [];
async function getDatacat(m) {
  let datacat = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${m}`
  );
  let finalydatacat = await datacat.json();
  let mealscat = finalydatacat.meals;
  Datacat = mealscat;
  dispalydata2();
}
getDatacat();
function dispalydatacat() {
  let cartonaa = ``;
  for (let i = 0; i < Data.length; i++) {
    cartonaa += `<div class="col-md-3">
      <div class="democat">
      <img class="w-100 mb-4" src="${Datacat[i].strMealThumb}" alt="" />
      <div class="layer2 d-flex flex-column">
        <h3>${Datacat[i].strMeal}</h3>
     
      </div>
    </div>
  
      </div>`;
  }
  document.getElementById("Row2").innerHTML = cartonaa;
}
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});

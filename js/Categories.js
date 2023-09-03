$("#nav-Categories").click(function () {
  $("#home").css("display", "none");
  $("#search").css("display", "none");
  $("#area").css("display", "none");
  $("#Contact").css("display", "none");
  $("#Categories").css("display", "block");
});
let Data = [];
async function getData2() {
  let data2 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let finalydata2 = await data2.json();
  let meals2 = finalydata2.categories;
  Data = meals2;
  dispalydata2();
}
getData2();
function dispalydata2() {
  let cartonaa = ``;
  for (let i = 0; i < Data.length; i++) {
    cartonaa += `<div class="col-md-3">
    <div class="demo2">
    <img class="w-100 mb-4" src="${Data[i].strCategoryThumb}" alt="" />
    <div class="layer2 d-flex flex-column">
      <h3>${Data[i].strCategory}</h3>
      <p>
      ${Data[i].strCategoryDescription}
      </p>
    </div>
  </div>

    </div>`;
  }
  document.getElementById("Row").innerHTML = cartonaa;
}
// ==================================================================================
$(document).ready(function () {
  $("#loading").slideUp(1000);
  $("body").css("overflow", "auto");
});

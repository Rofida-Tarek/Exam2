$("#nav-Ingredients").click(function () {
  $("#home").css("display", "none");
  $("#Categories").css("display", "none");
  $("#home-inner").css("display", "none");
  $("#search").css("display", "none");
  $("#area").css("display", "none");
  $("#Contact").css("display", "none");
  $("#Ingredients").css("display", "block");
});

let IngredientsArray = [];
async function getIngredients() {
  let Ingredients = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let fIngredients = await Ingredients.json();
  //   console.log(fdArea);
  IngredientsArray = fIngredients.meals;
  //   console.log(areaArray);
  displayIngredients();
}
getIngredients();
function displayIngredients() {
  let cartonaa = ``;
  for (let i = 0; i < 18; i++) {
    cartonaa += `<div class="col-md-3 mb-3 text-center text-white Areaa">
  <div>
  <i class="fa-solid fa-drumstick-bite fa-4x"></i>
  </div>
  <h3>${IngredientsArray[i].strIngredient}</h3>
  <p class="clamp">${IngredientsArray[i].strDescription}</p>
  </div>`;
  }
  document.getElementById("ingradientData").innerHTML = cartonaa;
}

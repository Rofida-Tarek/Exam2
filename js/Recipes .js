// let alldata2 = [];
// async function getdata3() {
//   let data3 = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//   );
//   let finaldata3 = await data3.json();
//   let meals3 = finaldata3.meals;
//   //   console.log(meals3);
//   alldata2 = meals3;
//   dispalydata3();
// }
// getdata3();
// function dispalydata3() {
//   let cartonaa = ``;
//   for (let i = 0; i < alldata2.length; i++) {
//     cartonaa += `<div class="col-4">
//     <img class="w-100 rounded-3" src="${strMealThumb}" alt="" />
//     <h2>${strMeal}</h2>
//     <div class="col-md-8">
//     <h2>Instructions</h2>
//     <p>${strInstructions}</p>
//     <h3><span>Area</span>": ${strArea}</h3>
//     <h3><span>Category</span>: ${strCategory}</h3>
//     <h3>Recipes :
//     </h3>
//     <ul class="list-unstyled d-flex flex-wrap">
//       <li class="alert alert-info m-2 p-1">${strMeasure1 + strIngredient1}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure2 + strIngredient2}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure3 + strIngredient3}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure4 + strIngredient4}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure5 + strIngredient5}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure6 + strIngredient6}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure7 + strIngredient7}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure8 + strIngredient8}</li>
//       <li class="alert alert-info m-2 p-1">${strMeasure9 + strIngredient9}</li>
//       <li class="alert alert-info m-2 p-1">${
//         strMeasure10 + strIngredient10
//       }</li>
//       <li class="alert alert-info m-2 p-1">${
//         strMeasure11 + strIngredient11
//       }</li>
//       <li class="alert alert-info m-2 p-1">${
//         strMeasure12 + strIngredient12
//       }</li>
//       <li class="alert alert-info m-2 p-1">${
//         strMeasure13 + strIngredient13
//       }</li>

//     </ul>
//     <h3>Tags :
//     </h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">
//       <li class="alert alert-danger m-2 p-1">${strTags}</li>
//     </ul>
//     <a
//       target="_blank"
//       href="${strSource}"
//       class="btn btn-success"
//       >Source</a
//     >
//     <a
//       target="_blank"
//       href="${strYoutube}"
//       class="btn btn-danger"
//       >Youtube</a
//     >
//   </div>
//   </div>`;
//   }
//   document.getElementById("data3").innerHTML = cartonaa;
// }

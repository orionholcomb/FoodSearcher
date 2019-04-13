var searchFood;
//console.log("ttt");
// Might want to use this wiht typeOf var stringValue = "";


var displayResults = function(data) {
    
    $('#servId').text(data.hits[0].fields.item_name);
    $("#calories").text("Calories: " + data.hits[0].fields.nf_calories + " kcal");
    $("#carbs").text("Carbohydrates: " + data.hits[0].fields.nf_total_carbohydrate + " g");
    $("#protein").text("Proteins: " + data.hits[0].fields.nf_protein + " g");
    $("#sodium").text("Sodium: " + data.hits[0].fields.nf_sodium + " mg");
    
  };

$("#runSearch").on("click", function(event) {
  /*This line 13 allows us to take advantage of the HTML "submit" property
        This way we can hit enter on the keyboard and it registers the search
        (in addition to clicks). Prevents the page from reloading on form submit.*/

  event.preventDefault();

  searchFood = $("#mealText").val().trim();

  //console.log(searchFood);

  // The display Results function takes data returned by nutritionix.com and displays to the HTML body

  var queryURL =
    "https://api.nutritionix.com/v1_1/search/" +
    searchFood +
    "?results=0:1&fields=item_name,nf_calories,nf_total_carbohydrate,nf_protein,nf_sodium&appId=30e01e04&appKey=bf1283fb7b11b7f059bb34d69a04566c";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //console.log(response.hits[0].fields.nf_calories);

    displayResults(response);

    var nfCal = response.hits[0].fields.nf_calories;    

    $("#searchResults").text(response.hits[0].fields.nf_calories);
    
  });
});

//displayResults();
var maleWeight = $("#userWeight")
  .val()
  .trim();

/* The following equivalencies were gathered from web research and are approximations; MET = metabolic equivalent:
- jogging @ 4mph (MET) = 6
- swimming mederately (MET) = 6
- biking @ 12mph (MET) = 8 */

$(".exerBtn").on("click", timeCalc);

function timeCalc() {
  var exerciseCalc = $(this).attr("data-name");

  if (exerciseCalc === "jog") {
    var met = 6;
  } else if (exerciseCalc === "swim") {
    var met = 6;
  } else if (exerciseCalc === "bike") {
    var met = 8;
  }

  console.log(this);
  console.log(exerciseCalc);

  
}

// var returnCalc =
// (parseInt(caloriesBurned) / ((met * parseInt(maleWeight)) / 2.2));

// $("#gamePlan").text(returnCalc);

// console.log(caloriesBurned);
// console.log(maleWeight);
// console.log(met);

//console.log(caloriesBurned);

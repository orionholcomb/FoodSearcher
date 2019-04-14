//var maleWeight = $("userWeight").val().trim();

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

  var caloriesBurned = $("#searchResults")
    .val()
    .trim();

  var returnCalc =
    (parseInt(caloriesBurned) / ((met * parseInt(maleWeight)) / 2.2));

  $("#gamePlan").text(returnCalc);

  console.log(caloriesBurned);
  console.log(maleWeight);
  console.log(met);
}


//console.log(caloriesBurned);

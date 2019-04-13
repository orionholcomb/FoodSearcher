//var maleWeight = $("userWeight").val().trim();


/* The following equivalencies were gathered from web research and are approximations; MET = metabolic equivalent:
- jogging @ 4mph (MET) = 6
- swimming mederately (MET) = 6
- biking @ 12mph (MET) = 8 */

$(".exerBtn").on("click", timeCalc)

function timeCalc() {

    console.log(this);
    console.log(exerciseCalc);

    var exerciseCalc = $(this).attr('data-name');
    

    var caloriesBurned = $('#searchResults').val().trim();


//var timeCalc = (caloriesBurned)/(/*MET*/ * (userWeight/2.2))

};




//console.log(caloriesBurned);
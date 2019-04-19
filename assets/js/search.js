var searchFood;

//displayResults function takes the data response from the ajax call and displays them to the browser page
var displayResults = function(data) {
  $('#servId').text(data.hits[0].fields.item_name);

  $('#calories').text(
    'Calories: ' + Math.round(data.hits[0].fields.nf_calories) + ' kcal'
  );

  $('#carbs').text(
    'Carbohydrates: ' + data.hits[0].fields.nf_total_carbohydrate + ' g'
  );

  $('#protein').text('Proteins: ' + data.hits[0].fields.nf_protein + ' g');

  $('#sodium').text('Sodium: ' + data.hits[0].fields.nf_sodium + ' mg');
};

$('#runSearch').on('click', function(event) {
  /*This line 13 allows us to take advantage of the HTML "submit" property
    This way we can hit enter on the keyboard and it registers the search
    (in addition to clicks). Prevents the page from reloading on form submit.*/

  event.preventDefault();

  searchFood = $('#mealText')
    .val()
    .trim();

  //The display Results function takes data returned by nutritionix.com and displays to the HTML body
  var queryURL =
    'https://api.nutritionix.com/v1_1/search/' +
    searchFood +
    '?results=0:1&fields=item_name,nf_calories,nf_total_carbohydrate,nf_protein,nf_sodium&appId=30e01e04&appKey=bf1283fb7b11b7f059bb34d69a04566c';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    displayResults(response);

    //caloric value requiered for use in the activity time below on line 73
    var nfCal = response.hits[0].fields.nf_calories;

    //Creates an on click event listener for the exercise buttons
    $('.exerBtn').on('click', timeCalc);

    /*This line 51 allows us to take advantage of the HTML "submit" property
     This way we can hit enter on the keyboard and it registers the search
     (in addition to clicks). Prevents the page from reloading on form submit.*/
    event.preventDefault();

    //This function returns minute requirement for the individual exercise activities
    function timeCalc() {
      //Variable grabbing the data-name attribute of the excercise buttons
      var exerciseCalc = $(this).attr('data-name');

      //Variable for user weight input
      var weight = $('#userWeight')
        .val()
        .trim();

      //Sets the 'metabolic equivlent' values for each exercise button
      if (exerciseCalc === 'jog') {
        var met = 7;
      } else if (exerciseCalc === 'swim') {
        var met = 6;
      } else if (exerciseCalc === 'bike') {
        var met = 8;
      }

      /*Arithmetic function variable that returns the amount of workout minutes required 
      to lose the specified meals caloric intake.*/
      var returnCalc = (nfCal / ((met * parseInt(weight)) / 2.2)) * 100;

      //Result statement for the requested exercise activity button
      $('.gamePlan').text(
        'In order to burn the amount of calories you consumed by eating this meal, you have to  ' +
          exerciseCalc +
          ' at a relaxed pace for  ' +
          Math.round(returnCalc) +
          ' minutes  '
      );

      //Statement that appears after the user clicks desired exercise activity
      // $('#findInstr').text("Enter your zip code, and let's workout!");
    }
  });
});

var searchFood;
//console.log("ttt");
// Might want to use this wiht typeOf var stringValue = "";


    $("#runSearch").on("click", function(event) {

        /*This line 13 allows us to take advantage of the HTML "submit" property
        This way we can hit enter on the keyboard and it registers the search
        (in addition to clicks). Prevents the page from reloading on form submit.*/


        event.preventDefault();


        searchFood = $('#mealText').val().trim();

        console.log(searchFood);

        var queryURL = 
        "https://api.nutritionix.com/v1_1/search/" + searchFood + "?results=0:1&fields=item_name,nf_calories,nf_calories_from_fat&appId=30e01e04&appKey=bf1283fb7b11b7f059bb34d69a04566c";

        $.ajax({
            url: queryURL,
            method: "GET",
          }).then (function(response){

              console.log(response);
              console.log(response.hits[0].fields.nf_calories);
              
              $('#calories').text(response.hits[0].fields.nf_calories);

          });

          
        });
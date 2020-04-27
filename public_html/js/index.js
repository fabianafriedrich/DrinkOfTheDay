/* 
    Created on : 26-Apr-2020, 14:30:00
    Author     : fabiana
*/

//This function sends a AJAX GET HTTP request
function loadDrink() {
  $.ajax({
    async: true,
    crossDomain: true,
    url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
    method: "GET",
    headers: {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "072e87e13bmsh2c0a8d4df7fec82p199840jsn13a009ca1adc"
    },
//This function will be called if the request succeeds. The function gets the data returned from the server,
    success: function(data) {
      console.log(data.drinks[0].strDrinkThumb);
      //Populating the elements on output according it's id on index.html page 
      $('#drink').val(data.drinks[0].strDrink);
      $('#alcoholic').val(data.drinks[0].strAlcoholic);
      $('#category').val(data.drinks[0].strCategory);
      $('#glass').val(data.drinks[0].strGlass);
      $('#img').attr('src', data.drinks[0].strDrinkThumb);
      
      
      //Array to get all the ingredients from the public API
      const ingredients = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, 
        data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5,
        data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, 
        data.drinks[0].strIngredient9, data.drinks[0].strIngredient10, data.drinks[0].strIngredient11,
        data.drinks[0].strIngredient12, data.drinks[0].strIngredient13, data.drinks[0].strIngredient14,
        data.drinks[0].strIngredient15];
      
        var strIngredients = "Ingredients: ";
        //Looping each ingredient and checking if its not null, to populate all the ingridients on the var strIngredients
      $.each(ingredients, function(index, value){
          if(value !== null){
              strIngredients += (value + ", ");
          }else{
              return false;
          }
        });
        
        //Populating the elements on output according it's id on index.html page 
       $("#ingredients").val(strIngredients);
       
        //Array to get all the measures from the public API
       const measures = [data.drinks[0].strMeasure1, data.drinks[0].strMeasure2, data.drinks[0].strMeasure3,
       data.drinks[0].strMeasure4, data.drinks[0].strMeasure5, data.drinks[0].strMeasure6, data.drinks[0].strMeasure7,
       data.drinks[0].strMeasure8, data.drinks[0].strMeasure9, data.drinks[0].strMeasure10, data.drinks[0].strMeasure11,
       data.drinks[0].strMeasure12, data.drinks[0].strMeasure13, data.drinks[0].strMeasure14, data.drinks[0].strMeasure15];
      
      var strMeasures = "Measures: ";
      //Looping each ingredient and checking if its not null, to populate all the measures on the var strMeasures
      $.each(measures, function(index, value){
            if(value !== null){
                strMeasures += (value + ", ");
            }else{
                return false;
            }        
        });
        
       //Populating the elements on output according it's id on index.html page 
      $("#measures").val(strMeasures);
      
       //Getting the instructions and Populating the elements on output according it's id on index.html page
      var strInstruction ="";
      strInstruction += ("Instructions " + data.drinks[0].strInstructions);
      $("#instructions").val(strInstruction);
    },
    //Error handling
   error: function(data){
     console.log(data);
     const message = "Something went wrong. Connection or API might be down";
     console.log(message);
     //showing an alert in case it can't connect or if it's something wrong with the API
     alert(message);
    }

  });
  
}




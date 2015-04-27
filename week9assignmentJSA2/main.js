/*$(function() {
    
        function requestFile(url){
            $.ajax(
                {
                    url: url, 
                    cache: false,
                    dataType:"json",
                    success: function(data){
                            $("#fname").html( data.firstname);
                            $("#lname").html( data.lastname);
                       // $("#ajaxcontainer").html(data);
                    }
                }
            );
        }
             $("#ajaxrequest").click(function(){
            requestFile("data.json");
        }
         )
            
})*/

$(function() {
  
     
  // hide the story from view
  $("#story").hide();
    
    console.log("whee!")

  // ---- event handler ---- //
  $("#ajaxrequest").click(function(e) {

    // grab the values from the input boxes, then append them to the DOM
    $(".fname").empty().append($("input.fname").val());
    $(".wyfrom").empty().append($("input.wyfrom").val());
    $(".ycool").empty().append($("input.ycool").val());
    $(".dhome").empty().append($("input.dhome").val());
    $(".fcolor").empty().append($("input.fcolor").val());
    $(".fcar").empty().append($("input.fcar").val());
      $(".dcity").empty().append($("input.dcity").val());
      
      var input = $("input").val()
    // display value within the browser's JS console
    console.log(input)
    // add the value to the DOM
    $(".results").append(input);

    // show the story
    $("#story").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

});


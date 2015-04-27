//jQuery = $()


    //document.getElementById("span1").innerHTML "hi"; = the command below
    
    
    //$("#span1").html("hi");
    //$("#span2").html("bye");
    
    //$(".item").html("sup?");
/* function dayClick(){  
    var day= $("#dayText").val();
    
    $("#sentence .day").html(day);
    
    $("#sentence .day").css("background-color","tan");
    
    if( submit == "awesome") {
        $("#sentence .day").addClass("awesome");
        $("#sentence .day").removeClass("sad");
    }
    
}
    $("#dayCTA").click(dayClick);
}) */
    $(function(){

        function submitClick() {
            var name = $("#name").val();
            var food = $("#food").val();
            var color = $("#color").val();

            $("#nameText").html(name);
            $("#foodText").html(food);
            $("#result").css("background-color", color);
        }

        $("#submit").click(submitClick);
        
    });
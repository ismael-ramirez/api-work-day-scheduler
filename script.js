$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    $(".saveBtn").on("click", function () {
        console.log(this);
        var details = $(this).siblings(".todaysToDos").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, details);
    });

    
    $("#9 .todaysToDos").val(localStorage.getItem("9"));
    $("#10 .todaysToDos").val(localStorage.getItem("10"));
    $("#11 .todaysToDos").val(localStorage.getItem("11"));
    $("#12 .todaysToDos").val(localStorage.getItem("12"));
    $("#13 .todaysToDos").val(localStorage.getItem("13"));
    $("#14 .todaysToDos").val(localStorage.getItem("14"));
    $("#15 .todaysToDos").val(localStorage.getItem("15"));
    $("#16 .todaysToDos").val(localStorage.getItem("16"));
    $("#17 .todaysToDos").val(localStorage.getItem("17"));


    function CompareHours() {
        var currentHour = moment().hour();

        $(".hourBlock").each(function () {
            var planHour = parseInt($(this).attr("id"));
            console.log(planHour, currentHour);
            console.log($(this).attr("id"));

        
            if (planHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            }
            else if (planHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    CompareHours();
});


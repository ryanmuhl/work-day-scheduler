//Display Current Date at Jumbotron (using Moment.JS library)
var currentDateAndTime = (moment().format("MMMM D, YYYY"))
$("#currentDay").text(currentDateAndTime);


$(".saveBtn").click(function () {
    var value = $(this).siblings(".text-parent").children().val();
    var textDiv = $(this).siblings(".text-parent").attr("id")

    localStorage.setItem(textDiv, value)
});

$(document).ready(function(){
    $("#time9 textarea").val(localStorage.getItem("time9"));
    $("#time10 textarea").val(localStorage.getItem("time10"));
    $("#time11 textarea").val(localStorage.getItem("time11"));
    $("#time12 textarea").val(localStorage.getItem("time12"));
    $("#time1 textarea").val(localStorage.getItem("time1"));
    $("#time2 textarea").val(localStorage.getItem("time2"));
    $("#time3 textarea").val(localStorage.getItem("time3"));
    $("#time4 textarea").val(localStorage.getItem("time4"));
    $("#time5 textarea").val(localStorage.getItem("time5"));
    

})





//Function that loops through task container and updates div id to
// correspond with time.
//Function compairs current time to time on schedule via loop
//and adds color based on if statment.
function timeFlies() {
    var currentTime = moment().hour()
    console.log(currentTime)
    for (var i = 9; i < 18; i++) {
        var myTask = $("#time" + i)
        if (currentTime > i) {
            $(myTask).addClass("past");
        } else if (currentTime === i) {
            $(myTask).addClass("present");
        } else {
            $(myTask).addClass("future")
        }
    }
}

setInterval(function () {
    timeFlies();
}, 1000 * 60 * 60);
timeFlies()
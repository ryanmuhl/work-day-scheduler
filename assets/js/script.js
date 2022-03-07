//Display Current Date at Jumbotron (using Moment.JS library)
var currentDateAndTime = (moment().format("MMMM D, YYYY"))
$("#currentDay").text(currentDateAndTime);


//Function that loops through task container and updates div id to
// correspond with time.
//Function compairs current time to time on schedule via loop
//and adds color based on if statment.
function timeFlies () {
    var currentTime = moment().hour()
    console.log (currentTime)
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

setInterval(function(){
    timeFlies();},1000*60*60);
timeFlies ()
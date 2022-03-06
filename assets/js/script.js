//Display Current Date at Jumbotron
var currentDateAndTime = (moment().format("MMMM D, YYYY"))
$("#currentDay").text(currentDateAndTime);

var timeFlies = function () {
    var currentTime = moment().hour()
    console.log (currentTime)
    for (var i = 9; i < 18; i++) {
        var taskArea = $("#time" + i)
        if (currentTime > i) {
            $(taskArea).addClass("past");
        } else if (currentTime === i) {
            $(taskArea).addClass("present");
        } else {
            $(taskArea).addClass("future")
        }
    }
}

setInterval(function(){
    timeFlies();},1000*60*60);


timeFlies ()
// Display date from moment.js
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDate);

// For loop for every hour and if statement to display background color depending on the time of day
var timeCheck = function() {
    for (var i = 9; i < 18; i++) {
        var stringI = i.toString();
        if (i < moment().format("H")) {
            $("#" + stringI).addClass("past");
            $("#" + stringI).removeClass("present");
            $("#" + stringI).removeClass("future");
        }
        else if (i > moment().format("H")) {
            $("#" + stringI).removeClass("past");
            $("#" + stringI).removeClass("present");
            $("#" + stringI).addClass("future");
        }
        else {
            $("#" + stringI).removeClass("past");
            $("#" + stringI).addClass("present");
            $("#" + stringI).removeClass("future");
        }
    }
};
timeCheck();

// Make button save to local storage
$(".saveBtn").click(function() {
    var input = $(this).siblings(".description");
    var inputValue = input.val()
    console.log("input value " + inputValue);
    var hour = input.attr("id");
    localStorage.setItem(hour, inputValue);
});

// Loop through hours to get from local storage
var updateTasks = function() {
    for (var i = 9; i < 18; i++) {
        var stringI = i.toString();
        var savedInput = localStorage.getItem(stringI);
        $("#" + stringI).text(savedInput);
    }
};
updateTasks();
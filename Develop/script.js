// GIVEN I am using a daily planner to create a schedule

    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDate);

    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
var timeCheck = function() {
    for (var i = 9; i < 18; i++) {
        var stringI = i.toString();
        if (i < moment().format("H")) {
            $("#" + stringI).addClass("past");
            $("#" + stringI).removeClass("future");
            $("#" + stringI).removeClass("present");
        }
        else if (i > moment().format("H")) {
            $("#" + stringI).removeClass("past");
            $("#" + stringI).addClass("future");
            $("#" + stringI).removeClass("present");
        }
        else {
            $("#" + stringI).removeClass("past");
            $("#" + stringI).removeClass("future");
            $("#" + stringI).addClass("present");
        }
    }
};
timeCheck();
console.log(moment().format("H"));

    // WHEN I click into a time block
    // THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
$(".saveBtn").click(function() {
    var input = $(this).siblings(".description");
    var inputValue = input.val()
    console.log("input value " + inputValue);
    var hour = input.attr("id");
    localStorage.setItem(hour, inputValue);
});

// WHEN I refresh the page
// THEN the saved events persist
// Loop through hours 
var updateTasks = function() {
    for (var i = 9; i < 18; i++) {
        var stringI = i.toString();
        var savedInput = localStorage.getItem(stringI);
        $("#" + stringI).text(savedInput);
    }
};
updateTasks();
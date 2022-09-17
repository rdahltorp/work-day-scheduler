//Today's Date in Header//
var today = moment().format("[Today is: ]dddd MMMM Do, YYYY");
$("#currentDay").text(today)

//Timeblocks//

var blockContainer = document.querySelector(".container")

//Array of info for each hour in the day
var daySchedule = [
    {
        index: '0',
        hour: '9',
        time: '09',
        period: 'am',
        task: ''
    },
    {
        index: '1',
        hour: '10',
        time: '10',
        period: 'am',
        task: ''
    },
    {
        index: '2',
        hour: '11',
        time: '11',
        period: 'am',
        task: ''
    },
    {
        index: '3',
        hour: '12',
        time: '12',
        period: 'pm',
        task: ''
    },
    {
        index: '4',
        hour: '1',
        time: '01',
        period: 'pm',
        task: ''
    },
    {
        index: '5',
        hour: '2',
        time: '02',
        period: 'pm',
        task: ''
    },
    {
        index: '6',
        hour: '3',
        time: '03',
        period: 'pm',
        task: ''
    },
    {
        index: '7',
        hour: '4',
        time: '04',
        period: 'pm',
        task: ''
    },
    {
        index: '8',
        hour: '5',
        time: '05',
        period: 'pm',
        task: ''
    }

]

//Creation of the blocks
daySchedule.forEach(daySchedule => {
    console.log(daySchedule.index) //test to make sure the forEach is working.

    //Need to append a row for each index item 
    var hourRow = document.createElement("div")
    hourRow.addClass("row")
    $(".container").append(hourRow) 

    //Need to append a column for the hour (set to a class: "hour col 3")
    //var hourSec = document.createElement('p').attr({"class": "hour col 3"})
    //hourSec.textcontent = 'daySchedule.hour' + 'daySchedule.period'
    //$(".row").append(hourSec)

    //Need to append a column for the event form (set to a class: "col 6") + an if statement that uses moment to ID the time and thus change the color

    
    //Need to append a column for the save button (set to a class: "saveBtn col 3") and need to include the save icon

    
});


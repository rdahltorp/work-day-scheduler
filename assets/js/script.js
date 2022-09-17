//Today's Date in Header//
var today = moment().format("[Today is: ]dddd, MMMM Do, YYYY");
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
        time: '13',
        period: 'pm',
        task: ''
    },
    {
        index: '5',
        hour: '2',
        time: '14',
        period: 'pm',
        task: ''
    },
    {
        index: '6',
        hour: '3',
        time: '15',
        period: 'pm',
        task: ''
    },
    {
        index: '7',
        hour: '4',
        time: '16',
        period: 'pm',
        task: ''
    },
    {
        index: '8',
        hour: '5',
        time: '17',
        period: 'pm',
        task: ''
    }

]

//Creation of the blocks
daySchedule.forEach(daySchedule => {
    console.log(daySchedule.index); //test to make sure the forEach is working.

    //Append rows for each hour
    var hourRow = document.createElement("div");
    hourRow.classList.add("row");
    $(".container").append(hourRow);

    //Appends an hour section in each row
    var hourSection = document.createElement('p');
    hourSection.classList.add("hour","col-2");
    hourSection.innerText += daySchedule.hour + daySchedule.period;
    hourRow.append(hourSection);

    //Appends task form field in each row and colorcodes based on time
    var taskSection = document.createElement('form')
    $(taskSection).append("<input type='text' id='task' name='task' />") //Addition of text field to form
    
    if (daySchedule.time === moment().format("HH")) {
        taskSection.classList.add("present","col-9");
    } else if (daySchedule.time > moment().format("HH")) {
        taskSection.classList.add("future","col-9");
    } else {
        taskSection.classList.add("past","col-9");
    }

    hourRow.append(taskSection);
    
    //Appends save button column
    saveSection.classList.add("saveBtn","col-1");
    hourRow.append(saveSection);

    //NEEDS WORK HERE TO FIGURE OUT HOW TO 1) UPDATE THE TASK SECTION IN ARRAY WITH NEW VALUE, 2) SAVE TO LOCAL STORAGE
    saveSection.addEventListener('click', function saveEvent() {

    });
    
    //Addition of floppydisk icon
    var saveIcon = document.createElement('i');
    saveIcon.classList.add("far", "fa-save");
    saveSection.append(saveIcon);
    
});



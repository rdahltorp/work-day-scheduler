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

    //Appends task form field in each row // !STUCK! Cannot seem to add the type = text, id = task, and name = task attributes
    var taskSection = document.createElement('form') 
    var taskContent = document.createElement('input')
    taskContent.setAttribute("id", "task")

    hourRow.append(taskSection)
    taskSection.append(taskContent)

    //Color codes the taskSections based on hour
    if (daySchedule.time === moment().format("HH")) {
        taskSection.classList.add("present","col-9");
    } else if (daySchedule.time > moment().format("HH")) {
        taskSection.classList.add("future","col-9");
    } else {
        taskSection.classList.add("past","col-9");
    }

    
    //Need to append a column for the save button (set to a class: "saveBtn col 3") and need to include the save icon
    var saveSection = document.createElement('p');
    saveSection.classList.add("saveBtn","col-1"); //Will need to add an if statement to assign past, present, future classes. This is a test for now. 
    hourRow.append(saveSection);

    //NEEDS WORK HERE TO FIGURE OUT HOW TO 1) UPDATE THE TASK SECTION IN ARRAY WITH NEW VALUE that is added in the form above, 2) SAVE TO LOCAL STROAGE
    saveSection.addEventListener('click', function saveEvent() {

        //daySchedule.task = taskSection
        console.log(taskContent)

    });
    
    //Addition of floppydisk icon
    var saveIcon = document.createElement('i');
    saveIcon.classList.add("far", "fa-save");
    saveSection.append(saveIcon);
    
});

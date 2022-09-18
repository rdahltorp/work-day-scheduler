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

    //Appends task form field in each row // !STUCK! Cannot seem to add attributes like submit and method
    //Create form 
    var taskSection = document.createElement('form') 
    //taskContent.setAttribute("method", "post") //Getting an error here that says "cannot read properties of undefined"
    //taskContent.setAttribute("action","submit") 

    //Create input
    var taskInput = document.createElement('input')
    taskInput.type = "text";
    taskInput.name = "task";
    taskInput.id = "task"; 

    //Append input to form
    taskSection.append(taskInput)

    //Append form to hourRow
    hourRow.append(taskSection)

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
    saveSection.classList.add("saveBtn","col-1"); 
    hourRow.append(saveSection);

    //NEEDS WORK HERE TO FIGURE OUT HOW TO 1) UPDATE THE TASK SECTION IN ARRAY WITH NEW VALUE that is added in the form above, 2) SAVE TO LOCAL STROAGE
    saveSection.addEventListener('click', function saveEvent() {

        /* CODE TO HAVE FORM INPUT PUSHED TO ARRAY – RESULTS IN "NOT A FUNCTION" ERROR
        var taskContent = document.getElementById('task').value;
        daySchedule.task.push(taskContent);
        console.log(daySchedule.task); */

        /* CODE TO EVENTUALLY SET THE ARRAY TO LOCALSTORAGE 
        localStorage.setItem("daySchedule", JSON.stringify(daySchedule))*/


    });
    
    //Addition of floppydisk icon
    var saveIcon = document.createElement('i');
    saveIcon.classList.add("far", "fa-save");
    saveSection.append(saveIcon);
    
});

/* CODE TO EVENTUALLY CALL ITEMS FROM LOCAL STORAGE 
function init() {
    var storedSchedule = JSON.parse(localStorage.getItem(daySchedule))

    taskInput.value = storedSchedule.task
} 

init()
*/



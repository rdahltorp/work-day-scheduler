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

//forEach to build out the planner fields
daySchedule.forEach(output);

//Function that builds out the planner feilds
function output(item, index, array) {
    console.log(item);

    //Make the timeblock rows - houses the hour, task, and save columns
    var hourRow = document.createElement('div'); //Creates a new div
    hourRow.classList.add("row"); //Adds a row class to the new div
    $(".container").append(hourRow); //Adds an hourRow div to the container div for each object in array

    //Make the hour section column
    var hourSection = document.createElement('p'); //Creates a new p
    hourSection.classList.add("hour", "col-2"); //Adds hour and "col-2" classes to new p
    hourSection.innerText = item.hour + item.period; //Adds dynamic text to new p based on object in array
    hourRow.append(hourSection); //Appends new hour section to heach hour row

    //Make the task form column
    var taskForm = document.createElement('form'); //Creates a new form 
    var taskInput = document.createElement('input'); //Creates an input for the form
    taskInput.setAttribute("type", "text") //Establishes the input type
    taskInput.setAttribute("id", "task") //Establishes the input id
    taskInput.setAttribute("name", "task") //Establishes the input name

    var userTask = document.getElementById('task') //Trying to nail down how to pull the user's input. 
    item.task = userTask //This should update the "task" element in the corrisponding object in the day Schedule Array, but it does not currently 

    taskForm.append(taskInput); //Appends input to the form
    hourRow.append(taskForm); //Append form to the hourRow
    
    //Dynamic styling for taskForm based on time
    if (item.time === moment().format("HH")) {
        taskForm.classList.add("present","col-9");
    } else if (item.time > moment().format("HH")) {
        taskForm.classList.add("future","col-9");
    } else {
        taskForm.classList.add("past","col-9");
    }

    //Make save button column
    var saveSection = document.createElement('p'); //Creates a new p
    saveSection.classList.add("saveBtn","col-1"); //Adds saveBtn and col-1 classes to new p
    hourRow.append(saveSection); //Appends saveSection to hourRow

    //Add save button icon
    var saveIcon = document.createElement('i'); //Creates a new i per FontAwesome instructions
    saveIcon.classList.add("far", "fa-save"); //Adds floppydisk icon classes per FontAwesome instructions
    saveSection.append(saveIcon); //Appends icon to the saveSection

    //Save Action
    saveSection.addEventListener('click', function event() {
        console.log(item.task)
    })


}


/* Redoing for a non-arrow function
//Creation of the blocks
daySchedule.forEach(daySchedule => {
    //tests to make sure the forEach is working.
    console.log(daySchedule.index); 
    console.log(daySchedule.period);

    //Append rows for each hour
    var hourRow = document.createElement("div");
    hourRow.classList.add("row");
    $(".container").append(hourRow); 

    //Appends an hour section in each row
    var hourSection = document.createElement('p');
    hourSection.classList.add("hour","col-2");
    hourSection.innerText += daySchedule.hour + daySchedule.period;
    hourRow.append(hourSection); 

    //Appends task form field in each row // !STUCK!
    //Create form 
    var taskSection = document.createElement('form'); 

////////////////////////////////////////////////////////////////////////////////////////// WHAT NEEDS TO BE WORKED ON vvv

    //Create input
    var taskInput = document.createElement('input'); //makes input field
    taskInput.classList.add(daySchedule.index); //Need this to ID which index number is related to the save button that is clicked.
    taskInput.type = "text";
    taskInput.name = "task";
    taskInput.id = "task"; 

    //Append input to form
    taskSection.append(taskInput);

    //Append form to hourRow
    hourRow.append(taskSection);

    //Color codes the taskSections based on hour
    if (daySchedule.time === moment().format("HH")) {
        taskSection.classList.add("present","col-9");
    } else if (daySchedule.time > moment().format("HH")) {
        taskSection.classList.add("future","col-9");
    } else {
        taskSection.classList.add("past","col-9");
    }

    
    //Appends the save button area in each row
    var saveSection = document.createElement('p');
    saveSection.classList.add("saveBtn","col-1"); 
    hourRow.append(saveSection);

    //Save button click - Needs to: 
    ////1) Push the text input in the form field to the "task" in the corrispoonding object in the "dayschedule" Array
    ////2) Save entire array of objects to local storage for later retrival
    saveSection.addEventListener('click', function saveEvent() {

        /* CODE TO HAVE FORM INPUT PUSHED TO ARRAY – RESULTS IN "NOT A FUNCTION" ERROR
        var taskContent = document.getElementById("task");
        console.log(taskContent.value);

        daySchedule.task = taskContent;
        console.log(daySchedule.task); 

        //Save Array to Local Storage - Currently only saves 1 object in the array
        localStorage.setItem("daySchedule", JSON.stringify(daySchedule));


    });*/
    
    /* //Addition of floppydisk icon
    var saveIcon = document.createElement('i');
    saveIcon.classList.add("far", "fa-save");
    saveSection.append(saveIcon);
    
}); */

/* CODE TO EVENTUALLY CALL ITEMS FROM LOCAL STORAGE 
function init() {
    var storedSchedule = JSON.parse(localStorage.getItem(daySchedule))

    taskInput.value = storedSchedule.task;
} 

init()
*/



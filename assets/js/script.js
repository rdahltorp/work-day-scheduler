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
    taskInput.setAttribute("id", "task-" + item.hour) //Establishes the input id
    taskInput.setAttribute("name", "task") //Establishes the input name
    //taskInput.setAttribute('onClick', 'getValue()'); //Fires a function to pull the value of the field

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
    saveSection.addEventListener('click', function(event){
        //getValue(event)
        var userTask = $(event.target).closest("p").prev().find("input").val()
        console.log(userTask); //Confirms the value matches what is on the field.
        item.task = userTask; //Sets the "task" element in the corrisponding object in array to the text value. 
        //daySchedule.push(item); //Maybe I take this out??
        console.log(item);
        localStorage.setItem("daySchedule", JSON.stringify(daySchedule));     //Save Array to Local Storage
    })
}

//Function to recall any locally stored items. 
function init() {
    var stored = JSON.parse(localStorage.getItem("daySchedule"))
    console.log(stored);
    for (var i = 0; i < stored.length; i++) {
        var time = stored[i].time
        var storedTask = stored[i].task;
        $(`#task-${time}`).val(storedTask);
        console.log(storedTask);
    }
} 
init()

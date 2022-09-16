//Today's Date in Header//
var today = moment().format("[Today is: ]dddd MMMM Do, YYYY");
$("#currentDay").text(today)

//Timeblocks//
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
for (var i = 0; i < daySchedule.length; i++) {
    
}


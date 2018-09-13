$(document).ready(function() {
    
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('tasks');

let taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
let deleteArray = localStorage.getItem('deleteTasks') ? JSON.parse(localStorage.getItem('deleteTasks')) : [];
//    
//let taskChart = function(){
//    let taskAndHoursHolder = [];
//    if(localStorage.getItem('hours') === undefined){
//        chart.load({
//        columns:[
//        [inputTask, inputHours]
//      ]
//    })
//} else {
//        for(var aTask of (localStorage.getItem('tasks'))){
//            taskAndHoursHolder.push([aTask]);
//        };
//        for(var someHours of (localStorage.getItem('hours'))){
//            taskAndHoursHolder.forEach(function(item){
//                item.push(someHours);
//            })
//        }
//    chart.load({
//        columns:taskAndHoursHolder
//        })
//    }
//};
     
////update chart
//let taskChart;
//if (localStorage.getItem('tasks')) {
//  localStorage.forEach(function(item){
//      chart.load({
//      columns:[
//        [key, value]
//      ]
//    });
//  });
//}

const taskData = JSON.parse(localStorage.getItem('tasks'));        

//function that creates a list element
const addToList = function(text){ 
    const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    };

    
  $(".add-task-btn").on("click", function(event){
      let inputTask = $("#tasks").val();
      let inputDeleteTask = $("#deleteTasks").val();
      console.log(taskData)
    event.preventDefault();  
      
    //adding input data to to do list
    taskArray.push(inputTask);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    addToList(inputTask);
      
    //adding input data to chart (ORIGINAL)
//    chart.load({
//      columns:[
//        [inputTask, inputHours],
//          
//      ]
//    });
      
       ////adding input data to chart (USING HELPER FUNCTION)
//      taskChart();
      
//    console.log('user input ', inputTask, inputHours);

        // clear values
    $("#tasks").val("");
    $("#deleteTasks").val("");
 
  });
    
    taskData.forEach(function(item){
        addToList(item);
    });
    
    
   $(".del-task-btn").on("click", function() {
     alert('are you sure you want to start a new list?'); 
//       console.log(localStorage.tasks);
       
    //remove each task individually
//     let filteredArr = (JSON.parse(localStorage.tasks)).filter(item => item !== $("#deleteTasks").val());
//     localStorage.tasks = filteredArr;
//  
    //remove all tasks from the list
    $("li").remove();
//     $("#deleteTasks").val("");
     $("#tasks").val("");
   });
});
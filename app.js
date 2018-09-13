$(document).ready(function() {
    
// store values
let inputTask = $("#tasks").val();
let inputHours = $("#hours").val();
    
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('tasks');

let taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    
localStorage.setItem('tasks', JSON.stringify(taskArray));
const data = JSON.parse(localStorage.getItem('tasks'));    

//function that creates a list element
const addToList = function(text){ 
    const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    };


    
   
 
    
  $(".add-task-btn").on("click", function(event){
      let inputTask = $("#tasks").val();
      let inputHours = $("#hours").val();
      
    event.preventDefault();  
      
    //adding task to localstorage  
    taskArray.push(inputTask);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    addToList(inputTask);
      
      
    // data-
    // let itemHtml = '<div class="display-item" data-storage-key="'
    // +inputIngredient+'"> ' + inputCups + ' ' 
    // + localStorage.getItem(inputIngredient) + '</div>';
    // $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    chart.load({
      columns:[
        [inputTask, inputHours]
      ]
    });
      
//    console.log('user input ', inputTask, inputHours);

        // clear values
    $("#tasks").val("");
    $("#hours").val("");
      
 
  });
    
   

    
    data.forEach(function(item){
        addToList(item);
    });
    
    
   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $("#tasks").val("");
     $(".user-input-body").val("");
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});
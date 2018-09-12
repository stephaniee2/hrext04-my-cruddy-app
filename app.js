$(document).ready(function() {
    
    
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
    

  $(".add-ingred-btn").on("click", function(event){

      // store values
      let inputIngredient = $(".ingredient").val();
      let inputCups = $(".cups").val();
      
    localStorage.setItem(inputIngredient, inputCups);
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
        [inputIngredient, inputCups]
      ]
    });
    console.log('user input ', inputIngredient, inputCups);

        // clear values
        $(".ingredient").val("");
        $(".cups").val("");
  });
    

//  function newElement() {
//    var value = $('.direction').val();
//    var li = document.createElement("li");
//    // var inputValue = document.getElementsByClassName("direction").value;
//    var t = document.createTextNode(value);
//    li.appendChild(t);
//    if (value === '') {
//      alert("You must write something!");
//    } else {
//      document.getElementById("ordered-steps").appendChild(li);
//    }
//    // document.getElementsById("ordered-steps").value = "";
//  
//    var span = document.createElement("SPAN");
//    var txt = document.createTextNode("\u00D7");
//    span.className = "close";
//    span.appendChild(txt);
//    li.appendChild(span);
//  
//    for (i = 0; i < close.length; i++) {
//      close[i].onclick = function() {
//        var div = this.parentElement;
//        div.style.display = "none";
//      }
//    }
//  }
  

//  $(".add-direction-btn").on("click", function(event){
//    return newElement()
//  })

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".ingredient").val("");
     $(".user-input-body").val("");
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});
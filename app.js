$(document).ready(function() {


  $(".add-text-btn").on("click", function(){

    // store values
    let inputIngredient = $(".ingredient").val();
    let inputCups = $(".cups").val();

    // clear values
    $(".ingredient").val("");
    $(".cups").val("");

    console.log(inputIngredient, inputCups);

    localStorage.setItem(inputIngredient, inputCups);
    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'
    +inputIngredient+'"> ' + inputCups + ' ' 
    + localStorage.getItem(inputIngredient) + '</div>';
    $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".add-text-btn").on("click", function(e){
      // plop the key:value back into the input boxes
      data.push([inputIngredient, inputCups]);
      chart.load()

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".ingredient").val(e.target.dataset.storageKey);
      $(".cups").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".ingredient").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});
//add time blocks, in one hour increments from 9am to 5pm, each block has a save button on the right hand side that saves the info entered to local storage

//Adds current day at the top of the planner (moment)
var currentTime = dayjs().format('MMM D, YYYY');
$("#currentDay").text(currentTime);



var timeBlock = $(".timeB"); // assings HTML elementes inside with class timeB to an array 
var now = parseInt(dayjs().format("H")); //variables to set current time to compare
console.log(now);
console.log(timeBlock);

/*function that loops in the previous set array timeBlock, with .each metho of JQuery and retrives 
the id attribute set in parenthesis, after that transformed it to Int type of value to compare to our now variable and 
set the class that has a certain style in css*/
$.each(timeBlock, function (i, timeB) {
    var hourId = parseInt($(this).attr("id"));
    if (hourId === now) {
      $(this).addClass("present");
    } else if (hourId < now) {
      $(this).addClass("past");
    } else if (hourId > now) {
      $(this).addClass("future");
    }
  });

/*Query method to call our function saveText*/ 
  $(document).ready(saveText);


/* saveText does two main getting the text value input by te user and responding to the 
button to save in that especific textarea block  */
  function saveText() {

    var savedText = localStorage.getItem("text");
    if (savedText) {
      $("#text9").val(savedText);
    }
    $(".hour9").click(function() {
      var textToSave = $("#text9").val();
      localStorage.setItem("text", textToSave);
    });

    var savedText2 = localStorage.getItem("text2");
    if (savedText2) {
      $("#text10").val(savedText2);
    }
    $(".hour10").click(function() {
      var textToSave2 = $("#text10").val();
      localStorage.setItem("text2", textToSave2);
    });


    var savedText3 = localStorage.getItem("text3");
    if (savedText3) {
      $("#text11").val(savedText3);
    }
    $(".hour11").click(function() {
      var textToSave3 = $("#text11").val();
      localStorage.setItem("text3", textToSave3);
    });


    var savedText4 = localStorage.getItem("text4");
    if (savedText4) {
      $("#text12").val(savedText4);
    }
    $(".hour12").click(function() {
      var textToSave4 = $("#text12").val();
      localStorage.setItem("text4", textToSave4);
    });


    var savedText5 = localStorage.getItem("text5");
    if (savedText5) {
      $("#text13").val(savedText5);
    }
    $(".hour13").click(function() {
      var textToSave5 = $("#text13").val();
      localStorage.setItem("text5", textToSave5);
    });


    var savedText6 = localStorage.getItem("text6");
    if (savedText6) {
      $("#text14").val(savedText6);
    }
    $(".hour14").click(function() {
      var textToSave6 = $("#text14").val();
      localStorage.setItem("text6", textToSave6);
    });


    var savedText7 = localStorage.getItem("text7");
    if (savedText7) {
      $("#text15").val(savedText7);
    }
    $(".hour15").click(function() {
      var textToSave7 = $("#text15").val();
      localStorage.setItem("text7", textToSave7);
    });

    var savedText8 = localStorage.getItem("text8");
    if (savedText8) {
      $("#text16").val(savedText8);
    }
    $(".hour16").click(function() {
      var textToSave8 = $("#text16").val();
      localStorage.setItem("text8", textToSave8);
    });

    var savedText9 = localStorage.getItem("text9");
    if (savedText9) {
      $("#text17").val(savedText9);
    }
    $(".hour17").click(function() {
      var textToSave9 = $("#text17").val();
      localStorage.setItem("text9", textToSave9);
    });

  }

// var textAreaArray=$(".row")
// console.log(textAreaArray);
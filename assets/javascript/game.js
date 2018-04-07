var targetNumber = Math.floor((Math.random() * 101) + 19);

$('#total').text('Get it to: ' +  targetNumber);

var counter = 0;//counts our total 

var wins = 0;

$('#win').text('Wins: ' + wins);

var losses = 0;

$('#losses').text('Losses: ' + losses);


var imageOptions = ['../week-4-game/assests/images/diddy.jpg', '../week-4-game/assests/images/hill.jpg', '../week-4-game/assests/images/jeffery.jpg', '../week-4-game/assests/images/snow.jpg']


// giving each image a value from the array
for (var i = 0; i < imageOptions.length; i++) {

  var imageChoice = $('<img>');
    
    imageChoice.addClass('sethImage');//
    
    imageChoice.attr('src', imageOptions[i]);
  
    imageChoice.attr("data-sethvalue", Math.floor(Math.random() * 12) + 1);
   
    $("#choices").append(imageChoice);
  }

  //reset total
  function resetTotal() {

    var targetNumber = Math.floor((Math.random() * 101) + 19);

    $('#total').text('Get it to: ' +  targetNumber);

    counter = 0;

    
  }

 
  
//when you click it, what happens
$(".sethImage").on("click", function() {

    var imageValue = ($(this).data("sethvalue"));
    
    counter += imageValue;
   
    $('#guessing').text("Were you are: " + counter);
   
    if (counter === targetNumber) {
  
    $("#status").text('You Win! Have a Jerry!');
    
      wins++;

     $('#win').text('Wins: ' + wins);

     resetTotal();

    }
   
    else if (counter >= targetNumber) {
   
    $('#status').text('Loser! Learn How to Count.');

      losses++;

      $('#losses').text('Losses: ' + losses);

      resetTotal();

    }
  });
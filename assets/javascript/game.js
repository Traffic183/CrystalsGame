var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = () => {
  $(".crystals").empty();

  var images = [
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals1.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals2.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals3.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals4.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals5.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals6.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals7.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals8.png',
    'https://raw.githubusercontent.com/Traffic183/CrystalsGame/master/assets/images/crystals9.png'
  ];

  randomResult = Math.floor(Math.random() * 69) + 30;

  console.log(randomResult);

  //generates four crystals with random numbers
  $("#result").html('Magic Number: ' + randomResult);
  //four crystals with four random numbers and the div for the random number

  for (var i = 0; i < 9; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal col-4-lg',
      "data-random": random
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });

    // crystal.html(random);

    $(".crystals").append(crystal);

  }
}

$("#previous").html(previous);

resetAndStart();

//event delegation 

$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html(previous);

  console.log(previous);

  if (previous > randomResult) {
    lost++;

    $("#lost").html(lost);

    previous = 0;

    resetAndStart();

  } else if (previous === randomResult) {
    win++;

    $("#win").html(win);

    previous = 0;


    resetAndStart();
  }

});
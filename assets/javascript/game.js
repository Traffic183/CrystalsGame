var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

  //empties the crystals
  $(".crystals").empty();

  var images = [
    'https://www.howtocookthat.net/public_html/wp-content/uploads/2013/03/rock-candy-1024x624.jpg?x19907',
    'https://usercontent1.hubstatic.com/12368010_f520.jpg',
    'https://www.wallpaperup.com/uploads/wallpapers/2014/03/24/308116/e21989d2d9da95384b6a06d049384253.jpg',
    'http://static1.squarespace.com/static/5644b453e4b0552eb81185b6/5646246ce4b0a33eccdedd2d/56521e66e4b058e88fca5228/1449169817525/?format=1000w',

  ];

  randomResult = Math.floor(Math.random() * 69) + 30;

  console.log(randomResult);

  //generates four crystals with random numbers
  $("#result").html('Magic Number: ' + randomResult);
  //four crystals with four random numbers and the div for the random number

  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
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
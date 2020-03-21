var canvas = document.getElementById("sketchpad");
var ctx = canvas.getContext("2d");
var pos = { x: 0, y: 0 };
var color = "#000000";
setCurrentColor(color);
var width = 20;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight - 150;






$(function() {
  $( "#dialog-1" ).dialog({
    autoOpen: true,
    modal: true,
    width: 400,
    height: 250,
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });
});

$(function() {
   $( "#slider-2" ).slider({
      value: 20,
      min: 5,
      animate:"slow",
      orientation: "horizontal"
   });
});

function setCurrentColor(color) {
  $(".currentColor").css("background-color", color);
  if (color == "#000000") {
    $(".currentColor").css("color", "#FFFFFF");
  } else {
    $(".currentColor").css("color", "#000000");
  }
}

$('.sizes').on('click', function(){
    // console.log($(this).css('background-color'));
    // color = $(this).css('background-color');
    console.log($(this));

});


$('.colors').on('click','td', function(){
    // console.log($(this).css('background-color'));
    // color = $(this).css('background-color');
    console.log($(this).attr("bgcolor"));
    color = $(this).attr("bgcolor");
    setCurrentColor(color);

});

$('.reset').on('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = "#000000";
    setCurrentColor(color);
    $("#slider-2").slider("value", 20);
});


// add event listeners to specify when functions should be triggered
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// new position from mouse events
function setPosition(event) {
  pos.x = event.clientX;
  pos.y = event.clientY - 150;
}

function draw(event) {
  if (event.buttons !== 1) return;

  // width = document.getElementById("lineWidth").value > 0 ? document.getElementById("lineWidth").value : 5;
  // console.log(width);
  var width = $("#slider-2").slider("value");

  ctx.beginPath();

  ctx.lineWidth = width; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(event);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}

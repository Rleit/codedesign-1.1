// Define Canvas Variable
var canvas = document.getElementById('acanvas');
// Define context as ctx
var ctx = canvas.getContext('2d');

//Call the image on load
var img4128 = new Image();

//imagename
img4128.onload = function() {
  start();

}

//define the source of the image
img4128.src = "https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_2048.jpg";



//first and main function to draw the earth
function start() {

  //defining certain x and y coordinates
  //value = speed of spin
  var x = 0,
    y = 0,
    value = 1;

    //requests animation frame again
  requestAnimationFrame(animation);

  // clip a circle representing a globe

  ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.clip();


  // drawImage the map into the clip
  // and animate it

  function animation() {
    var ctx = canvas.getContext('2d');
    // clear old frame;
    ctx.clearRect(0, 780, canvas.width, canvas.height);
    //make globe transparent for shadows later on
    ctx.globalAlpha = .50;

    //draws image on globe with var x changable on top
    ctx.drawImage(img4128, x - 1900, -100);

    //make globe transparent for shadows later on
    ctx.globalAlpha = 1.00;

    //shadows darwn on both sides ofr the globe for alittle bit more depth
    ctx.beginPath();
    ctx.arc(100, 100, 52, Math.PI * 0.70, Math.PI * 1.30, false);
    ctx.shadowColor = "black";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(100, 100, 52, -Math.PI * 0.30, Math.PI * 0.30, false);
    ctx.shadowColor = "black";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = -5;
    ctx.stroke();

    // Animation location to where + value(Speed)
    if (x >= 0) {
      x += value;
      if (x > 1950) {
        y += value;
        x -= value;
      }
    }
    //if animation reaches certain coordinates, set image to its starting

    if (y > 0) {
      x = 0;
      y = 0;
    }
    //requests a frame to animate and then clears the canvas
    requestAnimationFrame(animation);
  }



}

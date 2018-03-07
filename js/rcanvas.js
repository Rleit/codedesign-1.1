// Define Canvas Variable
var canvas = document.getElementById('canvas');
// Define context as ctx
var ctx = canvas.getContext('2d');

/*Rocket Functions*/
////////////////STARS//////////
////// Borrowed from https://codepen.io/iamminn/pen/rGaWoK ////////
////////////////STARS//////////

var c = canvas.getContext('2d');
var center = {x: canvas.width / 2, y: canvas.height / 2};



var stars = [{x: 10,y:10}];



function drawStars(a){
  for (var i = 0; i <= a; ++i) {
    var bestLocation = sample(stars);
    stars.push( new Star(bestLocation[0], bestLocation[1], 4, Math.floor(Math.random() * 4) + 2, 1));
  }
}

function Star(cx, cy, spikes, outerRadius, innerRadius) {
    this.rot = Math.PI / 2 * 3;
    this.x = cx;
    this.y = cy;
    this.spikes = spikes;
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;

    this.step = Math.PI / this.spikes;

    c.strokeSyle = "#000";
    c.beginPath();
    c.moveTo(cx, cy - this.outerRadius)
    for (i = 0; i < this.spikes; i++) {
        this.x = cx;
        this.y = cy;
        x = cx + Math.cos(this.rot) * this.outerRadius;
        y = cy + Math.sin(this.rot) * this.outerRadius;
        c.lineTo(x, y)
        this.rot += this.step

        x = cx + Math.cos(this.rot) * this.innerRadius;
        y = cy + Math.sin(this.rot) * this.innerRadius;
        c.lineTo(x, y)
        this.rot += this.step
    }
    c.lineTo(cx, cy - this.outerRadius)
    c.closePath();
    c.lineWidth=5;
    c.strokeStyle='rgb(32, 66, 136)';
    c.stroke();
    c.fillStyle='skyblue';
    c.fill();
}
//Use best candidate algorithm to evenly distribute across the canvas
function sample(samples) {
  var bestCandidate, bestDistance = 0;
  for (var i = 0; i < 20; ++i) {
    var c = [Math.random() * canvas.width, Math.random() * canvas.height],
        d = distance(findClosest(samples, c), c);
    if (d > bestDistance) {
      bestDistance = d;
      bestCandidate = c;
    }
  }
  return bestCandidate;
}


function distance(a, b) {
  var dx = a.x - b[0],
      dy = a.y - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}


function findClosest(points, b) {
  var distance = null;
  var closestPoint;
  for (var i = 0; i < points.length; ++i) {
      var dx = points[i].x - b[0];
      var dy = points[i].y - b[1];
      if(distance == null){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      } else if(distance > Math.sqrt(dx * dx + dy * dy)){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      }
  }
  return closestPoint;
}

//Initial object arrays




//Generate how many elements you want

drawStars(35);
/*Main Booster function*/
maincone(ctx, 500, 332);

booster(ctx, 500, 332);

/*Spacex Logo Function*/
spacex(ctx, 515, 590);

/*Secondary Right Booster function*/
topcone(ctx,548,332);

booster(ctx, 548, 332);

/*Secondary left Booster function*/
topcone(ctx,452,332);
booster(ctx, 452, 332);

/*Connection function*/
clamp(ctx, 490, 332);






/////////////////////////////////////
/*Spacex logo function with rotation (ctx, x,y)
This is to simplify making multiple of the same dimension object*/
/////////////////////////////////////

function spacex(ctx, x, y) {

  var img = new Image();
  var TO_RADIANS = Math.PI / 180;

  /*onload , runs a image function to draw the image*/
  img.onload = function() {


    /// rotate context
    ctx.translate(x, y);
    ctx.rotate(-90 * TO_RADIANS);


    /*Draw image function*/
    ctx.drawImage(img, 0, 0);




  };
  /*Image source*/
  img.src = 'spacex.png';


}



/////////////////////////////////////
/*Top of main booster and payload (ctx, x,y)
This is to simplify making multiple of the same dimension object*/
/////////////////////////////////////

function maincone(ctx, x, y) {

    // Variables for line lengths
    var botwall = 110;
    var botlid = 40;

    // strokeStyle = blackish (exact rgb off illustrator)
    ctx.strokeStyle = "#333333";
    // fillStyle = greyish (exact rgb off illustrator)
    ctx.fillStyle = "#f2f2f2";
    ctx.lineWidth = 3;
    // beginPath
    ctx.beginPath();

    ctx.moveTo(x,y);
    ctx.lineTo(x,y-botwall);
    ctx.lineTo(x+2,y-botwall-6);
    ctx.lineTo(x+botlid+2, y-botwall-6);
    ctx.lineTo(x+botlid+4, y-botwall);
    ctx.lineTo(x+botlid+4,y)
    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();

    ctx.beginPath();

    var plsx = 2;
    var plsy = 117;
    var plw = 92;
    var plt = 155;

    ctx.moveTo(x+plsx,y-plsy);
    ctx.lineTo(x-plsx-2,y-plsy-11);
    ctx.lineTo(x-plsx-2,y-plsy-plw-11);
    ctx.bezierCurveTo(x-plsx-2, y-plsy-plw-11, x-plsx, y-plsy-plw-36 , x+21, y -plsy - plt);
    ctx.lineTo(x+25, y -plsy - plt);
    ctx.bezierCurveTo(x+25, y -plsy - plt, x+49, y -plsy - plw - 30 , x+50, y -plsy - plw -11);
    ctx.lineTo(x+50,y-plsy-11-plw+plw);
    ctx.lineTo(x+42,y-plsy);

    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();

    us(ctx,512,302);
    fhs(ctx,515,280);
    fhb(ctx,499,150);


    function fhb(ctx, x, y) {

          var img = new Image();

          /*onload , runs a image function to draw the image*/
          img.onload = function() {

            /*Draw image function*/
            ctx.drawImage(img, x, y);




          };
          /*Image source*/
          img.src = 'fhbig.png';


        }

    function us(ctx, x, y) {

      var img = new Image();

      /*onload , runs a image function to draw the image*/
      img.onload = function() {

        /*Draw image function*/
        ctx.drawImage(img, x, y , 24 , 15);




      };
      /*Image source*/
      img.src = 'us.png';


    }

    function fhs(ctx, x, y) {

      var img = new Image();

      /*onload , runs a image function to draw the image*/
      img.onload = function() {

        /*Draw image function*/
        ctx.drawImage(img, x, y);




      };
      /*Image source*/
      img.src = 'fh2.png';


    }



}

/////////////////////////////////////
/*Booster housing function name (ctx, x,y)
This is to simplify making multiple of the same dimension object*/
/////////////////////////////////////

function booster(ctx, x, y) {


  // Variables for line lengths
  var wall = 330;
  var lid = 45;
  var ws = 7;
  // strokeStyle = blackish (exact rgb off illustrator)
  ctx.strokeStyle = "#333333";
  // fillStyle = greyish (exact rgb off illustrator)
  ctx.fillStyle = "#f2f2f2";
  ctx.lineWidth = 3;
  // beginPath
  ctx.beginPath();
  // moveTo x,y top left Starting point
  ctx.moveTo(x, y);
  // lineTo down left wall x,y
  ctx.lineTo(x, y + wall);
  // lineTo bottom x,y
  ctx.lineTo(x + lid, y + wall);
  // lineTo right wall x,y
  ctx.lineTo(x + lid, y + wall - wall);
  // lineTo top lid , back to original x,y
  ctx.lineTo(x, y);
  // stroke the lines
  ctx.stroke();
  // fill the insides
  ctx.fill();
  // closePath so fill wont spill
  ctx.closePath();

  // Darker Shadow Fill style for color
  ctx.fillStyle = "#b3b3b3";
  // fillRect using same variables from before with added shadow width
  ctx.fillRect(x, y, ws, wall);
  // lighter Shadow same as above
  ctx.fillStyle = "#cccccc";
  ctx.fillRect(x + ws, y, ws, wall);
  // another lighter right inside
  ctx.fillRect(x + lid, y, -ws, wall);


  /*Main Booster Grid Fins*/
  gridfin(ctx, x + 6, y + 3); //Left
  gridfin(ctx, x + 35, y + 3); //Right

  /*Landing legs*/
  landleg(ctx, x + 5, y + 6);

  /*Thrusters*/
  thrusters(ctx, x + 6.5, y + 332);
  thrusters(ctx, x + 22, y + 332);
  thrusters(ctx, x + 39, y + 332);

  /////////////////////////////////////
  /*Grid fin function name (ctx, x,y)
  This is to simplify making multiple of the same dimension object*/
  /////////////////////////////////////
  function gridfin(ctx, x, y) {
    // Variables for line lengths
    var arm = 5;
    var toparm = 4;
    var wall = 20;
    var bottom = 12;
    // strokeStyle = blackish (exact rgb off illustrator)
    ctx.strokeStyle = "#363736";
    // fillStyle = greenishgrey (exact rgb off illustrator)
    ctx.fillStyle = "#bfc5c1";
    ctx.lineWidth = 3;
    // beginPath
    ctx.beginPath();
    // moveTo x,y Starting point
    ctx.moveTo(x, y);
    // lineTo down arm x,y
    ctx.lineTo(x, y + arm);
    // lineTo left top x,y
    ctx.lineTo(x - toparm, y + arm);
    // lineTo down left wall x,y
    ctx.lineTo(x - toparm, y + arm * 4);
    // lineTo right bottom x,y
    ctx.lineTo(x - toparm + bottom, y + arm * 4);
    // lineTo up right wall x,y
    ctx.lineTo(x - toparm + bottom, y + arm * 5 - wall);
    // lineTo right top x,  x,y
    ctx.lineTo(x - toparm * 2 + bottom, y + arm * 5 - wall);
    // lineTo up arm x,y
    ctx.lineTo(x - toparm * 2 + bottom, y + arm * 5 - wall - arm);
    // lineTo original to close off top, with a tiny offset for stroke
    ctx.lineTo(x - 1.5, y);
    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();
  }

  /////////////////////////////////////
  /*landing leg function name (ctx, x,y)
  This is to simplify making multiple of the same dimension object*/
  /////////////////////////////////////
  function landleg(ctx, x, y) {
    // Variables for line lengths
    var cp1x = 2;
    var cp1y = 295;
    var ycurve = 325;
    var xcurve = 13;
    var topcurve = 275;

    // strokeStyle = blackish (exact rgb off illustrator)
    ctx.strokeStyle = "#333333";
    // fillStyle = greenishgrey (exact rgb off illustrator)
    ctx.fillStyle = "#4d4d4d";
    ctx.lineWidth = 3;

    // beginPath
    ctx.beginPath();
    // moveTo x,y Starting point
    ctx.moveTo(x - 4, y + 325);
    // beziercurve for the bottom connectors of the leg

    ctx.bezierCurveTo(x + cp1x, y + cp1y, x + cp1x, y + cp1y + cp1x * 4, x + xcurve - 3, y + ycurve - 0.5);

    ctx.lineTo(x + cp1x - cp1x, y + topcurve - cp1x);

    ctx.bezierCurveTo(x - cp1x, y + cp1y - xcurve, x - cp1x, y + cp1y, x - cp1x * 2.2, y + ycurve);

    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();




  }

  /////////////////////////////////////
  /*Thrusters function name (ctx, x,y)
  This is to simplify making multiple of the same dimension object*/
  /////////////////////////////////////
  function thrusters(ctx, x, y) {
    // Variables for line lengths


    // strokeStyle = blackish (exact rgb off illustrator)
    ctx.strokeStyle = "#333333";
    // fillStyle = greenishgrey (exact rgb off illustrator)
    ctx.fillStyle = "#333333";
    ctx.lineWidth = 3;

    // beginPath
    ctx.beginPath();

    ctx.moveTo(x, y);

    ctx.lineTo(x - 3, y + 3);

    ctx.lineTo(x + 3, y + 3);

    ctx.lineTo(x, y);


    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();




  }


}


function clamp(ctx, x, y) {
  // Variables for line lengths
  var width = 65;
  var height = 7;

  // strokeStyle = blackish (exact rgb off illustrator)
  ctx.strokeStyle = "#333333";
  // fillStyle = greenishgrey (exact rgb off illustrator)

  ctx.lineWidth = 3;
  // stroke the lines
  ctx.stroke();
  // fill the insides
  ctx.fill();

  ctx.fillStyle = "#f2f2f2";
  // Create a fillRect for a static clamp for the boosters
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);


}


/////////////////////////////////////
/*Top of secondary boosters tops (ctx, x,y)
This is to simplify making multiple of the same dimension object*/
/////////////////////////////////////

function topcone(ctx, x, y) {



    // Variables for line lengths
    var topwall = 18;
    var cp2x = 7;
    var cp2y = 34;
    var cp1x = 38;
    var cp1y = 36;
    // strokeStyle = blackish (exact rgb off illustrator)
    ctx.strokeStyle = "#333333";
    // fillStyle = greyish (exact rgb off illustrator)
    ctx.fillStyle = "#f2f2f2";
    ctx.lineWidth = 3;
    // beginPath
    ctx.beginPath();

    ctx.moveTo(x,y);
    ctx.lineTo(x,y-topwall);
    ctx.bezierCurveTo(x, y-topwall, x+cp2x-2, y-cp2y, x+20, y-topwall-30);
    ctx.lineTo(x+25,y-48);
    ctx.bezierCurveTo(x+cp1x, y-cp1y, x+45, y-topwall, x+45, y-topwall);
    ctx.lineTo(x+45,y)


    // stroke the lines
    ctx.stroke();
    // fill the insides
    ctx.fill();
    // closePath so fill wont spill
    ctx.closePath();




}

let numDotsInput;
let numDots = 0;
let targetDots = numDots;
let angle = 137.5;
let scalar = 4;

let souls = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');

  numDotsInput = createInput();
  numDotsInput.position(20, 20);
  numDotsInput.value(numDots); 

  let updateButton = createButton('Enter Age');
  updateButton.position(numDotsInput.x + numDotsInput.width + 10, 20);
  updateButton.mousePressed(updateDots);

  setInterval(releaseSoul, 500);
}

function updateDots() {
  let inputValue = parseInt(numDotsInput.value());
  targetDots = 3952 - (inputValue * 52);
  numDots = 0;
}

function displayDateAndTime() {
  fill(255);
  textAlign(CENTER);
  textSize(12);
  let now = new Date();
  let dateString = now.toLocaleDateString();
  let timeString = now.toLocaleTimeString();
  text("Date: " + dateString, width / 3.4, -360);
  text("Time: " + timeString, width / 2.4, -360);
}

function releaseSoul() {
  
  let newSoul = {
    x: random(width),
    y: 0, 
    diameter: 5,
    stopped: false 
  };
  souls.push(newSoul);
}

function draw() {
  background(0);

  fill(255);
  textFont("neue-haas-grotesk-display");
  textSize(24);
  textStyle(NORMAL);
  textAlign(RIGHT);
  text("" + numDots, width - 420, 410);

  textAlign(LEFT);
  textSize(14);
  text("weeks left", width - 410, 410);

  translate(width/2, height/2);
  fill(255);


  for (let i = 0; i < souls.length; i++) {
    let soul = souls[i];
    ellipse(soul.x, soul.y, soul.diameter, soul.diameter);
    if (!soul.stopped) {
      soul.y += 5; 
    }
   
    if (soul.y >= height - soul.diameter / 2) {
      soul.y = height - soul.diameter / 2; 
      soul.stopped = true;
    }
  }

  if (numDots < targetDots) {
    numDots += 10;
  } else if (numDots > targetDots) {
    numDots = targetDots;
  }

  for (let i = 0; i < numDots; i++) {
    let phi = i * angle;
    let r = scalar * sqrt(i);
    let x = r * cos(phi);
    let y = r * sin(phi);
    ellipse(x, y, 4, 4);
  }

  displayDateAndTime();
}

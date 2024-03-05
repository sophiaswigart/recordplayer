let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let x1=200;
let y1=150;
let size1=150;
let x2=400;
let y2=150;
let size2=150;
let x3=600;
let y3=150;
let size3=150;
let x4=800;
let y4=150;
let size4=150;
let x5=1000;
let y5=150;
let size5=150;
let x6=1200;
let y6=150;
let size6=150;
let recordClicked = [false, false, false, false, false, false];
let needleAngle=0;
// let font1;




function preload(){
song1 = loadSound('sebadoh.mp3');
song2 = loadSound('redchair.mp3');
song3 = loadSound('belle.mp3');
song4 = loadSound('doors.mp3');
song5 = loadSound('mamas&papas.mp3');
song6 = loadSound('catsmiaow.mp3');
// font1 = loadFont('<link rel="stylesheet" href="https://use.typekit.net/cmh5aah.css">')

}

function setup() {
  createCanvas(1470,740,'fullscreen');
  
}

function draw() {

  
  
  // record player
  background('#ffebfc');
  noStroke();
  fill('grey');
  rect(540,400,300,200);





  // record1
  fill('red')
  textSize(15);
  text("Not Too Amused",145,160);
  text("Sebadoh",145,190);
  fill('black');
  circle(x1,y1,size1);
  fill('red');
  circle(x1,y1,size1/3)
  fill('#badfff');
  circle(x1,y1,5*size1/150)





  // record2
    fill('blue')
  textSize(15);
  text("Red Chair",345,160);
  text("Guided by Voices",345,190);

  fill('black');
  circle(x2,y2,size2);
  fill('blue');
  circle(x2,y2,size2/3);
  fill('#badfff');
  circle(x2,y2,5*size2/150);


  // record3
  fill('green')
  textSize(11);
  text("Piazza, New York Catcher",545,160);
  text("Belle & Sebastian",545,190);
  fill('black');
  circle(x3,y3,size3);
  fill('green');
  circle(x3,y3,size3/3);
  fill('#badfff');
  circle(x3,y3,5*size3/150);

  // record4
  fill('orange')
  textSize(15);
  text("People Are Strange",745,160);
  text("The Doors",745,190);
  fill('black');
  circle(x4,y4,size4);
  fill('orange');
  circle(x4,y4,size4/3);
  fill('#badfff');
  circle(x4,y4,5*size4/150);



  // record5
  fill('purple')
  textSize(15);
  text("California Dreamin'",945,160);
  textSize(9)
  text("The Mamas and The Papas",945,190);
  fill('black');
  circle(x5,y5,size5);
  fill('purple');
  circle(x5,y5,size5/3);
  fill('#badfff');
  circle(x5,y5,5*size5/150);


  // record6
  fill('teal')
  textSize(9);
  text("Not Like I Was Doing Anything",1145,160);
  text("The Cat's Miaow",1145,190);
  fill('black')
  circle(x6,y6,size6);
  fill('teal');
  circle(x6,y6,size6/3);
  fill('#badfff');
  circle(x6,y6,5*size6/150);

  fill('black');
  // textFont(font1)
  
  textSize(20);
  text("Click on the record you want to listen to!",75,380);

  fill('black');
  textSize(20);
  text("Use the Up Arrow to play the record,",900,500);
  text("Use the Down Arrow to stop the music.",900,530);

  if (recordClicked[0] || recordClicked[1] || recordClicked[2] || recordClicked[3] || recordClicked[4] || recordClicked[5]) {
    push();
    translate(800, 420);
    rotate(radians(needleAngle));
    fill('#adacac');
    rect(0, 0, 10, 150);
    pop();
  } else {
    // resting needle
    fill('#adacac');
    rect(800, 420, 10, 150);
  }
}




function mousePressed(){
  // record1
  if (dist(x1, y1, mouseX, mouseY) < size1 / 2) {
    if (recordClicked[0]) {
      x1 = 200;
      y1 = 150;
      size1 = 150;
    } else {
     
      x1 = x1 + 470;
      y1 = y1 + 350;
      size1 = size1 + 55;
    }
    recordClicked[0] = !recordClicked[0];
  }
  if (dist(x2, y2, mouseX, mouseY) < size2 / 2) {
    if (recordClicked[1]) {
      
      x2 = 400;
      y2 = 150;
      size2 = 150;
    } else {
      
      x2 = x2 + 270;
      y2 = y2 + 350;
      size2 = size2 + 55;
    }
    recordClicked[1] = !recordClicked[1];
  }
  if (dist(x3, y3, mouseX, mouseY) < size3 / 2) {
    if (recordClicked[2]) {
      
      x3 = 600;
      y3 = 150;
      size3 = 150;
    } else {
      
      x3 = x3 + 70;
      y3 = y3 + 350;
      size3 = size3 + 55;
    }
    recordClicked[2] = !recordClicked[2];
  }
  if (dist(x4, y4, mouseX, mouseY) < size4 / 2) {
    if (recordClicked[3]) {
      
      x4 = 800;
      y4 = 150;
      size4 = 150;
    } else {
     
      x4 = x4 - 130;
      y4 = y4 + 350;
      size4 = size4 + 55;
    }
    recordClicked[3] = !recordClicked[3];
  }
  if (dist(x5, y5, mouseX, mouseY) < size5 / 2) {
    if (recordClicked[4]) {
     
      x5 = 1000;
      y5 = 150;
      size5 = 150;
    } else {
      
        x5 = x5 - 330;
      y5 = y5 + 350;
      size5 = size5 + 55;
    }
    recordClicked[4] = !recordClicked[4];
  }
  if (dist(x6, y6, mouseX, mouseY) < size6 / 2) {
    if (recordClicked[5]) {
      
      x6 = 1200;
      y6 = 150;
      size6 = 150;
    } else {
      
      x6 = x6 - 530;
      y6 = y6 + 350;
      size6 = size6 + 55;
    }
    recordClicked[5] = !recordClicked[5];
  }

}



function keyPressed() {
  if (keyCode === UP_ARROW) {
  
    if (recordClicked[0]) {
    song1.play();
    } else if (recordClicked[1]) {
       song2.play();
    } else if (recordClicked[2]) {
         song3.play();
    } else if (recordClicked[3]) {
   song4.play();
    } else if (recordClicked[4]) {
      song5.play();
    } else if (recordClicked[5]) {
    song6.play();
    
  }
  needleAngle = needleAngle + 35;
  
} else if (keyCode === DOWN_ARROW) {

  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song6.stop();
  needleAngle = needleAngle- 35
}
}








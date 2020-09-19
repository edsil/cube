//var r = 128, g = 128, b = 128;
var counter = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  thick = 10;
  size = 20;
  stroke(0);
  background(0);
  //translate(size*thick/2,size*thick/2);
  fill(0);



  orbitControl(1,1,1);
  translate(0, 0, counter);


  push();
  translate(-size*thick, -size*thick, size/2);

  //front-wall
  fill(255);
  push();
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(0,thick,0);
    }
    pop();
    translate(thick,0,0);
  }
  pop();

  //back-wall
  fill(255,255,0);
  push();
  translate(0,0,-size*thick);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(0,thick,0);
    }
    pop();
    translate(thick,0,0);
  }
  pop();

  //right-wall
  fill(0, 0, 255);
  push();
  translate(size*thick,0,0);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(0,thick,0);
    }
    pop();
    translate(0,0,-thick);
  }
  pop();

  //left-wall
  fill(0, 255, 0);
  push();
  translate(0,0,0);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(0,thick,0);
    }
    pop();
    translate(0,0,-thick);
  }
  pop();

  //top-wall
  fill(255,165,0);
  push();
  translate(0,0,0);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(thick,0,0);
    }
    pop();
    translate(0,0,-thick);
  }
  pop();

  //top-wall
  fill(255,165,0);
  push();
  translate(0,0,0);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(thick,0,0);
    }
    pop();
    translate(0,0,-thick);
  }
  pop();

  //bottom-wall
  fill(255,0,0);
  push();
  translate(0,size*thick,0);
  for(a=0; a<size; a++){
    push()
    for(b=0; b<size; b++){
      box(thick);
      translate(thick,0,0);
    }
    pop();
    translate(0,0,-thick);
  }
  pop();

  pop();




}

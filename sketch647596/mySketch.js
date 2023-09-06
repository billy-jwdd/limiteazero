let str = ['Concept','Content design', 'Exhibition design','Graphic design','Copywriting','Information design','Interaction design','Creative Technology','Custom software design','UX/UI','Datavisualization'];
let str_arr = [];

let font;

function preload() {
  font = loadFont("Supreme-Thin.otf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < str.length*10; i++) {
    let x = random(-width/2, width/2);
    let y = random(-height/2, height/2);
    let z = random(-width*5, width/2);
    str_arr.push(new Type(str[i%str.length], x, y, z));
  }
}


function draw() {
  background(0,0,0);
	orbitControl();
  for (let i = 0; i < str_arr.length; i++) {
    str_arr[i].update();
    str_arr[i].display();
  }
}

class Type {
  constructor(_str, _x, _y, _z) {
    this.str = _str;
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  update() {
    this.z += 5;
      if(this.z > width/2){
      this.z = -width*5;
    }

  }

  display() {
    push();
   // rotateY(1);
    translate(this.x, this.y, this.z);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(30);
    fill(212,202,202);
    text(this.str, 0, 0);
    pop();

  }

}

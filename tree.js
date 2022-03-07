function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  background(77,107,83);

  strokeWeight(2.5);
  stroke(50,62,50);
  new Branch(width/4,height,map(mouseX,0,width,-PI/20,PI/2),15,0,3);
  new Branch(width*3/8,height,map(mouseX,0,width,-PI/20,PI/2),10,0,3);
  new Branch(width*3/7,height,map(mouseX,0,width,-PI/20,PI/2),40,0,4);
  
  new Branch(width*5/8,height,map(mouseX,0,width,-PI/20,PI/2),120,0,5);
  new Branch(width*6/8,height,map(mouseX,0,width,-PI/20,PI/2),30,0,4);
  new Branch(width*2/7,height,map(mouseX,0,width,-PI/20,PI/2),50,0,3);
  
  new Branch(width/2,height,map(mouseX,0,width,-PI/20,PI/2),map(mouseY,0,height,80,120),0,5);
  
  new Branch(width/10,height,map(mouseX,0,width,-PI/20,PI/2),70,0,5);
  new Branch(width*2/10,height,map(mouseX,0,width,-PI/20,PI/2),map(mouseY*2,0,height,50,100),0,5);
  new Branch(width*3/10,height,map(mouseX,0,width,-PI/20,PI/2),100,0,6);
  new Branch(width*4/5,height,map(mouseX,0,width,-PI/20,PI/2),map(mouseY/2,0,height,50,100),0,6);
  new Branch(width*7/10,height,map(mouseX,0,width,-PI/20,PI/2),40,0,4);
  new Branch(width*9/10,height,map(mouseX,0,width,-PI/20,PI/2),90,0,5);
}

class Branch
{
  constructor(x,y,a,l,lvl,maxL)
  {
    this.x = x;
    this.y = y;
    this.a = a;
    this.l = l;
    this.lvl = lvl;
    this.maxL = maxL;
    this.crear();
  }
  
  crear()
  {
    push();
    
      translate(this.x,this.y);
      line(0,0,0,-this.l);
      if(this.lvl<this.maxL)
      {
        new Branch(0,0,2*this.a,this.l*2/3,this.lvl+3,this.maxL);
        translate(0,-this.l);
        //new Branch(0,0,-this.a,this.l,this.lvl+1,this.maxL);
        rotate(this.a);
        new Branch(0,0,this.a,this.l*2/3,this.lvl+1,this.maxL);
        rotate(-2*this.a);
        new Branch(0,0,this.a,this.l*2/3,this.lvl+1,this.maxL);
      }
    
    pop();
    
  }
}

//FAST CODE
function setup() 
{
  createCanvas(1200, 1200);
  house = new House();
  body = new Body(width/2,height/2);
  terrain  = new Terrain();
  terrain.display(0);
}

function draw() 
{
  if(house.dentro(body.x,body.y))
  {
    terrain.display(100);
    house.displayInside();
  }
  else
  {
    terrain.display(0);
    house.displayOutside();
  }

  if (isKeyPressed) 
  {
  
    if (key == 'w' || key == 'W') 
    {   
      body.up = true;
      body.down = false;
      body.y-=10; 
      if(body.dirY==body.y+7) body.dirY=-body.dirY;
    }
    if (key == 'a' || key == 'A') 
    {
      body.down = false;
      body.up = false;
      body.left = true;
      body.right = false;
      body.x-=10; 
    }
    if (key == 's' || key == 'S') 
    {  
      body.up = false;
      body.down = true;
      body.y+=10;  
    }
    if (key == 'd' || key == 'D') 
    {
      body.up = false;
      body.down = false;
      body.left = false;
      body.right = true;
      body.x+=10;
    }
  }
  
  if(mouseIsPressed)
  {
    if(mouseX<(width/2)-100 && mouseX>0)
    {  
      body.left = true;
      body.right = false;
      body.x-=10; 
      
    }
    else if(mouseX>(width/2)+100 && mouseX<width)
    {
      if(this.velocityX<0) {this.velocityX*=-1;} 
      body.left = false;
      body.right = true;
      body.x+=10; 
    }
    else
    {
      body.left = false;
      body.right = false;
      body.x = body.x;
    }
  
    if(mouseY<(height/2)-(110) && mouseY>10)
    {
  
      body.up = true;
      body.down = false;
      body.y-=10; 
      if(body.dirY==body.y+7) body.dirY=-body.dirY;
    }
    else if(mouseY>(height/2)+(110) && mouseY<height-10)
    {
      body.up = false;
      body.down = true;
      body.y+=10;  
    }
    else
    {
      body.up = false;
      body.down = false;
      body.y=body.y; 
    }
  }
  
  body.display();
}

class House
{
  constructor()
  {
    this.vx1 = (width/2) -150;  //izquierda
    this.vx2 = (width/2) +150; 
    this.vy1 = (height/2) -150;  //superior
    this.vy2 = (height/2) +150;  //inferior
  }
  
  displayInside()
  {
    //floor  
    beginShape();
      strokeWeight(12.0);
      strokeCap(ROUND);
      stroke(150);
      fill(150);
      vertex(this.vx1+10, this.vy1);
      vertex(this.vx2-10, this.vy1);
      vertex(this.vx2-10, this.vy2);
      vertex(this.vx1+10, this.vy2);
    endShape(CLOSE);
    
    //walls
    beginShape(LINES);
      strokeWeight(12.0);
      strokeCap(ROUND);
      stroke(250,0,0);
      noFill();
      vertex(this.vx1+100, this.vy1);vertex(this.vx1,this.vy1);
      vertex(this.vx2-100, this.vy1);vertex(this.vx2, this.vy1);
      vertex(this.vx2,this.vy1);vertex(this.vx2,this.vy2);
      vertex(this.vx1,this.vy1);vertex(this.vx1,this.vy2);
      vertex(this.vx1,this.vy2);vertex(this.vx2,this.vy2);
    endShape(CLOSE);
    
    //walls_2
    beginShape(LINES);
      strokeWeight(5.0);
      strokeCap(ROUND);
      stroke(240,100,50);
      noFill();
      vertex(this.vx1+100, this.vy1);vertex(this.vx1, this.vy1);
      vertex(this.vx2-100, this.vy1);vertex(this.vx2, this.vy1);
      vertex(this.vx2,this.vy1);vertex(this.vx2,this.vy2);
      vertex(this.vx1,this.vy1);vertex(this.vx1,this.vy2);
      vertex(this.vx1,this.vy2);vertex(this.vx2,this.vy2);
    endShape(CLOSE);

    //door
    beginShape(LINES);
      strokeWeight(6.0);
      stroke(0);
      vertex(this.vx1+100, this.vy1);
      vertex(this.vx2-100, this.vy1);
    endShape();
  }
  
  displayOutside()
  {
    beginShape();
      strokeWeight(12.0);
      strokeCap(ROUND);
      stroke(150);
      fill(250,0,100);
      vertex(this.vx1+10, this.vy1);
      vertex(this.vx2-10, this.vy1);
      vertex(this.vx2-10, this.vy2);
      vertex(this.vx1+10, this.vy2);
    endShape(CLOSE);
  
  }
  
  dentro(xi, yi)
  {  
    if( xi > this.vx1 && xi < this.vx2  )
    {
      if( yi < this.vy2 && yi > this.vy1){return true;}
      return false;
    }else return false; 
  }
}

class Body
{
  constructor(x,  y)
  {
    this.up = true; this.down = false; this.left = false; this.right = false;
    this.x = x;
    this.y = y;
  }
  
  display()
  {
    //body
    fill(0,120,0,120);
    strokeWeight(1.0);
    ellipse(this.x,this.y,10,10);
    stroke(0,12,12);
    noFill();
    strokeWeight(2.0);
    ellipse(this.x,this.y,11,11);
    
    //arms
    if(this.up || this.down)
    {
      if(this.up)
      {
        this.dirY = (this.y-7);
        
      } 
      else if(this.down) 
      {
        this.dirY = (this.y+7);
      }
      line(this.x+5,this.y+2,this.x+10,this.dirY);
      line(this.x-5,this.y+2,this.x-10,this.dirY);
    }
    else
    {
      if(this.right)
      {
        this.dirX = this.x+7;
        line(this.x+2,this.y+5,this.dirX,this.y+10);
        line(this.x+2,this.y-5,this.dirX,this.y-10);
      }
      else
      {
        this.dirX = this.x-7;
        line(this.x+2,this.y+5,this.dirX,this.y+10);
        line(this.x+2,this.y-5,this.dirX,this.y-10);
      }
    }
  } 
}

class Terrain
{
  constructor()
  {
    this.c = 50;
  }
  display(cc)
  {
    for(this.i=0;this.i<width;this.i+=14)
    {      
    
      for(this.ii=0; this.ii<height; this.ii+=14)
      {  
        noStroke(); 
        fill(50,random(70,110), random(cc,100));
        rect(this.i,this.ii,50,50);
            
      }
    }
  }
}

class Figura 
{
  constructor(x,y, alto, ancho, vx, vy) 
  {
    this.posicion=createVector(x,y);
    this.alto = alto;
    this.ancho = ancho;
    this.fillred=0;
    this.fillgreen=255;
    this.fillblue=154;
    this.velocidad= createVector(vx,vy);
  }
  update()
  {
    //derecha
    if(this.posicion.x + this.ancho >= 450)
       {
         this.velocidad.x=this.velocidad.x * -1
         this.velocidad.y=this.velocidad.y * 1;
       }
    //izquierda
    if(this.posicion.x + this.ancho <= this.ancho)
       {
         this.velocidad.x=this.velocidad.x * -1
         this.velocidad.y=this.velocidad.y * 1;
       }
    //arriba
    if(this.posicion.y + this.alto <= this.alto)
       {
         this.velocidad.x=this.velocidad.x * 1
         this.velocidad.y=this.velocidad.y * -1;
       }
    //abajo
    if(this.posicion.y + this.alto >= 550)
       {
         this.velocidad.x=this.velocidad.x * 1
         this.velocidad.y=this.velocidad.y * -1;
       }
    this.posicion.add(this.velocidad);
  }
}

class Rectangulo extends Figura
{
  constructor(x,y, alto, ancho, vx, vy) 
  {
    super (x,y, alto, ancho, vx, vy);
  }
  draw()
  {
    fill(255,100,122);
    rect(this.posicion.x,this.posicion.y,this.alto,this.ancho);
    stroke("Black");
    strokeWeight(3);
  }
}

class Elipse extends Figura
{
  constructor(x,y, alto, ancho, vx, vy) 
  {
    super (x,y, alto, ancho, vx, vy);
  }
  draw()
  {
    fill(0,255,154);
    ellipse(this.posicion.x,this.posicion.y,this.alto,this.ancho);
    stroke("Black");
    strokeWeight(3);
  }
}

var figuras=[];
var dibujando;
var btnCirculo=null;
var btnRectangulo=null;
function setup() 
{
  createCanvas(500, 500);
  
  btnCirculo= createButton('Circulo')
  btnCirculo.position(10,0);
  btnCirculo.mousePressed(changeCirculo);
  
  btnRectangulo = createButton('Rectangulo')
  btnRectangulo.position(80,0);
  btnRectangulo.mousePressed(changeRectangulo);
}

function changeCirculo()
{
  btnCirculo.style('background-color','#cccccc');
  btnRectangulo.style('background-color','#FFFFFF');
  dibujando='circulo'
}

function changeRectangulo()
{
  btnRectangulo.style('background-color','#cccccc');
  btnCirculo.style('background-color','#FFFFFF');
  dibujando='rectangulo'
}

function draw() 
{
  background(1000);
  figuras.forEach((fig) =>{fig.draw();fig.update();});
}

function mouseClicked() 
{
  //se crea un objeto segun la opcion actual
  if (mouseY>20)
    {
     if (dibujando=='circulo')
  figuras.push(new Elipse(mouseX, mouseY,100,50,2,2));
  else if (dibujando=='rectangulo')
  figuras.push(new Rectangulo(mouseX, mouseY,100,50,2,2)); 
    }
  // prevent default
  return false;
}
class Figura
{
    constructor(x,y,alto,ancho)
    {
      this.x=x;
      this.y=y;
      this.alto=alto;
      this.ancho=ancho;
    }
}

class Cuadro extends Figura
{
    constructor(x,y,alto,ancho)
    {
      super(x,y,alto,ancho);
    }
    draw()
    {
      rect(this.x,this.y,this.alto,this.ancho);
    }
}

class Elipse extends Figura
{
    constructor(x,y,alto,ancho)
    {
      super(x,y,alto,ancho);
    }
    draw()
    {
      fill(153,0,0);
      ellipse(this.x,this.y,this.alto,this.ancho);
    }
}

function mousePressed()
{
  let balitas=new Cuadro(mouseX,600,10,10);
  Balas.push(balitas);
  //crea enemigos cada pressed del mouse, por lo tanto nunca dejan de aparecer
  let enemigos=new Cuadro(random(0,777),-5,23,23);
  Enemigos.push(enemigos);
  
}


var mouseX=this.x;
var Balas=[];
var Enemigos=[];
function setup() 
{
  createCanvas(800, 700);
  //con el for en el setup crea enemigos de un jalon
  //for(let i=0; i<10; i++){
  //let enemigos=new Cuadro(random(0,780),-5,20,20);
  //Enemigos.push(enemigos);}
}

function draw() 
{
  background(1000)
  let circulo=new Elipse(mouseX,666,65,65);
  circulo.draw();
  //para dibujar balitas
  for(let balitas of Balas)
    {
      fill(255,255,0);
      balitas.y-=8;
      balitas.draw();
    }
  //for para dibujar enemigos
  for(let enemigos of Enemigos)
    {
      enemigos.y+=1.3;
      fill(0,0,0);
      enemigos.draw();
    }
  
  for(enemigos of Enemigos){
   for(balitas of Balas){
    if (dist(enemigos.x,enemigos.y,balitas.x,balitas.y)<15){
      Enemigos.splice(Enemigos.indexOf(enemigos),1);
      Balas.splice(Balas.indexOf(balitas),1);
    }
    }
    }
  
  for(enemigos of Enemigos){
  if (enemigos.y>height)
  {
    textSize(40)
    textStyle(BOLD)
    fill(0,153,0)
  text("GAME OVER",300,height/2);
    noLoop();
  }
  }
}

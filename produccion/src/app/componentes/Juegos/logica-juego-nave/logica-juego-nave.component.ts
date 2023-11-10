import { Component } from '@angular/core';

@Component({
  selector: 'app-logica-juego-nave',
  templateUrl: './logica-juego-nave.component.html',
  styleUrls: ['./logica-juego-nave.component.css']
})
export class LogicaJuegoNaveComponent {

      canva:HTMLCanvasElement|null=null;
      puntajeHistorico=0;
      puntajeActual=1;
      ctx:CanvasRenderingContext2D  | null=null;
      //localStorage
      backgroundImage: HTMLImageElement= new Image();
      naveImage: HTMLImageElement= new Image();
      enemigo1: HTMLImageElement= new Image();
      enemigo2: HTMLImageElement= new Image();
      enemigo3: HTMLImageElement= new Image();
      bala: HTMLImageElement= new Image();
      arregloEnemigos:Enemigos[]=[];
      cH=0;
      cW=0;
      yNave=430;
      xNave=300;
      wNave=100;
      hNave=100;
      direccionNave:string="";
      misiles:Misil[]=[]; 
      estadoJuego=false;

      constructor()
      {
        let ruta="../../../../assets/imagenes/"
        this.backgroundImage.src=ruta+"fondoJuego.jpeg"
        this.naveImage.src=ruta+"/naveJuego.png"
        this.enemigo1.src = ruta+"/enemigo1.png"
        this.enemigo2.src = ruta+"/enemigo2.png"
        this.enemigo3.src = ruta+"/enemigo3.png"
        this.bala.src=ruta+"/bala.png";
        //asignar historico en el localStorage

      }

   ngOnInit():void{
    this.canva = <HTMLCanvasElement>document.getElementById("my_canvas");
    if (this.canva) {
      this.ctx = this.canva.getContext("2d");

      if (this.ctx) {

        this.cW =this.ctx.canvas.width;
        this.cH= this.ctx.canvas.height;

        const vistaInteval= setInterval(()=>{this.correrJuego()},6);


      } else {
        console.error("2D context is not supported on this canvas.");
      }
    } else {
      console.error("Canvas element with id 'my_canvas' not found.");
    }
  }
  
  recorrerEnemigos()
{
  if(this.ctx)
  for(var i=0; i < this.arregloEnemigos.length; i++)
  {
      
      this.impactarLinea()
      var enemy= this.arregloEnemigos[i];
      let velo=.1
      if(enemy.velo!==1)
      {
        velo= enemy.velo*0.01
      }
      
     
      
      this.ctx.drawImage(enemy.image,enemy.x,enemy.y+=velo,enemy.w,enemy.h)
  }}


  impactarLinea()
  {
    for(var i=0; i<this.arregloEnemigos.length;i++)
    {
        var e= this.arregloEnemigos[i];

        if(e.y>=this.yNave && this.estadoJuego)
        {
          this.finalizarJuego()
        }
    }

  }
  iniciarJuego()
  {
    if(!this.estadoJuego)
   {
      this.agregarEnemigo();
      this.estadoJuego=true;
   }
  }
impactoMisil(m:Misil)
{
  for(var i=0; i<this.arregloEnemigos.length;i++)
            {
                var e= this.arregloEnemigos[i];

                if(m.x<=e.x+e.w && m.x+ m.w >= e.x && m.y<= e.y+ e.h)
                {
                    
                    this.arregloEnemigos.splice(i,1);
                    this.puntajeActual += (i+1)*10;
                    this.agregarEnemigo();
             
                }
              }

}
 
  correrJuego()
  {
    this.render();
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.escuchadoresAlta(event.keyCode);
    });
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.escuchadoresBaja(event.keyCode);
    });
  }


  finalizarJuego()
  {
    /** 
     *  1. avisar finalizacion: -> puntaje conseguido -> historico 
     *  2. actualizacion del ls (solo si el puntaje actual > historico)
     *  3.  puntaje actual = 0
     *  4. reiniciar arreglo asteroides
     *  5. reiniciar arreglo misiles
    */
  }


  agregarEnemigo()
  {
    
      var numAleatorio= Math.floor(Math.random() * 617) + 15;
    

    if(numAleatorio<150)
    {
      this.arregloEnemigos.push(new Enemigos("2",numAleatorio,50,50,50,(this.puntajeActual),this.enemigo1))
    }else if(numAleatorio>=150 && numAleatorio<=340)
    {
      this.arregloEnemigos.push(new Enemigos("1",numAleatorio,50,50,50,(this.puntajeActual),this.enemigo2))
    }else
    {
      this.arregloEnemigos.push(new Enemigos("3",numAleatorio,50,50,50,(this.puntajeActual),this.enemigo3))
    }
    
  }



  // contacto Enemigo
  // contato limite
  escuchadoresBaja(keyCode:number)
  {
    if(keyCode === 39 ||keyCode===68)
      {
          
        this.direccionNave='';
      
      }else if(keyCode === 37 ||keyCode===65)
      {
          
        this.direccionNave=''; 
      }
  }

  escuchadoresAlta(keyCode:number)
  {

      if(keyCode === 39 ||keyCode===68)
      {
          if(this.xNave<617)
          {
              this.direccionNave="right"
          }else
          {
            this.direccionNave='';
          }
          
            
      
      }else if(keyCode === 37 ||keyCode===65)
      {
          
          
          if(this.xNave>this.cW/90)
          {
            this.direccionNave="left"
          }else
          {
            this.direccionNave='';
          }       
          
      }
      
      
      if(keyCode ===32)
      {
        this.direccionNave='';
        if(this.misiles.length<10)
        {
          this.misiles.push(new Misil(this.xNave,this.yNave))
        }
        
        
      }
  

  }

  render()
  {
   
    this.direccion();
    if(this.ctx!=null)
    {

      this.ctx.drawImage(this.backgroundImage,0,0);

      this.ctx.fillRect(0,this.yNave-15,this.cW,1)
      this.ctx.drawImage(this.naveImage,this.xNave,this.yNave,100,115)


      this.misilesDisparar();
      this.recorrerEnemigos()
      
    }
        
  }


misilesDisparar()
{
  if(this.ctx)
  {
    for(var i=0;i< this.misiles.length;i++)
    {
        var m = this.misiles[i];
        this.ctx.drawImage(this.bala,m.x,m.y-=5, 10,15);
        this.impactoMisil(m);
        if(m.y<=0)
        {
            this.misiles.splice(i,1);
        }
        
    }
  }
 
}
direccion()
{ if(this.direccionNave === 'left')
{
    if(this.puntajeActual<80)
    {
        this.xNave -=1.5
    }else if(this.puntajeActual>=80 && this.puntajeActual<200)
    {
      this.xNave -=2.5
    }else
    {
      this.xNave -=2.8
    }
    
}else if (this.direccionNave === 'right')
{
    if(this.puntajeActual<100)
    {
      this.xNave +=1.5
    }else if(this.puntajeActual>=80 && this.puntajeActual<200)
    {
      this.xNave +=2.5
    }else
    {
      this.xNave +=2.8
    }
}

}
  // funcion para agregarEnemigo
  // funcion para renderizar al enemigo
  // for para los misiles
  // funcion para detectar asteroides y sumar puntos
  // funcion para detectar linea
  // funcion para animar (renderiza la imager) -> condicional con estado del juego
  // iniciar juego cuando apriete boton
  // funcion finalizar juego
  // escuchadores para teclas
  // window load para iniciar canva
}
class Enemigos{
  id: any;
  x: any;
  y: any;
  w: any;
  h: any;
  velo: any;
  image: any;

  constructor(id: any, x: any, y: any, w: any, h: any, velo: any, image: any) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velo = velo;
    this.image = image;
  }
}

class Misil{
  x:any;
  y:any;
  w:number=3;
  h:number=10;

  constructor(x:number,y:number)
  {
    this.x=x+40;
    this.y=y
  }

}


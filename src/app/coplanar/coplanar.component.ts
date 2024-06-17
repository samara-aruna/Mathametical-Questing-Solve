import { Component } from '@angular/core';

@Component({
  selector: 'app-coplanar',
  templateUrl: './coplanar.component.html',
  styleUrl: './coplanar.component.css'
})
export class CoplanarComponent 
{

 public F1!:number;
  public F2!:number;
  public F3!:number;
  public A1!:number;
  public A2!:number;
  public A3!:number;

  public codrant1!:number;
  public codrant2!:number;
  public codrant3!:number;
  

  public horizontal1!:number;
  public vartical1!:number;
  public horizontal2!:number;
  public vartical2!:number;
  public horizontal3!:number;
  public vartical3!:number;
  public horizontal4!:number;
  public vartical4!:number;
  public result!:number;
  public horizontal!:number;
  public vartical!:number;


 

  cal1()
  {
    if(this.codrant1 == 1)
      {
        this.horizontal1 = this.F1*(Math.cos(this.A1*Math.PI/180));
        this.vartical1 = this.F1*Math.sin(this.A1*Math.PI/180);
        
      }
    else if(this.codrant1 == 2)
      {
        this.horizontal1 = -this.F1*Math.cos(this.A1*Math.PI/180);
        this.vartical1 = this.F1*Math.sin(this.A1*Math.PI/180);
      }
    else if(this.codrant1 == 3)
      {
        this.horizontal1 = -this.F1*Math.cos(this.A1*Math.PI/180);
        this.vartical1 = -this.F1*Math.sin(this.A1*Math.PI/180);
      }
      else
      {
        this.horizontal1 = this.F1*Math.cos(this.A1*Math.PI/180);
        this.vartical1  = -this.F1*Math.sin(this.A1*Math.PI/180);
      }
      
  }
  cal2()
  {
    if(this.codrant2 == 1)
      {
        this.horizontal2 = this.F2*(Math.cos(this.A2*Math.PI/180));
        this.vartical2 = this.F2*Math.sin(this.A2*Math.PI/180);
        
      }
    else if(this.codrant2 == 2)
      {
        this.horizontal2 = -this.F2*Math.cos(this.A2*Math.PI/180);
        this.vartical2 = this.F2*Math.sin(this.A2*Math.PI/180);
      }
    else if(this.codrant2 == 3)
      {
        this.horizontal2 = -this.F2*Math.cos(this.A2*Math.PI/180);
        this.vartical2 = -this.F2*Math.sin(this.A2*Math.PI/180);
      }
      else
      {
        this.horizontal2 = this.F2*Math.cos(this.A2*Math.PI/180);
        this.vartical2  = -this.F2*Math.sin(this.A2*Math.PI/180);
      }
    
  }
  cal3()
  {
    if(this.codrant3 == 1)
      {
        this.horizontal3 = this.F3*(Math.cos(this.A3*Math.PI/180));
        this.vartical3 = this.F3*Math.sin(this.A3*Math.PI/180);
        
      }
    else if(this.codrant3 == 2)
      {
        this.horizontal3 = -this.F3*Math.cos(this.A3*Math.PI/180);
        this.vartical3 = this.F3*Math.sin(this.A3*Math.PI/180);
      }
    else if(this.codrant3 == 3)
      {
        this.horizontal3 = -this.F3*Math.cos(this.A3*Math.PI/180);
        this.vartical3 = -this.F3*Math.sin(this.A3*Math.PI/180);
      }
      else
      {
        this.horizontal3 = this.F3*Math.cos(this.A3*Math.PI/180);
        this.vartical3  = -this.F3*Math.sin(this.A3*Math.PI/180);
      }
  }

  cal_total()
  {
    this.result = Math.sqrt(((this.horizontal1+this.horizontal2+this.horizontal3)*(this.horizontal1+this.horizontal2+this.horizontal3))+((this.vartical1+this.vartical2+this.vartical3)*(this.vartical1+this.vartical2+this.vartical3)));
  }


 
  
}



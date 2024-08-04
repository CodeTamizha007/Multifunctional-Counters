import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  firstValue!:number
  secondValue!:number
  icon=""
  result!:number
  StringValue=''
  bool=true;

  strlen=0;
  charcount=0;
  specchar=0;
  spacecount=0;
  numbercount=0;
  
  add(){
    console.log("dfsdf");
    this.bool=true;
    this.icon="+" 
    this.result=this.firstValue+this.secondValue };
  sub(){this.bool=true;
    this.icon="-"
     this.result=this.firstValue-this.secondValue}
  multi(){this.bool=true;
    this.icon="*" 
    this.result=this.firstValue*this.secondValue}
  div(){this.bool=true;
    this.icon="/" 
    this.result=this.firstValue/this.secondValue}
  mod(){this.bool=true;
    this.icon="%" 
    this.result=this.firstValue%this.secondValue}
  sqr(){this.bool=false;
    this.icon="^2" 
    this.result=this.firstValue*this.firstValue}
  root(){this.bool=false;
    this.icon="root" 
    this.result=Math.sqrt(this.firstValue)}
  cube()   {this.bool=false;
    this.icon="^3"
    this.result=this.firstValue*this.firstValue*this.firstValue}
  cubeRoot()  {this.bool=false;
    this.icon="cube root"
   
    this.result=Math.cbrt(this.firstValue)}
    StringvalueChange(){
      this.strlen=0;
  this.charcount=0;
  this.specchar=0;
  this.spacecount=0;
  this.numbercount=0;
       
      this.strlen=this.StringValue.length;
      for(let i=0;i<this.StringValue.length;i++){
        if(this.StringValue[i].match(/[A-Za-z]/)){
          this.charcount++;
        }else if(this.StringValue[i].match(/[0-9]/)){
          this.numbercount++
        }else if(this.StringValue[i].match(/\s/)){
          this.spacecount++
        }else{
          this.specchar++
        }
      }
    }
  
}

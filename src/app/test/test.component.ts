import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  
  template:`
  <div [ngStyle]="{'color': 'blue', 'font-size': '24px', 'font-weight': 'bold'}">
    some text
</div> 
  <div>
              Inline template
              welcome {{name}}
              </div>
              <h2 [ngClass]="colorBinding">First Class from ngclass</h2>
              <h2>{{"welcome "+name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{geetUser()}}</h2>
              <input id="{{myId}}" type="text" value="optum1234" [disabled]="isDisabled">
              <input [id]="myId" type="text" value="Madhu">
              <input [disabled]="isDisabled" id={{myId}} type="text" value="Madhu">
              <h2 class="text-success">Optum1</h2>
              <h2 [class]="successClass">Optum</h2>
              <h2 [class.text-danger]="hasError">OPtum</h2>
              <h2 [ngClass]="messageClasses">optum</h2>
              <h2 [style.color]="'orange'">Optum</h2>
              <h2 [style.color]="hasError?'blue':'red'">Optum</h2>
              <h2 [style.color]="stylecss">Optum</h2>
              <h2 [ngStyle]="titleStyles">optum</h2>
              <button (click)="onclick($event)">Greet</button>
              <button (click)="name='welcome madhu'">Greet1</button>
              <h2>{{name}}<h2>
              <input #myInput type="text">
              <button (click)=logMessage(myInput.value)>LogMsg</button>
              <input type="text" [(ngModel)]="name">
              <h2>{{name}}</h2>
               <h2 *ngIf="ngifTrueorfalse">This is Structural ng if directive</h2>

              <h2 *ngIf="ngifTrueorfalse;else elseblock">Structural Directive ngif 12345</h2>



              <h2 *ngIf="isSpecial;then thenblock; else elseblock">Structural Directive ngif</h2>
              <ng-template #elseblock>
              <h2>
              My name
              </h2>
              </ng-template>
              <ng-template #thenblock>
              <h2>
              My name1
              </h2>
              </ng-template>
              <br/>
              <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked red color</div>
              <div *ngSwitchCase="'blue'">You picked blue color</div>
              <div *ngSwitchCase="'green'">You picked green color</div>
              <div *ngSwitchDefault>pick again</div>
              </div>
              `,
              
  styles: [`
  div{
    color:red;
  }
  .text-success{
    color:red;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  
  public colorBinding:string="text-success";

  public ngifTrueorfalse:boolean=false;
  public name1="";
  public name="angular training basic";
  public myId="id1";
  public isDisabled:any=false; 
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  

  public stylecss="pink";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }
  public color="blue";
  constructor() { }

  ngOnInit(): void {

  }
geetUser(){
  return "hello "+this.name
}
onclick(event)
{
  console.log(event);
  this.name="Hello Optum"
}
logMessage(value)
{
  console.log(value);
}
}

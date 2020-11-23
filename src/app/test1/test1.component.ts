import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Input() myinputMsg:string; 
  myinput1:boolean=false;
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  
  outputMessage:string="I am child component."  
  constructor() { }

  ngOnInit(): void {
   // console.log(this.myinputMsg);
   console.log("nginit");
  }
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 }  
 ngOnChanges(){
  console.log("ngonchaanges")
}
ngDoCheck(){
  console.log("ng do check");
}
}

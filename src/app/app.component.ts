import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'Hello-world';
  outputdata='';
  myInputMessage:string ="I am the parent comppnent";
  GetChildData(data){  
   this.outputdata=data;
   

 }  
}
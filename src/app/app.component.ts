import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-practice';
  data:any = []
  myData: any;
  data1:any;
  data2:any;
  data3:any;

  ngOnInit(){
    this.data = {user:'demo',contact:123456,email:'demo@gmail.com'}
}
 
 getData(data:any){
  console.log(data);
}
}

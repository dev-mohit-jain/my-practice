import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allUsers: any;
  user: any;

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    const users = JSON.parse(localStorage.getItem('myData') || '[]');
    this.allUsers = users;
  }

  addToFav(user: any){
    this.user = user;
    const myfav = JSON.parse(localStorage.getItem('favData') || '[]')
    const userExists = myfav.some((existingUser:any) => existingUser.fname === this.user.fname);
    console.log(userExists);
    if(!userExists){
      myfav.push(this.user);
      localStorage.setItem('favData', JSON.stringify(myfav));
      console.log(myfav);
    }else{
      alert("Already Exist");
    }
  }
}
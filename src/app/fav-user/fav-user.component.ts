import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-user',
  templateUrl: './fav-user.component.html',
  styleUrls: ['./fav-user.component.css']
})
export class FavUserComponent {
  favUser:any;
  ngOnInit(){
    this.getFavUSer();
  }
  getFavUSer(){
    this.favUser = JSON.parse(localStorage.getItem('favData') || '[]');
 }
 remove(user:any){
const index = this.favUser.indexOf(user)
console.log(index);
if(index !== -1){
  this.favUser.splice(index,1);
  localStorage.setItem('favData', JSON.stringify(this.favUser));
  alert("Succesfully removed")
  this.getFavUSer();
}
 }
}

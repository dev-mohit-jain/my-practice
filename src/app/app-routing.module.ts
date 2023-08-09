import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { UsersComponent } from './users/users.component';
import { FavUserComponent } from './fav-user/fav-user.component';

const routes: Routes = [
  {
    path:'',
    component:MyformComponent
  },
  {
    path:'form',
    component:MyformComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'fav-user',
    component:FavUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

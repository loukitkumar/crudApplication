import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UpdateformComponent } from './updateform/updateform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  {path:'updt/:id',component: UpdateformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

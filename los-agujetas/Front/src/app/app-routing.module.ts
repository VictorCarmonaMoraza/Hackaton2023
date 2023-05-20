import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FaseprojectComponent } from './pages/faseproject/faseproject.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'fase', component:FaseprojectComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

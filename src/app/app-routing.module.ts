import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'',loadChildren:'./home/home.module#HomeModule',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

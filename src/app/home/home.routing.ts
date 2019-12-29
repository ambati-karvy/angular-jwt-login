import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RolesComponent } from '../roles/roles.component';

const routes :Routes = [
    {path:'', component:HomeComponent,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'roles',component:RolesComponent}
    ]}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouting {}
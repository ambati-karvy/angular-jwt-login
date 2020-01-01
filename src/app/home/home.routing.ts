import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RolesComponent } from '../roles/roles.component';
import { SenderComponent } from './sender/sender.component';
import { RecivedComponent } from './recived/recived.component';
import { DependanceInjectionComponent } from './dependance-injection/dependance-injection.component';
import { AuthGuard } from '../auth-guard';

const routes :Routes = [
    {path:'', component:HomeComponent,canActivateChild:[AuthGuard],children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'roles',component:RolesComponent},
        {path:'sender',component:SenderComponent},
        {path:'reciver',component:RecivedComponent},
        {path:'di-action',component:DependanceInjectionComponent}
    ]}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouting {}
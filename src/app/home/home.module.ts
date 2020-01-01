import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RolesComponent } from '../roles/roles.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../token-interceptor.service';
import { SenderComponent } from './sender/sender.component';
import { RecivedComponent } from './recived/recived.component';
import { DependanceInjectionComponent } from './dependance-injection/dependance-injection.component';


@NgModule({
  declarations: [HomeComponent,
  NavigationComponent,
  DashboardComponent,
  RolesComponent,
  SenderComponent,
  RecivedComponent,
  DependanceInjectionComponent],
  imports: [
    CommonModule,
    HomeRouting
  ],
  providers:[]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
      ]
    };
  }
}

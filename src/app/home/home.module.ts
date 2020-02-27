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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDirective } from './sender/common-properites/book.directive';
import { WriterComponent } from './sender/common-properites/writer.component';
import { FavoriteBookComponent } from './sender/common-properites/favorite-book.component';
import { FriendComponent } from './sender/common-properites/friend.component';
import { NumberComponent } from './sender/common-properites/number/number.component';
import { OfficeComponent } from './sender/common-properites/office.component';

@NgModule({
  declarations: [HomeComponent,
  NavigationComponent,
  DashboardComponent,
  RolesComponent,
  SenderComponent,
  RecivedComponent,
  DependanceInjectionComponent,
  BookDirective,
  WriterComponent,
  FavoriteBookComponent,
  FriendComponent,
  NumberComponent,
  OfficeComponent],
  imports: [
    CommonModule,
    HomeRouting,
    FormsModule,
    ReactiveFormsModule
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

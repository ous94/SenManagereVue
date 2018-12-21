import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// importation
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { DemandeEmployeeComponent } from './demande-employee/demande-employee.component';

const appRoutes: Routes = [

    {path:'',component:HomeComponent},
    {path:'employee',component:DemandeEmployeeComponent},
    {path:'login',component:LoginComponent},

    /* { path: '', component: HomeComponent, pathMatch: 'prefix', children: [
      {path: '', component: HomeComponent}, {path: 'login', component: LoginComponent} ] }, */
   
];


/* const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/:login', component: LoginComponent },
  { path: 'employee', component: DemandeEmployeeComponent }
];
 */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DemandeEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

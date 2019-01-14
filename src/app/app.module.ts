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
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NouveauEmployeeComponent } from './nouveau-employee/nouveau-employee.component';
import { AsideComponent } from './aside/aside.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatistiqueComponent } from './statistique/statistique.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { EspaceClientComponent } from './espace-client/espace-client.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { HomedComponent } from './homed/homed.component';
import { ScriptComponent } from './script/script.component';
import { SectionAcceuilComponent } from './section-acceuil/section-acceuil.component';
import { HeadAdminComponent } from './head-admin/head-admin.component';
import { ClientComponent } from './client/client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { EmployeDisponibleComponent } from './employe-disponible/employe-disponible.component';
import { ConctactComponent } from './conctact/conctact.component';
import { HeadClientComponent } from './head-client/head-client.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Nav1Component } from './nav1/nav1.component';
import { ClientConnectComponent } from './client-connect/client-connect.component';
import { AdministrationComponent } from './administration/administration.component';
import { TableClientComponent } from './table-client/table-client.component';
import { InscriptionComponent } from './employee/inscription/inscription.component';
import { Footer1Component } from './footer1/footer1.component';
///tost
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { TapeEmployerComponent } from './employee/tape-employer/tape-employer.component';
import { MesClientsComponent } from './client/mes-clients/mes-clients.component';

const appRoutes: Routes = [

  {path: '', pathMatch: 'full', component: HomeComponent},
   {path:'DemandeEmployee',component:DemandeEmployeeComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path:'main',component:MainComponent},

    { path: 'aside', component:AsideComponent },
    { path: 'nouveau', component:NouveauEmployeeComponent},
    { path: 'serviceAdmin', component:RechercheComponent}, 
    { path: 'listeEmp', component:ListeEmployeComponent}, 
    { path: 'statistique', component:StatistiqueComponent}, 
    {path:'log',component:ConnexionComponent},
    {path:'EspaceClient',component:EspaceClientComponent},
    {path:'nav',component:NavbarComponent},
    {path:'client',component:ClientComponent},
    {path:'listeClient',component:ListeClientComponent},
    {path:'test',component:TestComponent},
    {path:'employDisponible',component:EmployeDisponibleComponent},
    {path:'contacter',component:ConctactComponent},
    //new version
    {path:'nav1',component:Nav1Component},
    {path:'clientconnect',component:ClientConnectComponent},
    {path:'employee/inscription',component:InscriptionComponent},
    {path:'administration',component:AdministrationComponent},
    {path:'emloyee/tapeemploye',component:TapeEmployerComponent},
    {path:'client/mesclients',component:MesClientsComponent},


















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
    AsideComponent,
    DemandeEmployeeComponent,
    AdminComponent,
    MainComponent,

    FooterComponent,
    RechercheComponent,
    NouveauEmployeeComponent,
    ListeEmployeComponent,
    SidebarComponent,
    StatistiqueComponent,
    ConnexionComponent,
    EspaceClientComponent,
    NavbarComponent,
    TestComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    HomedComponent,
    ScriptComponent,
    SectionAcceuilComponent,
    HeadAdminComponent,
    ClientComponent,
    ListeClientComponent,
    EmployeDisponibleComponent,
    ConctactComponent,
    HeadClientComponent,
    CarouselComponent,
    Nav1Component,
    ClientConnectComponent,
    AdministrationComponent,
    TableClientComponent,
    InscriptionComponent,
    Footer1Component,
    TapeEmployerComponent,
    MesClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilClientComponent } from './client/acceuil-client/acceuil-client.component';
import { NouvelleDemandeComponent } from './client/nouvelle-demande/nouvelle-demande.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TapeEmployerComponent } from './employee/tape-employer/tape-employer.component';
import { MesClientsComponent } from './client/mes-clients/mes-clients.component';
import { MesEmplyesComponent } from './employee/mes-emplyes/mes-emplyes.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ToastrModule } from 'ngx-toastr';
import { TapeClientComponent } from './client/tape-client/tape-client.component';
import { Test2Component } from './employee/test2/test2.component';
import { TapeRechercheComponent } from './recherche/tape-recherche/tape-recherche.component';
import { RechercheEmployeeComponent } from './employee/recherche-employee/recherche-employee.component';
import { RechercheSituationMatrimonialeComponent } from './employee/recherche-situation-matrimoniale/recherche-situation-matrimoniale.component';
import { RechercheReligionComponent } from './employee/recherche-religion/recherche-religion.component';
import { RechercheEmailComponent } from './employee/recherche-email/recherche-email.component';
import { RechercheNiveauEtudesComponent } from './employee/recherche-niveau-etudes/recherche-niveau-etudes.component';
import { RechercheExperienceComponent } from './employee/recherche-experience/recherche-experience.component';
import { RechercheFormationComponent } from './employee/recherche-formation/recherche-formation.component';
import { TapePlusComponent } from './employee/tape-plus/tape-plus.component';
import { RechercheLanguesComponent } from './employee/recherche-langues/recherche-langues.component';
import { RechercheDisponibiliteComponent } from './employee/recherche-disponibilite/recherche-disponibilite.component';
import { RecherchePaysComponent } from './employee/recherche-pays/recherche-pays.component';
import { Contact1Component } from './contact1/contact1.component';
import { RechercheCompetenceComponent } from './employee/recherche-competence/recherche-competence.component';
import { RechercheEthniesComponent } from './employee/recherche-ethnies/recherche-ethnies.component';
import { RechercheLocaliteComponent } from './employee/recherche-localite/recherche-localite.component';
import { TapeDemandeComponent } from './Adm/tape-demande/tape-demande.component';
import { MesDemandesComponent } from './Adm/mes-demandes/mes-demandes.component';

import { ClientnewAdmComponent } from './Adm/clientnew-adm/clientnew-adm.component';
import { MesemployesAdmComponent } from './Adm/mesemployes-adm/mesemployes-adm.component';

import { ContratClientComponent } from './client/contrat-client/contrat-client.component';
import { ListeEmployesComponent } from './client/liste-employes/liste-employes.component';
import { ProfilComponent } from './client/profil/profil.component';

import { MessagesAdmComponent } from './Adm/messages-adm/messages-adm.component';
import { RechMessageAdmComponent } from './Adm/rech-message-adm/rech-message-adm.component';
import { EditerClientComponent } from './client/editer-client/editer-client.component';
import { ListeDemandeComponent } from './client/liste-demande/liste-demande.component';
import { RefPaysComponent } from './Adm/ref-pays/ref-pays.component';
import { ReflocaliteComponent } from './Adm/reflocalite/reflocalite.component';
import { RefEthnieComponent } from './Adm/ref-ethnie/ref-ethnie.component';
import { RefTypeIdenComponent } from './Adm/ref-type-iden/ref-type-iden.component';
import { RechercheCliAdmComponent } from './Adm/recherche-cli-adm/recherche-cli-adm.component';
import { RechercheEmpAdmComponent } from './Adm/recherche-emp-adm/recherche-emp-adm.component';
import { RefLangComponent } from './Adm/ref-lang/ref-lang.component';
import { RefCompetenceComponent } from './Adm/ref-competence/ref-competence.component';
import { RefNiveauEtudeComponent } from './Adm/ref-niveau-etude/ref-niveau-etude.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MesContratsComponent } from './Adm/mes-contrats/mes-contrats.component';
import { PageDefautComponent } from './client/page-defaut/page-defaut.component';
import { PagewebComponent } from './Adm/pageweb/pageweb.component';
import { EspaceAdminComponent } from './Adm/espace-admin/espace-admin.component';

const appRoutes: Routes = [

  //{path: '', pathMatch: 'full', component: HomeComponent},
    {path: '', pathMatch: 'full', component: TestComponent},
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
    {path:'',component:TestComponent},
    {path:'employDisponible',component:EmployeDisponibleComponent},
    {path:'contacter',component:ConctactComponent},
    //new version
    {path:'nav1',component:Nav1Component},
    {path:'clientconnect',component:ClientConnectComponent},
    {path:'employee/inscription',component:InscriptionComponent},
    {path:'administration',component:AdministrationComponent},
    {path:'emloyee/tapeemploye',component:TapeEmployerComponent},
    {path:'client/mesclients',component:MesClientsComponent},
    {path:'client/acceuil',component:AcceuilClientComponent},
    {path:'contact1',component:Contact1Component},
    {path:'espace',component:EspaceAdminComponent},
    {path:'lang',component:RefLangComponent},
    {path:'scripte',component:ScriptComponent},
    {path:'mesdemandes',component:MesDemandesComponent},
    {path:'mescontrats',component:MesContratsComponent},
    {path:'web',component:PagewebComponent},

];

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
    AcceuilClientComponent,
    NouvelleDemandeComponent,
    MesEmplyesComponent,
    ConfirmComponent,
    TapeClientComponent,
    Test2Component,
    TapeRechercheComponent,
    RechercheEmployeeComponent,
    RechercheSituationMatrimonialeComponent,
    RechercheReligionComponent,
    RechercheEmailComponent,
    RechercheNiveauEtudesComponent,
    RechercheExperienceComponent,
    RechercheFormationComponent,
    TapePlusComponent,
    RechercheLanguesComponent,
    RechercheDisponibiliteComponent,
    RecherchePaysComponent,
    Contact1Component,
    RechercheCompetenceComponent,
    RechercheEthniesComponent,
    RechercheLocaliteComponent,
    TapeDemandeComponent,
    MesDemandesComponent,
    EspaceAdminComponent,
    ContratClientComponent,
    ListeEmployesComponent,
    RefLangComponent,
    ProfilComponent,
    PagewebComponent,
    ListeEmployesComponent,
    ListeDemandeComponent,
    RefPaysComponent,
    ReflocaliteComponent,
    RefEthnieComponent,
    RefTypeIdenComponent,
    RefLangComponent,
    RefCompetenceComponent,
    RefNiveauEtudeComponent,
    ClientnewAdmComponent,
    MesemployesAdmComponent,
    EditerClientComponent,
    RechercheCliAdmComponent,
    RechercheEmpAdmComponent,
    MesContratsComponent,
    PageDefautComponent,
    EditerClientComponent,
    MessagesAdmComponent,
    RechMessageAdmComponent,

  ],
  entryComponents: [
    ConfirmComponent

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
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
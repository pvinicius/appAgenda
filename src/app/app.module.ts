import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rotas
import { Routing, RoutingProviders } from './app.routing';

//Root
import { AppComponent } from './app.component';

//Components

//Shared
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

//Pages
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RecuperarContaComponent } from './pages/recuperar-conta/recuperar-conta.component';
import { ContatoListComponent } from './pages/contato-list/contato-list.component';
import { ContatoDetailsComponent } from './pages/contato-details/contato-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContatoComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RecuperarContaComponent,
    ContatoListComponent,
    ContatoDetailsComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

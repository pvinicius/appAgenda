import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ContatoListComponent } from './pages/contato-list/contato-list.component';
import { ContatoDetailsComponent } from './pages/contato-details/contato-details.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecuperarContaComponent } from './pages/recuperar-conta/recuperar-conta.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'contato-list', component: ContatoListComponent },
    { path: 'contato-details', component: ContatoDetailsComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recuperar-conta', component: RecuperarContaComponent }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardpanelComponent } from './index/cardpanel/cardpanel.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { HeaderComponent } from './index/header/header.component';

const routes: Routes = [
  { path: '', component: IndexComponent,
    children:[
      { path: '', component: CardpanelComponent },
      { path: '', component: NavbarComponent },
      { path: '', component: HeaderComponent }
    ] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', component: IndexComponent,
    children:[
      { path: '', component: CardpanelComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

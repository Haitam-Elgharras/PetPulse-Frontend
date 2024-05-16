import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { authorizationGuard } from './guards/authorization.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard,authorizationGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

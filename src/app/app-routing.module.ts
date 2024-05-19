import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { authorizationGuard } from './guards/authorization.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import {PetListComponent} from "./pet-list/pet-list.component";
import {PetFormComponent} from "./pet-form/pet-form.component";
import {PetDetailsComponent} from "./pet-details/pet-details.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'pets', component: PetListComponent, canActivate: [AuthenticationGuard] },
  { path: 'new-pet', component: PetFormComponent, canActivate: [AuthenticationGuard] },
  { path: 'pet-details/:id', component: PetDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard,authorizationGuard] },
  { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

import {PetListComponent} from "./pet-list/pet-list.component";
import {PetFormComponent} from "./pet-form/pet-form.component";
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {LostReportsComponent} from "./lost-reports/lost-reports.component";
import {ReportDetailsComponent} from "./report-details/report-details.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: 'lost-reports/:id', component: ReportDetailsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard,authorizationGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'pets', component: PetListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'new-pet', component: PetFormComponent},
  { path: 'pet-details/:id', component: PetDetailsComponent },
  {path:'lost-reports',component:LostReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

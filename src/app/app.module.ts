import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdminComponent } from './admin/admin.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ChatbotModalComponent } from './chatbot-modal/chatbot-modal.component';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {CustomTranslateLoader} from "./translate/translate-loader";
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LostReportsComponent } from './lost-reports/lost-reports.component';
import { AppHttpInterceptor } from './services/app-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotAuthorizedComponent,
    AdminComponent,
    PetListComponent,
    PetCardComponent,
    PetFormComponent,
    PetDetailsComponent,
    PaginationComponent,
    ChatbotModalComponent,
    LanguageSwitcherComponent,
    NavbarComponent,
    LostReportsComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

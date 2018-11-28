import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {AddBussinessComponent} from './add-bussiness/add-bussiness.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { HttpClientModule } from '@angular/common/http';
import {CompanyService} from './Services/CompanyService/Company.service';
import { ErrorIncepterProvider } from './Services/error.interceptor';
import { FilterdataPipe } from './filterdata.pipe';
import { AdminComponent } from './admin/admin.component';
import { MessageComponent } from './message/message.component';



const appRoutes: Routes = [
    { path: 'AddBussiness', component: AddBussinessComponent},
    { path: 'Login', component: LoginComponent },
    {path: 'Home', component: HomeComponent},
    {path: 'Company', component: CompanyComponent},
    {path:'Admin',component:AdminComponent},
    {path:'Message',component:MessageComponent},
    { path: '',   redirectTo: '/Home', pathMatch: 'full' }
  ];
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AddBussinessComponent,
      LoginComponent,
      PageNotFoundComponentComponent,
      HomeComponent,
      CompanyComponent,
      FilterdataPipe,
      AdminComponent,
      MessageComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
       HttpClientModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
   ],
   providers: [
     CompanyService,
     ErrorIncepterProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

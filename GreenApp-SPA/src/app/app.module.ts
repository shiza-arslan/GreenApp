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



const appRoutes: Routes = [
    { path: 'AddBussiness', component: AddBussinessComponent  },
    { path: 'Login', component: LoginComponent },
    {path: 'Home', component: HomeComponent}
  ];
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AddBussinessComponent,
      LoginComponent,
      PageNotFoundComponentComponent,
      HomeComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

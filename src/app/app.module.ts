import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StatspageComponent } from './statspage/statspage.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { CelestialbodyselectComponent } from './celestialbodyselect/celestialbodyselect.component';
import { SharedfunctionsService } from './sharedfunctions.service';
import { HttpClientModule } from '@angular/common/http';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatspageComponent,
    LoginscreenComponent,
    CelestialbodyselectComponent,
    TopbannerComponent,
    NewsfeedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SharedfunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

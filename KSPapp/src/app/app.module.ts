import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StatspageComponent } from './statspage/statspage.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { TopbannerComponent } from './topbanner/topbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatspageComponent,
    LoginscreenComponent,
    TopbannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

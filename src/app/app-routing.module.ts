import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { MenuComponent } from './menu/menu.component';
import { StatspageComponent } from './statspage/statspage.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [
  {path: '', component: LoginscreenComponent},
  {path: 'login', component: LoginscreenComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'statspage', component: StatspageComponent},
  {path: 'spacenews', component: NewsfeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsfeedComponent, LoginscreenComponent, MenuComponent, StatspageComponent];



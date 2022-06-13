import { SwitchComponent } from './switch/switch.component';
import { CascadingComponent } from './cascading/cascading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
{ path: 'cascading', component: CascadingComponent },
{ path: 'switch', component: SwitchComponent },
{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

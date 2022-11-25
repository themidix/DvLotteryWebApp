import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {AdmiLoginPageComponent} from "./admi-login-page/admi-login-page.component";
import {LoginServices} from "./services/login.services";
import {AdmiDashboardPageComponent} from "./admi-page/admi-dashboard-page/admi-dashboard-page.component";


const routes : Routes = [
  {path:'home', component: LandingPageComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'login', component: AdmiLoginPageComponent},
  {path:'admin', canLoad : [LoginServices], loadChildren: ()=> import('./admi-page/admi-page.module').then(m => m.AdmiPageModule)
  },

];

@NgModule({
  imports : [
    RouterModule.forRoot(routes,{ enableTracing:false})
  ],
  exports : [
    RouterModule
  ]
})

export class AppRoutingModule {}

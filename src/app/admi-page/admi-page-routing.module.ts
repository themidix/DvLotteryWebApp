import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdmiRegisterPageComponent} from "./admi-register-page/admi-register-page.component";
import {AdmiCustomerTablePageComponent} from "./admi-customer-table-page/admi-customer-table-page.component";
import {AdmiPageComponent} from "./admi-page.component";
import {AdmiDashboardPageComponent} from "./admi-dashboard-page/admi-dashboard-page.component";
import {TrueDashboardPageComponent} from "./admi-dashboard-page/true-dashboard-page/true-dashboard-page.component";

const routes: Routes = [
  {
    path:'', component: AdmiPageComponent, children:[
      {path:'register', component: AdmiRegisterPageComponent},
      {path:'customer', component: AdmiCustomerTablePageComponent},
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'agent', component: AdmiDashboardPageComponent},
      {path:'dashboard', component: TrueDashboardPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmiPageRoutingModule { }

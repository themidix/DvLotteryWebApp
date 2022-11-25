import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdmiRegisterPageComponent} from "./admi-register-page/admi-register-page.component";
import {AdmiCustomerTablePageComponent} from "./admi-customer-table-page/admi-customer-table-page.component";
import { AdmiPageRoutingModule } from './admi-page-routing.module';
import {MaterialExampleModule} from "../../material.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AdmiPageComponent} from "./admi-page.component";
import { AdmiDashboardPageComponent } from './admi-dashboard-page/admi-dashboard-page.component';
import {RatioComponent} from "./admi-dashboard-page/dashboard-components/ratio/ratio.component";
import { RegisterAgentDialogComponent } from './admi-dashboard-page/dashboard-components/register-agent-dialog/register-agent-dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PresentationCustomerDialogComponent } from './admi-dashboard-page/dashboard-components/presentation-customer-dialog/presentation-customer-dialog.component';
import { MatIconModule } from "@angular/material/icon";
import { TrueDashboardPageComponent } from './admi-dashboard-page/true-dashboard-page/true-dashboard-page.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {ImageCropperModule} from "ngx-image-cropper";


@NgModule({
  declarations: [
    AdmiPageComponent,
    AdmiRegisterPageComponent,
    AdmiCustomerTablePageComponent,
    AdmiDashboardPageComponent,
    RatioComponent,
    RegisterAgentDialogComponent,
    PresentationCustomerDialogComponent,
    TrueDashboardPageComponent
  ],
    imports: [
        CommonModule,
        AdmiPageRoutingModule,
        MaterialExampleModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgxDropzoneModule,
        MatIconModule,
        NgApexchartsModule,
        ImageCropperModule
    ],
  providers:[],
  bootstrap:[AdmiPageComponent, TrueDashboardPageComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[RegisterAgentDialogComponent, PresentationCustomerDialogComponent]
})
export class AdmiPageModule { }

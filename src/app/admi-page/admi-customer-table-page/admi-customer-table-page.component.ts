import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Route, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  PresentationCustomerDialogComponent
} from "../admi-dashboard-page/dashboard-components/presentation-customer-dialog/presentation-customer-dialog.component";
import {Customer} from "../../models/customer.model";
import {AdmiServices} from "../../services/admi.services";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admi-customer-table-page',
  templateUrl: './admi-customer-table-page.component.html',
  styleUrls: ['./admi-customer-table-page.component.css']
})
export class AdmiCustomerTablePageComponent{
  data !: MatTableDataSource<Customer>;
  columnsToDisplays = ['id', 'nom', 'email','sexe', 'profession'];
  clickedRows: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http : HttpClient, private httpServices : AdmiServices, private dialog : MatDialog) {
    this.httpServices.getAllCustomers().subscribe(x => {
      this.data = new MatTableDataSource(x);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });

  }

  onclick(element : number) {
    this.dialog.open(PresentationCustomerDialogComponent, {
      data:{
        row : element
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
}



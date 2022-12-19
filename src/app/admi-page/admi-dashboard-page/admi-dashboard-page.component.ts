import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AdmiPageComponent} from "../admi-page.component";
import {
  RegisterAgentDialogComponent
} from "./dashboard-components/register-agent-dialog/register-agent-dialog.component";
import {Agent} from "../../models/agent.model";
import {AdmiServices} from "../../services/admi.services";


@Component({
  selector: 'app-admi-dashboard-page',
  templateUrl: './admi-dashboard-page.component.html',
  styleUrls: ['./admi-dashboard-page.component.css']
})
export class AdmiDashboardPageComponent {
  displayedColumns: string[] = ['id', 'nom', 'email', 'fonction', 'action'];
  dataSource !: MatTableDataSource<Agent>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private adminService : AdmiServices) {

    this.adminService.getAllAgent().subscribe( x => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCreate() {
    this.dialog.open(RegisterAgentDialogComponent,{
      data:{
        row : 'aucun'
      }
    });
  }

  onDelete(row : Agent) {
    console.log(row);
    this.adminService.deleteAgent(row.id);
    window.location.reload();
  }

  onEdit(row : number) {
    this.dialog.open(RegisterAgentDialogComponent,{
      data:{
        row : row
      }
    })
  }
}



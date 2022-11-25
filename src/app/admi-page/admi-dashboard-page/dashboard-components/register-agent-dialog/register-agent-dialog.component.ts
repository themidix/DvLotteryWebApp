import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdmiServices} from "../../../../services/admi.services";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdmiDashboardPageComponent} from "../../admi-dashboard-page.component";
import {RatioComponent} from "../ratio/ratio.component";

@Component({
  selector: 'app-register-agent-dialog',
  templateUrl: './register-agent-dialog.component.html',
  styleUrls: ['./register-agent-dialog.component.scss']
})
export class RegisterAgentDialogComponent implements OnInit {

  registerAgentForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder : FormBuilder,
              private admiService : AdmiServices,
              private http : HttpClient) { }

  ngOnInit(): void {
    if(this.data.row == null){
      this.registerAgentForm = this.formBuilder.group({
        nom:[,Validators.required],
        email:[,Validators.required],
        tel:[,Validators.required],
        sexe:[,Validators.required],
        ville:[,Validators.required],
        dateEmb:[,Validators.required],
        fonction:[,Validators.required],
        statut:[,Validators.required],
        passWord:[,Validators.required]
      })
    }else{
      this.registerAgentForm = this.formBuilder.group({
        nom:[this.data.row.nom,Validators.required],
        email:[this.data.row.email,Validators.required],
        tel:[this.data.row.tel,Validators.required],
        sexe:[this.data.row.sexe,Validators.required],
        ville:[this.data.row.ville,Validators.required],
        dateEmb:[this.data.row.dateEmb,Validators.required],
        fonction:[this.data.row.fonction,Validators.required],
        statut:[this.data.row.statut,Validators.required],
        passWord:[this.data.row.password,Validators.required]
      })
    }

  }

  onClick() {
    if(this.data.row == 'aucun'){
      console.log('push');
      this.admiService.addAgent(this.registerAgentForm.value);
      this.registerAgentForm.reset();
      window.location.reload();

    }else{
      this.admiService.modifyAgent(this.registerAgentForm.value,this.data.row.id);
      this.registerAgentForm.reset();
      window.location.reload();
    }
  }
}

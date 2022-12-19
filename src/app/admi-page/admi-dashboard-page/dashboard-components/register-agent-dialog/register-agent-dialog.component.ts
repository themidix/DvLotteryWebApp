import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdmiServices} from "../../../../services/admi.services";
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdmiDashboardPageComponent} from "../../admi-dashboard-page.component";
import {Agent} from "../../../../models/agent.model";

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
  private createAgent() {
      console.log('push');
      const agent: Agent = {
        nom: this.registerAgentForm.value.nom,
        email : this.registerAgentForm.value.email,
        tel : this.registerAgentForm.value.tel,
        sexe : this.registerAgentForm.value.sexe,
        ville : this.registerAgentForm.value.ville,
        dateEmb : this.registerAgentForm.value.dateEmb,
        fonction : this.registerAgentForm.value.fonction,
        statut : this.registerAgentForm.value.statut,
        password : this.registerAgentForm.value.passWord
      };
      this.admiService.addAgent(agent);
      this.registerAgentForm.reset();
  }

  private updateAgent(){
    const agent: Agent = {
      id: this.data.row.id,
      nom: this.registerAgentForm.value.nom,
      email : this.registerAgentForm.value.email,
      tel : this.registerAgentForm.value.tel,
      sexe : this.registerAgentForm.value.sexe,
      ville : this.registerAgentForm.value.ville,
      dateEmb : this.registerAgentForm.value.dateEmb,
      fonction : this.registerAgentForm.value.fonction,
      statut : this.registerAgentForm.value.statut,
      password : this.registerAgentForm.value.passWord
    };
      this.admiService.modifyAgent(agent);
      this.registerAgentForm.reset();
  }

  onClick() {
    if(this.data.row == 'aucun') {
      this.createAgent();
    }
    if(this.data.row != 'aucun'){
      this.updateAgent();
    }
    window.location.reload();
  }
}

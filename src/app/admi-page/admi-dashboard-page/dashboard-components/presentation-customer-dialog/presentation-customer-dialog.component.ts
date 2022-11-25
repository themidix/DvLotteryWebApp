import {Component, Directive, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdmiCustomerTablePageComponent} from "../../../admi-customer-table-page/admi-customer-table-page.component";
import {FormBuilder, FormGroup, NgControl, Validators} from "@angular/forms";
import {DatePipe, formatDate} from "@angular/common";
import {AdmiServices} from "../../../../services/admi.services";
import {map, Observable} from "rxjs";
import {Passport} from "../../../../models/passport.model";
import {Conjoint} from "../../../../models/conjoint.model";
import {Residence} from "../../../../models/residence.model";
import {Customer} from "../../../../models/customer.model";

@Component({
  selector: 'app-presentation-customer-dialog',
  templateUrl: './presentation-customer-dialog.component.html',
  styleUrls: ['./presentation-customer-dialog.component.scss']
})
export class PresentationCustomerDialogComponent implements OnInit {

  customerForm !: FormGroup;
  isChecked : boolean = true;
  selectedFile!: File;
  files: File[] = [];
  formUsed$ !: Observable<any>;
  agent$ !: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder : FormBuilder, private admiService : AdmiServices)
  {
    console.log('data', this.data.row);

  }

  ngOnInit(): void {
    var datePipe = new DatePipe('');

    this.customerForm = this.formBuilder.group({
      picture:[this.data.row.picture,],
      nom:[this.data.row.nom,],
      postnom:[this.data.row.postnom,],
      prenom:[this.data.row.prenom,],
      villeNais:[this.data.row.villeNais,],
      dateNais:[this.data.row.dateNais,],
      sexe:[this.data.row.sexe,],
      profession:[this.data.row.profession,],
      niveauEtude:[this.data.row.niveauEtude,],
      paysAd:[this.data.row.paysAd,],
      tel:[this.data.row.tel,],
      email:[this.data.row.email,],
      exemPas:[this.data.row.passport.Exemptation,],
      nomPas : [this.data.row.passport.nom,],
      postnomPas : [this.data.row.passport.postnom,],
      prenomPas : [this.data.row.passport.prenom,],
      paysPas : [this.data.row.passport.pays,],
      dateDelPas : [this.data.row.passport.dateDel,],
      dateExPas : [this.data.row.passport.dateEx,],
      numeroPas : [this.data.row.passport.numeroPas,],
      typeExempPas : [this.data.row.passport.typeExemptation,],
      communeRes : [this.data.row.residence.commune,],
      quartierRes : [this.data.row.residence.quartier,],
      avenueRes : [this.data.row.residence.avenue,],
      numeroRes : [this.data.row.residence.numeroRes,],
      villeRes : [this.data.row.residence.villeRes,],
      paysRes : [this.data.row.residence.paysRes,],
      etatCivil : [this.data.row.etatCivil,],
      nomConj : [this.data.row.conjoint.nom,],
      postnomConj : [this.data.row.conjoint.postnom,],
      prenomConj : [this.data.row.conjoint.prenom,],
      nationaliteConj : [this.data.row.conjoint.nationalité,],
      sexeConj : [this.data.row.conjoint.sexe,],
      dateNaisConj : [this.data.row.conjoint.dateNais,],
      professionConj : [this.data.row.conjoint.profession,],
      nivEtudeConj : [this.data.row.conjoint.niveauEtude,],
      nomAgent : [this.data.row.nomAgent,],
    },
      {
        updateOn: 'change'
      });

    this.formUsed$ = this.customerForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue,
      }))
    );

    this.agent$ = this.admiService.getAllAgent();
  }

  onSelect(event: { addedFiles: any; }) {
    //console.log(event);
    this.files.push(...event.addedFiles);
    this.selectedFile = this.files[0];
    var url = URL.createObjectURL(this.selectedFile);
    const fileReader = new FileReader();
    console.log(url);

  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onClick() {
    const passport : Passport = {
      nom : this.customerForm.value.nomPas,
      postnom : this.customerForm.value.postnomPas,
      prenom : this.customerForm.value.prenomPas,
      pays : this.customerForm.value.paysPas,
      dateDel : this.customerForm.value.dateDelPas,
      dateEx : this.customerForm.value.dateExPas,
      numeroPas : this.customerForm.value.numeroPas,
      Exemptation : this.customerForm.value.exemPas,
      typeExemptation : this.customerForm.value.typeExempPas,
    };
    const conjoint : Conjoint = {
      nom : this.customerForm.value.nomConj,
      postnom : this.customerForm.value.postnomConj,
      prenom : this.customerForm.value.prenomConj,
      nationalité : this.customerForm.value.nationaliteConj,
      sexe : this.customerForm.value.sexeConj,
      dateNais : this.customerForm.value.dateNaisConj,
      profession : this.customerForm.value.professionConj,
      niveauEtude : this.customerForm.value.nivEtudeConj,
      picture : "",
    }
    const residence : Residence = {
      commune : this.customerForm.value.communeRes,
      quartier : this.customerForm.value.quartierRes,
      avenue : this.customerForm.value.avenueRes,
      numeroRes : this.customerForm.value.numeroRes,
      villeRes : this.customerForm.value.villeRes,
      paysRes : this.customerForm.value.paysRes,
    };
    const customer : Customer = {
      nom : this.customerForm.value.nom,
      postnom : this.customerForm.value.postnom,
      prenom : this.customerForm.value.prenom,
      villeNais : this.customerForm.value.villeNais,
      dateNais : this.customerForm.value.dateNais,
      sexe : this.customerForm.value.sexe,
      profession : this.customerForm.value.profession,
      niveauEtude : this.customerForm.value.niveauEtude,
      paysAd : this.customerForm.value.paysAd,
      picture : this.customerForm.value.picture,
      email : this.customerForm.value.email,
      tel : this.customerForm.value.tel,
      etatCivil : this.customerForm.value.etatCivil,
      conjoint : conjoint,
      exemptationPas : this.customerForm.value.typeExempPas,
      passport : passport,
      residence : residence,
      agent : this.customerForm.value.agent
    }
    this.admiService.modidyCustomer(customer, this.data.row.idCustomer);
    console.log(customer);

  }
}

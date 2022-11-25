import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdmiServices} from "../services/admi.services";
import {Customer} from "../models/customer.model";
import {Passport} from "../models/passport.model";
import {Conjoint} from "../models/conjoint.model";
import {Residence} from "../models/residence.model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  landingForm !: FormGroup;

  constructor(private router : Router, private formBuilder : FormBuilder, private admiServives : AdmiServices) {
    this.landingForm = formBuilder.group({
      nom:[, Validators.required],
      postnom:[, Validators.required],
      prenom:[, Validators.required],
      email:[,Validators.required],
      tel:[,Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  onClick() {

    const passport : Passport = {
      nom : "",
      postnom : "",
      prenom : "",
      pays : "",
      dateDel : "",
      dateEx : "",
      numeroPas : 0,
      Exemptation : "",
      typeExemptation : "",
    };
    const conjoint : Conjoint = {
      nom : "",
      postnom : "",
      prenom : "",
      nationalité : "",
      sexe : "",
      dateNais : "",
      profession : "",
      niveauEtude : "",
      picture : "",
    }
    const residence : Residence = {
      commune : "",
      quartier : "",
      avenue : "",
      numeroRes : 0,
      villeRes : "",
      paysRes : "",
    };

    const customer : Customer = {
      nom : this.landingForm.value.nom,
      email : this.landingForm.value.email,
      tel : this.landingForm.value.tel,
      postnom : this.landingForm.value.postnom,
      prenom : this.landingForm.value.prenom,
      villeNais : "",
      dateNais : "",
      sexe : "",
      profession : "",
      niveauEtude : "",
      paysAd : "",
      picture : "",
      etatCivil : "",
      conjoint : conjoint,
      exemptationPas : "",
      passport : passport,
      residence : residence,
      agent : "",
    };
    this.admiServives.addCustomer(customer);
    alert("L'enregistrement a été effectué, nous vous recontacterons ultérieurement");
    this.landingForm.reset();
  }

  onAgent() {
    this.router.navigateByUrl('/login');
  }
}

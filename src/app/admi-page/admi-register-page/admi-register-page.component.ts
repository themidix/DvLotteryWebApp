import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {AdmiServices} from "../../services/admi.services";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../models/customer.model";
import {Children} from "../../models/children.model";
import {Conjoint} from "../../models/conjoint.model";
import {Passport} from "../../models/passport.model";
import {Residence} from "../../models/residence.model";
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-admi-register-page',
  templateUrl: './admi-register-page.component.html',
  styleUrls: ['./admi-register-page.component.css'],
})
export class AdmiRegisterPageComponent implements OnInit {

  registerForm !: FormGroup;
  childrenArrayForm !: FormArray;
  exemPasUsed : string = 'Etes-vous exempter du passport?';
  etatCivilUsed : string = 'Célibataire';
  nbrEnfantUsed : number = 0;
  formUsed$ !: Observable<any>;
  agent$ !: Observable<any>;
  selectedFile!: File;
  childArray !: Children[];
  files: File[] = [];
  imageChangedEvent !: any;
  croppedImage: any = '';


  id !: number;
  nom !: string;
  postnom !: string;
  prenom !: string;
  villeNais !: string;
  dateNais !: string;
  sexe !: string;
  profession !: string;
  niveauEtude !: string;
  paysAd !: string;
  picture !: string;
  url !: string;

  onSelect(event: any) {
    //console.log(event);
    //this.files.push(...event.addedFiles);
    this.imageChangedEvent = event;
    this.selectedFile = this.files[0];
    this.url = URL.createObjectURL(this.selectedFile);
    console.log(this.url );
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmitForm(){


    // for(let i = 0; i < this.nbrEnfantUsed; i++){
    //   const children : Children = {
    //     nom : this.registerForm.value.nomChild,
    //     postnom : this.registerForm.value.postnomChild,
    //     prenom : this.registerForm.value.prenomChild,
    //     villeNais : this.registerForm.value.villeNaisChild,
    //     dateNais : this.registerForm.value.dateNaisChild,
    //     sexe : this.registerForm.value.sexeChild,
    //     picture : "",
    //   }
    //   this.childArray.push(children);
    // }

    const passport : Passport = {
      nom : this.registerForm.value.nomPas,
      postnom : this.registerForm.value.postnomPas,
      prenom : this.registerForm.value.prenomPas,
      pays : this.registerForm.value.paysPas,
      dateDel : this.registerForm.value.dateDelPas,
      dateEx : this.registerForm.value.dateExPas,
      numeroPas : this.registerForm.value.numeroPas,
      Exemptation : this.registerForm.value.exemPas,
      typeExemptation : this.registerForm.value.typeExempPas,
    };
    const conjoint : Conjoint = {
      nom : this.registerForm.value.nomConj,
      postnom : this.registerForm.value.postnomConj,
      prenom : this.registerForm.value.prenomConj,
      nationalité : this.registerForm.value.nationaliteConj,
      sexe : this.registerForm.value.sexeConj,
      dateNais : this.registerForm.value.dateNaisConj,
      profession : this.registerForm.value.professionConj,
      niveauEtude : this.registerForm.value.nivEtudeConj,
      picture : "",
    }
    const residence : Residence = {
      commune : this.registerForm.value.communeRes,
      quartier : this.registerForm.value.quartierRes,
      avenue : this.registerForm.value.avenueRes,
      numeroRes : this.registerForm.value.numeroRes,
      villeRes : this.registerForm.value.villeRes,
      paysRes : this.registerForm.value.paysRes,
    };
    const customer : Customer ={
      nom : this.registerForm.value.nom,
      postnom : this.registerForm.value.postnom,
      prenom : this.registerForm.value.prenom,
      villeNais : this.registerForm.value.villeNais,
      dateNais : this.registerForm.value.dateNais,
      sexe : this.registerForm.value.sexe,
      profession : this.registerForm.value.profession,
      niveauEtude : this.registerForm.value.niveauEtude,
      paysAd : this.registerForm.value.paysAd,
      picture : this.croppedImage,
      email : this.registerForm.value.email,
      tel : this.registerForm.value.numeroTel,
      etatCivil : this.registerForm.value.etatCivil,
      nbrEnfant : this.registerForm.value.nbrEnfant,
      //children : ,
      conjoint : conjoint,
      exemptationPas : this.registerForm.value.typeExempPas,
      passport : passport,
      residence : residence,
      agent : this.registerForm.value.agent,
    }
    console.log(this.children.getRawValue());

    console.log(customer);
    this.admiService.addCustomer(customer);
    this.registerForm.reset();
  }

  constructor(private formBuilder : FormBuilder, private admiService : AdmiServices, private http : HttpClient) { }

  ngOnInit(): void {
    this.childrenArrayForm = this.formBuilder.array([this.formBuilder.group({nomChildren:''})])
    this.registerForm = this.formBuilder.group({
      nomCustomer:[null, Validators.required],
      exemPas:['Etes-vous exempter du passport?'],
      etatCivil:['Célibataire'],
      nbrEnfant:[this.nbrEnfantUsed],
      id:[,Validators.required],
      nom:[,Validators.required],
      postnom:[,Validators.required],
      prenom:[,Validators.required],
      villeNais :[,Validators.required],
      dateNais :[,Validators.required],
      sexe :['Selectionner votre sexe',Validators.required],
      profession :[,Validators.required],
      niveauEtude :['Selectionner votre niveau d\'étude',Validators.required],
      paysAd :[,Validators.required],
      picture :[,Validators.required],
      nomPas : [,Validators.required],
      postnomPas : [,Validators.required],
      prenomPas : [,Validators.required],
      paysPas : [,Validators.required],
      dateDelPas : [,Validators.required],
      dateExPas : [,Validators.required],
      numeroPas : [,Validators.required],
      typeExempPas : ["aucun",Validators.required],
      communeRes : [,Validators.required],
      quartierRes : [,Validators.required],
      avenueRes : [,Validators.required],
      numeroRes : [,Validators.required],
      villeRes : [,Validators.required],
      paysRes : [,Validators.required],
      numeroTel : [,Validators.required],
      email : [,Validators.required],
      emailConf : [,Validators.required],
      children : this.formBuilder.array([this.childrenForm()]),
      nomConj : [,Validators.required],
      postnomConj : [,Validators.required],
      prenomConj : [,Validators.required],
      nationaliteConj : [,Validators.required],
      sexeConj : [,Validators.required],
      dateNaisConj : [,Validators.required],
      professionConj : [,Validators.required],
      nivEtudeConj : [,Validators.required],
      nomAgent : [,Validators.required],
    },{
      updateOn:'change'
    });

    this.formUsed$ = this.registerForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue,
      }))
    );

    this.agent$ = this.admiService.getAllAgent();
    for(let i = 0; i < this.nbrEnfantUsed; i++){
      this.children.push(this.childrenForm());
    }
  }

  childrenForm(){
    return this.formBuilder.group({
      nomChild : [,Validators.required],
      postnomChild : [,Validators.required],
      prenomChild : [,Validators.required],
      villeNaisChild : [,Validators.required],
      dateNaisChild : [,Validators.required],
      sexeChild : [,Validators.required],
    })
  }

  get children(){
    return this.registerForm.get('children') as FormArray;
  }

  addInputontrol(){
    this.children.push(this.childrenForm());
  }

}


import {Children} from "./children.model";
import {Conjoint} from "./conjoint.model";
import {Passport} from "./passport.model";
import {Residence} from "./residence.model";

export class Customer {
  id ?: number;
  nom !: string;
  postnom ?: string;
  prenom ?: string;
  villeNais ?: string;
  dateNais ?: string;
  sexe ?: string;
  profession ?: string;
  niveauEtude ?: string;
  paysAd ?: string;
  picture ?: string;
  email ?: string;
  tel ?: string;
  etatCivil ?: string;
  nbrEnfant ?: number;
  children ?: Children[];
  conjoint ?: Conjoint;
  exemptationPas ?: string;
  passport ?: Passport;
  residence ?: Residence;
  agent ?: string;
}

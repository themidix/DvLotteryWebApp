import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer.model";
import {Agent} from "../models/agent.model";

@Injectable({
  providedIn: 'root'
})
export class AdmiServices {
  constructor(private http : HttpClient) {
  }

  getAllCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/customer');
  }

  getAllAgent() : Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:8080/agent');
  }

  addCustomer(customer : Customer) {
    this.http.post<Customer>('http://localhost:8080/customer', customer).subscribe();
  }

  addCUstomerViaLandingPage(formValue : {nom : string, email : string, tel : string}){
    const customer : Customer = {
      nom : formValue.nom,
      email : formValue.email,
      tel : formValue.tel,
    };
    this.http.post<Customer>('http://localhost:8080/customer', customer).subscribe();
  }

  modidyCustomer(customer : Customer, row : number){
      this.http.put<Customer>(`http://localhost:8080/customer/${row}`, customer).subscribe();
  }

  addAgent(formValue:{id ?: number, nom : string, email : string, tel : string, sexe : string,
    ville : string, dateEmb : string, fonction : string, statut : string, passWord : string}){
      const agent : Agent = {
        nom : formValue.nom,
        email : formValue.email,
        tel : formValue.tel,
        sexe : formValue.sexe,
        ville : formValue.ville,
        dateEmb : formValue.dateEmb,
        fonction : formValue.fonction,
        statut : formValue.statut,
        password : formValue.passWord
      };
      this.http.post<Agent>('http://localhost:8080/agent', agent).subscribe();
  }

  modifyAgent(formValue:{id ?: number, nom : string, email : string, tel : string, sexe : string,
    ville : string, dateEmb : string, fonction : string, statut : string , passWord : string}, row : number) {
    const agent : Agent = {
      id : row,
      nom : formValue.nom,
      email : formValue.email,
      tel : formValue.tel,
      sexe : formValue.sexe,
      ville : formValue.ville,
      dateEmb : formValue.dateEmb,
      fonction : formValue.fonction,
      statut : formValue.statut,
      password : formValue.passWord
    };
    this.http.put<Agent>(`http://localhost:8080/agent/${row}`, agent).subscribe();
  }

  deleteAgent(agent: number | undefined){
    if (agent != undefined){
      this.http.delete(`http://localhost:8080/agent/${agent}`).subscribe();
      console.log('delete' + agent)
    }
  }

  public uploadImage(image: File, url : string) {
    const formData = new FormData();
    formData.append('image', url);
  }
}

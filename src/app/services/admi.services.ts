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
  //actualiser

  getAllCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/customer');
  }

  getAllAgent() : Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:8080/agent');
  }

  addCustomer(customer : Customer) {
    this.http.post<Customer>('http://localhost:8080/customer', customer).subscribe();
  }

  modidyCustomer(customer : Customer){
      this.http.put<Customer>(`http://localhost:8080/customer`, customer).subscribe();
  }

  addAgent(agent : Agent){
      this.http.post<Agent>('http://localhost:8080/agent', agent).subscribe();
  }

  modifyAgent(agent : Agent) {
    this.http.put<Agent>(`http://localhost:8080/agent`, agent).subscribe();
  }


  getAgentById(agent: number){
    this.http.get(`http://localhost:8080/agent/${agent}`).subscribe();
  }

  deleteAgent(agent: number | undefined){
    if (agent != undefined){
      this.http.delete(`http://localhost:8080/agent/${agent}`).subscribe();
      console.log('delete' + agent)
    }
  }
}

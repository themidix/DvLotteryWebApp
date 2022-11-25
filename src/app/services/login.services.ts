import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad, Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Agent} from "../models/agent.model";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class LoginServices implements CanLoad{

  user : any = null;
  reponse !: boolean;
  data !: Agent[];

  constructor(private http : HttpClient, private router : Router) {
  }

  getUser(){
    return this.http.get<Agent[]>('http://localhost:8080/agent');
  }

canLoad(route: Route, segments: UrlSegment[])  {
    let user = undefined;
    this.getUser().subscribe(x => {
      user = x;
      console.log(user)

    });

  return true

}


}

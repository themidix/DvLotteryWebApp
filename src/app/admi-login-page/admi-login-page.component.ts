import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Agent} from "../models/agent.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admi-login-page',
  templateUrl: './admi-login-page.component.html',
  styleUrls: ['./admi-login-page.component.css']
})
export class AdmiLoginPageComponent implements OnInit {

  loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[,Validators.required],
      password:[,Validators.required]
    })
  }

  onSubmit() {
    console.log('push');
    return this.http.get<any>('http://localhost:8080/agent').subscribe(
      response => {
        const user = response.find((agent: any) => {
          return agent.email === this.loginForm.value.email && agent.password === this.loginForm.value.password;
        });
        console.log(user);
        this.router.navigateByUrl('/admin')
      })
  }

  onLanding() {
    this.router.navigateByUrl('')
  }
}


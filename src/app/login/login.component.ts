import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private notificationService:NotificationService,private formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onLogin(): void {
    localStorage.setItem("USER_EMAIL", this.loginForm.value.email);
    this.notificationService.publishStatus({ mail: this.loginForm.value.email,status:"Active"});
    alert(this.loginForm.value.email+ "has been login successfully.");
    this.router.navigate(["/profile"]);
  }
}
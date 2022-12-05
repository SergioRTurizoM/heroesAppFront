import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  send() {
    if (!this.login.valid) {
      alert('Ingrese datos válidos');
    } else {
      this.authService.loginUser(this.login.value).subscribe((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('Credentials', JSON.stringify(data))
          localStorage.setItem('Token', JSON.stringify(data.token))
          alert('Welcome')
          this.router.navigate(['../collection']);
        } else {
          alert('Hubo un error, intente nuevamente')
        }
      });
    }
  }

  cancel() {
    this.login.reset();
  }
}

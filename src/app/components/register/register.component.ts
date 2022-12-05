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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}
  registerUser() {
    if (!this.register.valid) {
      alert('Ingrese datos válidos');
    } else {
      this.auth.registerUser(this.register.value).subscribe((data) => {
        console.log(data);
        if (data._id) {
          localStorage.setItem('Register', JSON.stringify(data));
          this.router.navigate(['../login']);
        } else {
          alert('Hubo un error, intente nuevamente');
        }
      });
    }
  }

  cancel() {
    this.register.reset();
  }
}

// angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router to navigate
import { UsersService } from 'src/app/service/users.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [RouterModule, 
    HttpClientModule,
   ReactiveFormsModule,
   FormsModule,]
})

export default class RegisterComponent implements OnInit {
    signUpForm: FormGroup; // No need for ! as it will be initialized in the constructor
  
    constructor(
      private formBuilder: FormBuilder,
      private usersService: UsersService,
      private router: Router,
    ) {
      // Initialize signUpForm in the constructor
      this.signUpForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        role: ['ROLE_USER', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    ngOnInit(): void {
  
    }
  
    onSubmit() {
      if (this.signUpForm.invalid) {
        return;
      }
  
      this.usersService.signup(this.signUpForm.value).subscribe(
        response => {
          console.log('User signed up successfully:', response);
          // Reset form after successful signup
          this.signUpForm.reset();
        },
        error => {
          console.error('Error signing up:', error);
          // Handle error
        }
      );
    }
  }
  

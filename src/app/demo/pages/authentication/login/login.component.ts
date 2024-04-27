// angular import
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router to navigate
import { UsersService } from 'src/app/service/users.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from 'src/app/service/token.service';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RouterModule, 
     HttpClientModule,
    ReactiveFormsModule,
    FormsModule,]
})
export default class LoginComponent  implements OnInit {
  signInForm: FormGroup; // No need for ! as it will be initialized in the constructor

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private tokenService :TokenService,
 
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  
    } 
  login() {
    this.usersService.signin(this.signInForm.value).subscribe(
      data=> {
      this.tokenService.saveToken(data.token)
        alert('Login Success!')
        this.signInForm.reset()
        this.router.navigate(['home']);// Navigate to 'home' route after successful login
  } ,
  error => {
    console.error('Login Error:', error);
    alert('Login Error: Please try again later.');
  }
)}

}

 

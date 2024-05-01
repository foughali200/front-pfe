// angular import
import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent implements OnInit{
  users: User[] = []; //Initialize the users array

    constructor(private userService: UsersService) { }
  
    ngOnInit(): void {
      this.getAllUsers();
    }
    getAllUsers() {
      this.userService.getAllUsers().subscribe(
       (data:User[]) => {
      console.log(data)
    } ,
    error => {
      console.error('feetshing all User Error:', error);
     
    }
  )}
  }
 
  
   
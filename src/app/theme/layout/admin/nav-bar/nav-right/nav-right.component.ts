// Angular import
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})

export class NavRightComponent implements OnInit{

  constructor(private tokenService :TokenService){}
  ngOnInit():void{}
  logout():void{
    localStorage.setItem("token",null);
    localStorage.removeItem('token')
    this.tokenService.clearToken()
  }
}

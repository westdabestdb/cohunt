import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.authService.loginWithEmail('wet@gmail.com', 'weqeqwq').then(data => {
      console.log('data')
    }).catch(err => {
      console.log(err)
    });
  }

}

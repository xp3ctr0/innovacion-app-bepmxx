import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
// import logo from './assets/img/logo_agendate.png';
//import { logo } from './logo_agendate.png';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'Angular ' + VERSION.major;
  //logo = logo;

  constructor(private route: Router) {}

  ngOnInit() {}

  goHome() {
    this.route.navigate(['/home']);
  }
}

import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
// import logo from './assets/img/logo_agendate.png';
//import { logo } from './logo_agendate.png';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  check: string = '0';

  constructor(private route: Router) {}

  ngOnInit() {
    // this.route.navigate(['/login']);
  }

  x() {
    if (this.check == '0') {
      this.check = '1';
    } else {
      this.check = '0';
    }
    alert(this.check);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/providers/nav.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  busy: boolean;

  constructor(
    private navService: NavService
  ) {
    this.busy = true;
  }

  ngOnInit(): void {

  }

  ionViewDidEnter() {
    this.busy = true;
    const t = setTimeout(() => {
      clearTimeout(t);
      this.busy = false;
    }, 2000);
  }

  login() {
    this.navService.nav('auth/login', {
      replaceUrl: true
    });
  }

  signup() {
    this.navService.nav('auth/signup', {
      replaceUrl: true
    });
  }

}

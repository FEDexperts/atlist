import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(userName, password) {
    this.auth.login(userName, password)
      .pipe(
        tap(res => {
          this.router.navigate(['missing-list']);
        })
      )
      .subscribe();
  }

}

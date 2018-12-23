import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    login(userName, password) {
        this.auth.hello()
            .subscribe(
                res => console.log('atlist (hello response) =>', res),
                error => console.log('atlist hello failed =>', error),
                () => console.log('atlist hello completed')
            );

        this.auth.login(userName, password)
            .subscribe(
                (res: string) => {
                    console.log('atlist login success =>', res);
                    this.router.navigate(['shopping-list']);
                },
                err => console.log('atlist login failed =>', err));
    }

}

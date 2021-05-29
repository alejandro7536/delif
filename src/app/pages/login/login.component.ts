import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user = new User('', '');
  public errorCredenciales = false;
  public loading = false;
  public rememberEmail = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user.email = localStorage.getItem('email') || '';
    if(localStorage.getItem('email')) {
      this.rememberEmail = true;
    }
  }
  ngOnDestroy() {
  }

  onLogin() {

    this.loading = true;
    if ( this.user.email && this.user.password) {

        this.auth.loginEmailUser(this.user.email, this.user.password)
          .then((res: any) => {
            localStorage.setItem('uid', res.user.uid);

            this.onLoginRedirect();
          }).catch(err => {
            console.log('err', err.message);
            this.errorCredenciales = true;
            this.loading = false;
          } );

          if (this.rememberEmail) {
            localStorage.setItem('email', this.user.email);
          } else {
            localStorage.removeItem('email');

          }
    } else {
      this.errorCredenciales = true;
      this.loading = false;
    }

  }

  onLoginRedirect(): void {
    this.router.navigate(['dashboard']);
  }

}

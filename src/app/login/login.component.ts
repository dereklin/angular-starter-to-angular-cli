import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public loading = false;
  public error = '';
  public redirectUrl: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  public ngOnInit(): void {
    this.userService.logout();
  }

  public login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        (result) => {
          this.loading = false;

          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        (error) => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }
}

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoggerService } from '../services/logger.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { normalSubject, replaySubject } from '../utils/subject-util';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  public title: string = 'My Angular';

  constructor(private loggerService: LoggerService, private router: Router, private userService: UserService) {
    this.loggerService.log('i am testing');
    // const interval$ = Observable.interval(1000).take(7);
    // const subject = new Subject();
    // subject.map((value) => `Observer one ${value}`).subscribe((value) => {
    //   console.log(value);
    // });
    // // interval$.subscribe(subject);

    // setTimeout(() => {
    //   subject.map((value) => `Observer two ${value}`).subscribe((value) => {
    //     console.log(value);
    //   });
    // }, 2000);
    replaySubject();
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  get isAdminUser() {
    return this.userService.isAdminUser();
  }

  get isUser() {
    return this.userService.isUser();
  }
}

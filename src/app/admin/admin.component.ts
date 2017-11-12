import { AppDataService } from '../services/app-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit {
  public users$;

  constructor(private appDataService: AppDataService) {
  }

  public ngOnInit() {
    this.users$ = this.appDataService.getUsers();
  }
}

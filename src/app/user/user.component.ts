import { Component, OnInit } from '@angular/core';

import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public city$;

  constructor(private appDataService: AppDataService) {
  }

  public ngOnInit() {
    this.city$ = this.appDataService.getCities();
  }
}

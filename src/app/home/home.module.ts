// Angular Imports
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      CommonModule,
      RouterModule
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}

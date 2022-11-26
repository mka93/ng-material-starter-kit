import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidaysListComponent } from './public-holidays-list.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [PublicHolidaysListComponent],
  providers: [],
  exports: [PublicHolidaysListComponent]
})
export class PublicHolidaysListComponentModule {
}

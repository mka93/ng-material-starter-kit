import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BoredComponent } from './bored.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [BoredComponent],
  providers: [],
  exports: [BoredComponent]
})
export class BoredComponentModule {
}

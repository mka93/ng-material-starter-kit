import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgifyComponent } from './agify.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgifyComponent],
  providers: [],
  exports: [AgifyComponent]
})
export class AgifyComponentModule {
}

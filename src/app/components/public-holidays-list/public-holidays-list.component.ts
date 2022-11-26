import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidayModel } from '../../models/public-holiday.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holidays-list',
  styleUrls: ['./public-holidays-list.component.scss'],
  templateUrl: './public-holidays-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaysListComponent {
  readonly list$: Observable<PublicHolidayModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}

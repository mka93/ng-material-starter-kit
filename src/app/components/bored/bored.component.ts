import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BoredModel } from '../../models/bored.model';
import { BoredService } from '../../services/bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredComponent {
  readonly bored$: Observable<BoredModel> = this._boredService.get();

  constructor(private _boredService: BoredService) {
  }
}

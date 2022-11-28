import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgifyModel } from '../../models/agify.model';
import { AgifyService } from '../../services/agify.service';

@Component({
  selector: 'app-agify',
  templateUrl: './agify.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgifyComponent {
  readonly agify$: Observable<AgifyModel> = this._activatedRoute.params.pipe(switchMap(data => this._agifyService.get(data['name'])));

  constructor(private _agifyService: AgifyService, private _activatedRoute: ActivatedRoute) {
  }
}

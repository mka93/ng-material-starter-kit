import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgifyModel } from '../models/agify.model';

@Injectable()
export class AgifyService {
  constructor(private _httpClient: HttpClient) {
  }

  get(name: string): Observable<AgifyModel> {
    return this._httpClient.get<AgifyModel>('https://api.agify.io/?name='+name);
  }
}

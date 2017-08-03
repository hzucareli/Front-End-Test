import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from '../http-util.service';
import 'rxjs';

@Injectable()
export class PostService {

  constructor(private _http: Http, private _httpUtilService: HttpUtilService) { }

  getAll(): Observable<any[]> {
    return this._http.get(this._httpUtilService.url('assets/dados/data.json'), this._httpUtilService.headers())
    .map(this._httpUtilService.extrairDados)
    .catch(this._httpUtilService.processarErros);
  }

}

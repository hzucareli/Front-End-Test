import { Injectable } from '@angular/core';

import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {

  private API_REST: string = "http://localhost:4200/"

  constructor() { }

  url(path: string) {
    return this.API_REST + path;
  }

  headers() {
    let headerParams = { 'Content-Type': 'application/json' };
    let headers = new Headers(headerParams);
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  extrairDados(response: Response) {
    let data = response.json();
    return data || {};
  }

  processarErros(erro: any) {
    return Observable.throw('Erro ao acessar o servidor');
  }

}

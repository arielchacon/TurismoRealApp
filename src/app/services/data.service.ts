import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuFirstOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-first-opts.json');

  }

  getMenuClientOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-cliente-opts.json');

  }

  getMenuEmployeeOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-empleado-opts.json');
  }

  getMenuAdminOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-admin-opts.json');

  }
}

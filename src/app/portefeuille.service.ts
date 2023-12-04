// portefeuille.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PortefeuilleService {
  private apiUrl = 'http://localhost:8085/portefeuilles'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getPortefeuille(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}


// portefeuille.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PortefeuilleService {
  private apiUrl = 'http://localhost:8085/portefeuilles'; // Update with your backend URL
  private apiUrl2 = 'http://localhost:8085/ordres';

  constructor(private http: HttpClient) {}

  getPortefeuille(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
  sellInstrument(ordre: any): Observable<void> {
    const url = `${this.apiUrl2}/sell`;
    return this.http.post<void>(url, ordre);
  }
  getAllOrdresvente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/afficher`);
  }
  buyInstrument(ordre: any): Observable<void> {
    const url = `${this.apiUrl2}/buy`;
    return this.http.post<void>(url, ordre);
  }
}


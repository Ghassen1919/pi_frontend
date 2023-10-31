import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:8085/claim/add';
  private apiUrl1 = 'http://localhost:8085/claim';
  constructor(private http:HttpClient) { }
  getClaims () : Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8085/claim/afficher")
  }
  
  
    print(): Observable<any> {
      return this.http.get("http://localhost:8085/claim/export/pdf", { responseType: 'blob' });
    }
    getClaimPercentage() {
      return this.http.get("http://localhost:8085/claim/nbclaim2");
    }
    addClaim(file: File, desc: string, type: string, t: string): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('desc', desc);
      formData.append('type', type);
      formData.append('trans', t);
      
      
      const url = `${this.apiUrl}`;
      return this.http.post(url, formData);
    }
    reloadOnce() {
      if (!localStorage.getItem('hasReloaded')) {
        localStorage.setItem('hasReloaded', 'true');
        window.location.reload();
      }
    }
    
    getListOfIntegers(): Observable<string[]> {
      const url = `${this.apiUrl1}/listtran`;
      return this.http.get<string[]>(url);
    }
    getListOfclaims(): Observable<string[]> {
      const url = `${this.apiUrl1}/claimperuser`;
      return this.http.get<string[]>(url);
    }
      }





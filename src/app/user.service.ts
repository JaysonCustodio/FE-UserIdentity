import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserIdentity } from './types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl: any = 'http://localhost:5090/api';

  constructor(private http: HttpClient) {}

  getUserIdentityById(id: string): Observable<UserIdentity> {
    return this.http.get<UserIdentity>(`${this.apiUrl}/identities/${id}`);
  }

  updateUserIdentity(id: number, updates: Partial<Record<keyof UserIdentity, any>>): Observable<UserIdentity> {
    return this.http.patch<UserIdentity>(`${this.apiUrl}/identities/${id}`, updates);
  }
  
}

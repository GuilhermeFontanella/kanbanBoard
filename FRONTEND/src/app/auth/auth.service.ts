import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:5000/';
  private subjUser$: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  login(body: any): Observable<User> {
    return this.http.post<User>(`${this.url}login/`, body)
    .pipe(
      tap((u: any) => {
        localStorage.setItem('token', u);
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(u)
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }

  getUser(): Observable<User> {
    return this.subjUser$.asObservable();
  }
}

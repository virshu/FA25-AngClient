import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #user = signal<LoginResponse | null>(null);
  readonly tokenKey: string = "token";

  readonly isAuthenticated = computed(() => this.#user() !== null);
  readonly token = computed(() => this.#user()?.token ?? '');

  private apiUrl = `${environment.baseUrl}api/Admin/login`;
  constructor(private http: HttpClient) {}

  login(userinfo: LoginRequest): void {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<LoginResponse>(this.apiUrl, userinfo, { headers })
    .subscribe({
      next: (loginResult) => {
        //console.log('Login successful, token:', loginResult.token);
        if (loginResult.success && loginResult.token) {
            localStorage.setItem(this.tokenKey, loginResult.token);
            this.#user.set(loginResult);
          }
      },
      error: (error: any) => {
        console.error('Login failed:', error);
      }
    });
  }

  logout(): void {
    this.#user.set(null);
    localStorage.removeItem(this.tokenKey);
  }

}

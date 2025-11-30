import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  imports: [Field],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly loginModel = signal<LoginRequest>({
      userName: '',
      password: ''
    });
  readonly loginForm = form(this.loginModel);

  login(event: Event): void {
    event.preventDefault();
    this.auth.login(this.loginModel());
    this.router.navigateByUrl('/');
  }

}

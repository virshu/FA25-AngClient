import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormField,
    RouterLink,
    MatAnchor
],
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

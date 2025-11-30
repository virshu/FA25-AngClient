import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  imports: [
     MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterLink
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  #auth = inject(AuthService);
  readonly isLoggedIn = this.#auth.isAuthenticated;

  logout(): void {
    this.#auth.logout();
  }
}

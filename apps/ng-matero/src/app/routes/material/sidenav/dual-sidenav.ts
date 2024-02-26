import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dual-sidenav',
  templateUrl: 'dual-sidenav.html',
  styleUrls: ['shared.scss', 'dual-sidenav.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
  ],
})
export class SidenavDualComponent {
  constructor(private snackbar: MatSnackBar) {}

  play(list: string) {
    this.snackbar.open(`Playing "${list}"`, '', { duration: 1000 });
  }
}

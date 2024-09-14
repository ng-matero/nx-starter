import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BreadcrumbComponent } from '@shared';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [BreadcrumbComponent, MatButtonModule, MatIconModule, MatCardModule],
})
export class ButtonComponent {
  snackBar = inject(MatSnackBar);

  counter = 0;

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  increase() {
    this.counter++;
    this.openSnackBar(`Click counter is set to ${this.counter}`);
  }
}

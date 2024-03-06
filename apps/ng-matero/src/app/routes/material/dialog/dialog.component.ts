import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BreadcrumbComponent } from '@shared';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, MatButtonModule],
})
export class DialogComponent {
  fruitSelectedOption = '';

  constructor(public dialog: MatDialog) {}

  openFruitDialog() {
    const dialogRef = this.dialog.open(DialogFruitComponent);
    dialogRef.afterClosed().subscribe(result => (this.fruitSelectedOption = result));
  }

  openWelcomeDialog() {
    this.dialog.open(DialogWelcomeComponent);
  }

  openNeptuneDialog() {
    this.dialog.open(DialogNeptuneComponent);
  }

  openAddressDialog() {
    this.dialog.open(DialogAddressFormComponent);
  }
}

// Dialog
@Component({
  selector: 'dialog-fruit',
  templateUrl: 'dialog-fruit.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogFruitComponent {}

@Component({
  selector: 'dialog-welcome',
  templateUrl: 'dialog-welcome.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogWelcomeComponent {}

@Component({
  selector: 'dialog-neptune-dialog',
  templateUrl: './dialog-neptune.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogNeptuneComponent {
  constructor(public dialog: MatDialog) {}

  showInStackedDialog() {
    this.dialog.open(DialogNeptuneIFrameComponent);
  }
}

@Component({
  selector: 'dialog-neptune-iframe-dialog',
  styles: [
    `
      iframe {
        width: 800px;
      }
    `,
  ],
  templateUrl: './dialog-neptune-iframe.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogNeptuneIFrameComponent {}

@Component({
  selector: 'dialog-address-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: 'dialog-address-form.html',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class DialogAddressFormComponent {}

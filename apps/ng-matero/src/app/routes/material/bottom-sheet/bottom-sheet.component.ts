import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLineModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { BreadcrumbComponent } from '@shared';

const defaultConfig = new MatBottomSheetConfig();

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatLineModule,
    MatOptionModule,
    MatSelectModule,
    BreadcrumbComponent,
  ],
})
export class BottomSheetComponent {
  config: MatBottomSheetConfig = {
    hasBackdrop: defaultConfig.hasBackdrop,
    disableClose: defaultConfig.disableClose,
    backdropClass: defaultConfig.backdropClass,
    direction: 'ltr',
    ariaLabel: 'Example bottom sheet',
  };

  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  constructor(private _bottomSheet: MatBottomSheet) {}

  openComponent() {
    this._bottomSheet.open(BottomSheetOverviewComponent, this.config);
  }

  openTemplate() {
    this._bottomSheet.open(this.template, this.config);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <mat-nav-list>
      @for (action of [1, 2, 3]; track action) {
        <a href="#" mat-list-item (click)="handleClick($event)">
          <span matListItemTitle>Action {{ action }}</span>
          <span matListItemLine>Description</span>
        </a>
      }
    </mat-nav-list>
  `,
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetOverviewComponent {
  constructor(private _bottomSheet: MatBottomSheetRef) {}

  handleClick(event: MouseEvent) {
    event.preventDefault();
    this._bottomSheet.dismiss();
  }
}

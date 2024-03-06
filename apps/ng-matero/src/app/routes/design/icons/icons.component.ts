import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MAT_ICONS, PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-design-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [KeyValuePipe, MatCardModule, MatIconModule, PageHeaderComponent],
})
export class DesignIconsComponent implements OnInit {
  icons!: { [key: string]: string[] };

  constructor() {}

  ngOnInit() {
    this.icons = MAT_ICONS;
  }

  trackByIcon(index: number, icon: { key: string; value: string[] }): string {
    return icon.key;
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BreadcrumbComponent } from '@shared';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, MatButtonModule, MatTooltipModule],
})
export class TooltipComponent {}

import { Directive, Input, OnChanges, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]',
  standalone: true,
})
export class DisableControlDirective implements OnChanges {
  private readonly ngControl = inject(NgControl, { optional: true });

  @Input() disableControl = false;

  ngOnChanges(): void {
    if (this.disableControl) {
      this.ngControl?.control?.disable();
    } else {
      this.ngControl?.control?.enable();
    }
  }
}

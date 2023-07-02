import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
  TemplateRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AppSettings, SettingsService } from '@core';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { MtxDrawer, MtxDrawerRef } from '@ng-matero/extensions/drawer';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomizerComponent implements OnInit, OnDestroy {
  @Output() optionsChange = new EventEmitter<AppSettings>();

  options = this.settings.getOptions();

  dragging = false;

  drawerRef?: MtxDrawerRef;

  form = this.fb.nonNullable.group<AppSettings>({
    theme: 'auto',
    showHeader: true,
    headerPos: 'fixed',
    showUserPanel: true,
    navPos: 'side',
    dir: 'ltr',
    sidenavOpened: true,
    sidenavCollapsed: false,
    language: 'en-US',
  });

  formSubscription = Subscription.EMPTY;

  get isHeaderPosAbove() {
    return this.form.get('headerPos')?.value === 'above';
  }

  get isNavPosTop() {
    return this.form.get('navPos')?.value === 'top';
  }

  get isShowHeader() {
    return this.form.get('showHeader')?.value === true;
  }

  private readonly key = 'ng-matero-settings';

  constructor(
    private settings: SettingsService,
    private drawer: MtxDrawer,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.options);

    this.formSubscription = this.form.valueChanges.subscribe(value => {
      this.sendOptions(value as AppSettings);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  onDragStart(event: CdkDragStart) {
    this.dragging = true;
  }

  openPanel(templateRef: TemplateRef<any>) {
    if (this.dragging) {
      this.dragging = false;
      return;
    }

    this.drawerRef = this.drawer.open(templateRef, {
      position: this.form.get('dir')?.value === 'rtl' ? 'left' : 'right',
      width: '320px',
    });
  }

  closePanel() {
    this.drawerRef?.dismiss();
  }

  sendOptions(options: AppSettings) {
    this.optionsChange.emit(options);
  }
}

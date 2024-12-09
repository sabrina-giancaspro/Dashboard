import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {
  @Input() data!: Widget;
  @Input() frontIcon: string = '';
  @Input() backIcon: string = '';

  settingsMenuVisible = false;

  widgetSize: 'small' | 'medium' | 'large' = 'medium';

  constructor(private cdr: ChangeDetectorRef) { }

  toggleSettingsMenu(): void {
    this.settingsMenuVisible = !this.settingsMenuVisible;
  }

  changeSize(size: 'small' | 'medium' | 'large'): void {
    this.widgetSize = size;
    this.settingsMenuVisible = false;
    this.cdr.markForCheck();
  }

  flipCard(): void {
    this.data.flipped = !this.data.flipped;
    this.cdr.markForCheck();
  }
}

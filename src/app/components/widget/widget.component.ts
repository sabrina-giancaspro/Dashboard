import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {
  @Input() data!: Widget;
  @Input() frontIcon: string = '';
  @Input() backIcon: string = '';

  showOptions = signal(false); 
  
  constructor(private cdr: ChangeDetectorRef) { }

  flipCard(): void {
    this.data.flipped = !this.data.flipped;
    this.cdr.markForCheck();
  }
}

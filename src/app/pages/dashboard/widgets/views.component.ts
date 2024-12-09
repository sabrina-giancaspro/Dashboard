import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Widget } from '../../../models/dashboard';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent {
  @Input() data!: Widget;
  @Input() frontIcon: string = '';
  @Input() backIcon: string = '';

  constructor(private cdr: ChangeDetectorRef) { }

  flipCard(): void {
    this.data.flipped = !this.data.flipped;
    this.cdr.markForCheck();
  }
}

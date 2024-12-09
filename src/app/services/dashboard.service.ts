import { Injectable, signal, computed } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers.component';
import { Widget } from '../models/dashboard';
import { ViewsComponent } from '../pages/dashboard/widgets/views.component';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      labelfront: 'Subscribers',
      labelback: 'ciao',
      content: SubscribersComponent,
      flipped: false,
      img: '/subscribers.png',
    },
    {
      id: 2,
      labelfront: 'Views',
      labelback: 'ciao',
      content: ViewsComponent,
      flipped: false,
      img: '/views.png'
    },
    {
      id: 3,
      labelfront: 'Views',
      labelback: 'ciao',
      content: ViewsComponent,
      flipped: false,
      img: '/views.png'
    },
    {
      id: 4,
      labelfront: 'Views',
      labelback: 'ciao',
      content: ViewsComponent,
      flipped: false,
      img: '/views.png'
    },
  ]);
  addedWidgets = signal<Widget[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });

  addWidgetToDashboard(widget: Widget) {
    this.addedWidgets.update(widgets => [...widgets, widget]);
  }

  constructor() { }
}

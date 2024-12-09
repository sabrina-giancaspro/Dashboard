import { Injectable, signal, computed } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers.component';
import { Widget } from '../models/dashboard';
import { ViewsComponent } from '../pages/dashboard/widgets/views.component';

@Injectable()
export class DashboardService {
  // Available widgets
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

  // Added widgets
  addedWidgets = signal<Widget[]>([]);

  // Widgets that can be added (not already added)
  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });

  // Method to add a widget to the dashboard
  addWidgetToDashboard(widget: Widget) {
    this.addedWidgets.update(widgets => [...widgets, widget]);
  }

  constructor() { }
}

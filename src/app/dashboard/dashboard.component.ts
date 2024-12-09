import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Widget } from '../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public showMenu: boolean = false;
  public widgetItems: Widget[] = [];
  public selectedWidget: Widget | null = null;
  
  public store: DashboardService;

  constructor(private dashboardService: DashboardService) {
    this.store = dashboardService;
    this.widgetItems = this.store.widgetsToAdd();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onWidgetSelect(widget: Widget) {
    this.store.addWidgetToDashboard(widget);
    this.showMenu = false;
  }

  public responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}

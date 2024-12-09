import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './components/widget/widget.component';
import { SubscribersComponent } from './pages/dashboard/widgets/subscribers.component';
import { ViewsComponent } from './pages/dashboard/widgets/views.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { CarouelComponent } from './carousel/carouel/carouel.component';
import { DashboardService } from './services/dashboard.service';
import { DialogModule } from 'primeng/dialog';  // Importa DialogModule


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent,
    SubscribersComponent,
    ViewsComponent,
    CarouelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ButtonModule,
    MenuModule,
    DropdownModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    CarouselModule,
    DialogModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

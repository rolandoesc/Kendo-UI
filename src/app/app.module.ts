import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelbarComponent } from './basics/panelbar/panelbar.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule, MenusModule } from '@progress/kendo-angular-menu';
import { MenuComponent } from './basics/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatesComponent } from './basics/dates/dates.component';



import '@progress/kendo-angular-intl/locales/es/all';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DropdownsComponent } from './intermediate/dropdowns/dropdowns.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DialogsComponent } from './intermediate/dialogs/dialogs.component';
import { FormComponent } from './intermediate/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChartsComponent } from './advanced/charts/charts.component';












@NgModule({
  declarations: [
    AppComponent,
    PanelbarComponent,
    MenuComponent,
    HomeComponent,
    DatesComponent,
    DropdownsComponent,
    DialogsComponent,
    FormComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MenuModule,
    MenusModule,
    DateInputsModule,
    NotificationModule,
    InputsModule,
    DropDownsModule,
    DialogsModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    HttpModule,
    ChartsModule,
    PDFModule,
    ExcelModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' }, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

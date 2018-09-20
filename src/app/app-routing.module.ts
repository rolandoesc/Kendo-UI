import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { PanelbarComponent } from './basics/panelbar/panelbar.component';
import { DatesComponent } from './basics/dates/dates.component';
import { DropdownsComponent } from './intermediate/dropdowns/dropdowns.component';
import { DialogsComponent } from './intermediate/dialogs/dialogs.component';
import { FormComponent } from './intermediate/form/form.component';
import { ChartsComponent } from './advanced/charts/charts.component';

const routes = [

  { path: '', component: HomeComponent, text: 'Home'},
  { path: 'panel', component: PanelbarComponent, text: 'Panelbar'},
  { path: 'dates', component: DatesComponent, text: 'Dates'},
  { path: 'dropdowns', component: DropdownsComponent, text: 'DropDowns'},
  { path: 'dialogs', component: DialogsComponent, text: 'Dialogs'},
  { path: 'form', component: FormComponent, text: 'Form'},
  { path: 'charts', component: ChartsComponent, text: 'Charts'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

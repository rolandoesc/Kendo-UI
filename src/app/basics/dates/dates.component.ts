import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { CalendarView } from '@progress/kendo-angular-dateinputs';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements AfterViewInit {
  @ViewChild('template', { read: TemplateRef })
    public notificationTemplate: TemplateRef<any>;
    public type: Type;
  public value: Date = new Date(2000, 2, 10);
  public range = { start: null, end: null };
  public events: string[] = [];

  constructor(private intl: IntlService, private notificationService: NotificationService) {
    this.showInfo();
  }

  ngAfterViewInit() {
    

  }


  public onActiveDateChange(value: Date): void {
    this.log('activeDateChange', value);
  }

  public onActiveViewChange(view: CalendarView): void {
    this.events = [`activeViewChanged: ${view}`].concat(this.events);
  }

  public onBlur(): void {
    this.log('blur');
  }

  public onFocus(): void {
    this.log('focus');
  }

  public onChange(value: Date): void {
    this.log('change', value);
  }


  private log(event: string, value?: Date): void {
    this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
  }

  private formatValue(value?: Date): string {
    return value ? ` - ${this.intl.formatDate(value, 'd')}` : '';
  }

  public showInfo(): void {
    this.notificationService.show({
        content: 'Switched to Dates Component',
        hideAfter: 2000,
        position: { horizontal: 'center', vertical: 'bottom' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'info', icon: true }
    });
}
}

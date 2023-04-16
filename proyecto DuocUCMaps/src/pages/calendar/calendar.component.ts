import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})

export class CalendarComponent{
 

  dateRange: { from: string; to: string;}
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  color: 'dark';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'dark',
    monthFormat: 'MMMM YYYY ',
    weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
    
  };
 

  constructor() { moment.locale('es-Cl')}
}
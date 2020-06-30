import { Component, Input } from '@angular/core';
import { Call } from 'src/app/interfaces/call.interface';

@Component({
  selector: 'app-calls-list-item',
  templateUrl: './calls-list-item.component.html',
  styleUrls: ['./calls-list-item.component.scss']
})
export class CallsListItemComponent {
  @Input() call: Call;

  constructor() { }
}

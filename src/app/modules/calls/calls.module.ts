import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsPageComponent } from './components/calls-page/calls-page.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { CallsListItemComponent } from './components/calls-list-item/calls-list-item.component';
import { DurationPipe } from './pipes/duration.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    CallsPageComponent,
    CallsListComponent,
    CallsListItemComponent,
    DurationPipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallsPageComponent
  ]
})
export class CallsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsPageComponent } from './components/calls-page/calls-page.component';
import { CallsListComponent } from './components/calls-list/calls-list.component';
import { CallsListItemComponent } from './components/calls-list-item/calls-list-item.component';
import { DurationPipe } from './pipes/duration.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { CallDetailsPageComponent } from './components/call-details-page/call-details-page.component';
import { CallDetailsComponent } from './components/call-details/call-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CallsPageComponent,
    CallsListComponent,
    CallsListItemComponent,
    DurationPipe,
    PhonePipe,
    CallDetailsPageComponent,
    CallDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CallsPageComponent,
    CallDetailsPageComponent
  ]
})
export class CallsModule { }

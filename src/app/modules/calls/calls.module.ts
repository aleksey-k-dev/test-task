import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsPageComponent } from './components/calls-page/calls-page.component';

@NgModule({
  declarations: [
    CallsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallsPageComponent
  ]
})
export class CallsModule { }

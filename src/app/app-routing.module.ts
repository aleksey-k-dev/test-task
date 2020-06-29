import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CallsPageComponent } from './modules/calls/components/calls-page/calls-page.component';

const routes: Routes = [{
    path: '',
    component: CallsPageComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: '**',
    redirectTo: '/'
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

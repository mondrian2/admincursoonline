import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestfierComponent} from './components/testfier/testfier.component';

const routes: Routes = [
  { path: 'test', component: TestfierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

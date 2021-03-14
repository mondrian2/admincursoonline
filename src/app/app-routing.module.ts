import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestfierComponent} from './components/testfier/testfier.component';
import {ExerciseCompleteComponent} from './components/exercise-complete/exercise-complete.component';
import {ExerciseAlternativeComponent} from './components/exercise-alternative/exercise-alternative.component';

const routes: Routes = [
  { path: 'test', component: TestfierComponent},
  { path: 'exercise-complete', component: ExerciseCompleteComponent},
  { path: 'exercise-alternative', component: ExerciseAlternativeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

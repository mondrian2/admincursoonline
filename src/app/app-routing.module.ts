import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExerciseListComponent} from './components/exercise/exercise-list/exercise-list.component';
import {ExerciseCreateComponent} from './components/exercise/exercise-create/exercise-create.component';
import {ExerciseEditComponent} from './components/exercise/exercise-edit/exercise-edit.component';
import {CompleteCreateComponent} from './components/itens/complete-create/complete-create.component';
import {CompleteListComponent} from './components/itens/complete-list/complete-list.component';
import {CompleteEditComponent} from './components/itens/complete-edit/complete-edit.component';

const routes: Routes = [
  { path: 'exercise-list', component: ExerciseListComponent},
  { path: 'exercise-create', component: ExerciseCreateComponent},
  { path: 'exercise-edit/:id', component: ExerciseEditComponent},
  { path: 'complete-list/:id', component: CompleteListComponent},
  { path: 'complete-create/:id', component: CompleteCreateComponent},
  { path: 'complete-edit/:id', component: CompleteEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

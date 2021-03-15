import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExerciseListComponent} from './components/exercise/exercise-list/exercise-list.component';
import {ExerciseCreateComponent} from './components/exercise/exercise-create/exercise-create.component';
import {ExerciseEditComponent} from './components/exercise/exercise-edit/exercise-edit.component';
import {ItemCompleteListComponent} from './components/item-complete/item-complete-list/item-complete-list.component';
import {ItemCompleteCreateComponent} from './components/item-complete/item-complete-create/item-complete-create.component';
import {ItemCompleteEditComponent} from './components/item-complete/item-complete-edit/item-complete-edit.component';

const routes: Routes = [
  { path: 'exercise-list', component: ExerciseListComponent},
  { path: 'exercise-create', component: ExerciseCreateComponent},
  { path: 'exercise-edit/:id', component: ExerciseEditComponent},
  { path: 'item-complete-list', component: ItemCompleteListComponent},
  { path: 'item-complete-create', component: ItemCompleteCreateComponent},
  { path: 'item-complete-edit/:id', component: ItemCompleteEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

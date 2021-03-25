import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseListComponent } from './components/exercise/exercise-list/exercise-list.component';
import { ExerciseEditComponent } from './components/exercise/exercise-edit/exercise-edit.component';
import { ExerciseCreateComponent } from './components/exercise/exercise-create/exercise-create.component';
import { TopComponent } from './components/shared/top/top.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';
import {CompleteListComponent} from './components/itens/complete-list/complete-list.component';
import {CompleteEditComponent} from './components/itens/complete-edit/complete-edit.component';
import {CompleteCreateComponent} from './components/itens/complete-create/complete-create.component';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseEditComponent,
    ExerciseCreateComponent,
    CompleteListComponent,
    CompleteEditComponent,
    CompleteCreateComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

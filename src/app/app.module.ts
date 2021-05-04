import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseListComponent } from './components/exercise/exercise-list/exercise-list.component';
import { ExerciseEditComponent } from './components/exercise/exercise-edit/exercise-edit.component';
import { ExerciseCreateComponent } from './components/exercise/exercise-create/exercise-create.component';
import { TopComponent } from './components/shared/top/top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CompleteListComponent } from './components/itens/type-complete/complete-list/complete-list.component';
import { CompleteEditComponent } from './components/itens/type-complete/complete-edit/complete-edit.component';
import { CompleteCreateComponent } from './components/itens/type-complete/complete-create/complete-create.component';
import { AnswerCreateComponent } from './components/itens/answer/answer-create/answer-create.component';
import { AnswerEditComponent } from './components/itens/answer/answer-edit/answer-edit.component';
import { AnswerListComponent } from './components/itens/answer/answer-list/answer-list.component';
import { AlternativeCreateComponent } from './components/itens/alternative/alternative-create/alternative-create.component';
import { AlternativeEditComponent } from './components/itens/alternative/alternative-edit/alternative-edit.component';
import { AlternativeListComponent } from './components/itens/alternative/alternative-list/alternative-list.component';

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
    AnswerCreateComponent,
    AnswerEditComponent,
    AnswerListComponent,
    AlternativeCreateComponent,
    AlternativeEditComponent,
    AlternativeListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

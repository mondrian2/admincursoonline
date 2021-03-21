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


@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseEditComponent,
    ExerciseCreateComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

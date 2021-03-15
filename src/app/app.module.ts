import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseListComponent } from './components/exercise/exercise-list/exercise-list.component';
import { ExerciseEditComponent } from './components/exercise/exercise-edit/exercise-edit.component';
import { ExerciseCreateComponent } from './components/exercise/exercise-create/exercise-create.component';
import { ItemCompleteEditComponent } from './components/item-complete/item-complete-edit/item-complete-edit.component';
import { ItemCompleteCreateComponent } from './components/item-complete/item-complete-create/item-complete-create.component';
import { ItemCompleteListComponent } from './components/item-complete/item-complete-list/item-complete-list.component';
import { ItemAlternativeListComponent } from './components/item-alternative/item-alternative-list/item-alternative-list.component';
import { ItemAlternativeEditComponent } from './components/item-alternative/item-alternative-edit/item-alternative-edit.component';
import { ItemAlternativeCreateComponent } from './components/item-alternative/item-alternative-create/item-alternative-create.component';
import { TopComponent } from './components/shared/top/top.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseEditComponent,
    ExerciseCreateComponent,
    ItemCompleteEditComponent,
    ItemCompleteCreateComponent,
    ItemCompleteListComponent,
    ItemAlternativeListComponent,
    ItemAlternativeEditComponent,
    ItemAlternativeCreateComponent,
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

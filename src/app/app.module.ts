import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TestfierComponent } from './components/testfier/testfier.component';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseAlternativeComponent } from './components/exercise-alternative/exercise-alternative.component';
import { ExerciseCompleteComponent } from './components/exercise-complete/exercise-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TestfierComponent,
    ExerciseAlternativeComponent,
    ExerciseCompleteComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

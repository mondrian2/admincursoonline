import { Component, OnInit } from '@angular/core';
import {Exercise} from '../../../model/exercise';
import {ExerciseService} from '../../../services/exercise.service';

import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.scss']
})
export class ExerciseCreateComponent implements OnInit {
  public exercise: Exercise;
  public form: FormGroup;
  constructor(private srv: ExerciseService, private route: Router) { }

  private createForm(exercise: Exercise): void{
    console.log(exercise);
    this.form = new FormGroup({
      package: new FormControl(exercise.package),
      command: new FormControl(exercise.command),
      commandtwo: new FormControl(exercise.commandtwo),
      book: new FormControl(exercise.book),
      number: new FormControl(exercise.number),
      type: new FormControl(exercise.type)
    });
  }

  add(): void {
    this.srv.post(this.form.value)
      .subscribe(
        () => this.route.navigate(['exercise-list']),
        e => console.log(e),
        () => console.log('complete')
      );
  }

  ngOnInit(): void {
    this.createForm(new Exercise());
  }
}

import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../model/exercise';
import { ExerciseService } from '../../../services/exercise.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.scss'],
})
export class ExerciseCreateComponent implements OnInit {
  public exercise: Exercise;
  public form: FormGroup;
  constructor(private srv: ExerciseService, private route: Router) {}

  private createForm(exercise: Exercise): void {
    console.log(exercise);
    this.form = new FormGroup({
      level: new FormControl(exercise.level),
      package: new FormControl(exercise.package),
      number: new FormControl(exercise.number),
      type: new FormControl(exercise.type),
      instruction: new FormControl(exercise.instruction),
    });
  }

  add(): void {
    this.srv.post(this.form.value).subscribe(
      () => this.route.navigate(['exercise-list']),
      (e) => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.createForm(new Exercise());
  }
}

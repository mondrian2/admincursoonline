import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../model/exercise';
import { ExerciseService } from '../../../services/exercise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss'],
})
export class ExerciseEditComponent implements OnInit {
  public exercise: Exercise;
  public form: FormGroup;
  constructor(
    private srv: ExerciseService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  public update(): void {
    console.log(this.form.value.id);
    this.srv.put(this.form.value.id, this.form.value).subscribe(
      () => this.route.navigate(['exercise-list']),
      (e) => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.srv
      .search(this.activeRoute.snapshot.paramMap.get('id'))
      .subscribe((exercise) => {
        this.form = new FormGroup({
          id: new FormControl(exercise.id),
          level: new FormControl(exercise.level),
          package: new FormControl(exercise.package),
          number: new FormControl(exercise.number),
          type: new FormControl(exercise.type),
          instruction: new FormControl(exercise.instruction),
        });
      });
  }
}

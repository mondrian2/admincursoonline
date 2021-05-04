import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../../../../model/exercise';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExerciseService } from '../../../../services/exercise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternative } from 'src/app/model/alternative';
import { AlternativeService } from 'src/app/services/alternative.service';

@Component({
  selector: 'app-alternative-edit',
  templateUrl: './alternative-edit.component.html',
  styleUrls: ['./alternative-edit.component.scss'],
})
export class AlternativeEditComponent implements OnInit {
  public exercise$: Observable<Exercise>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private srvEx: ExerciseService,
    protected srv: AlternativeService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  private createForm(alternative: Alternative): void {
    console.log(alternative);
    this.form = this.formBuilder.group({
      id: alternative.id,
      exerciseId: alternative.exerciseId,
      description: alternative.description,
      alternativeType: alternative.alternativeType,
    });
  }

  public loadExercise(): void {
    this.exercise$ = this.srvEx.get();
  }

  update(): void {
    console.log(this.form.value);
    this.srv.put(this.form.value.id, this.form.value).subscribe(
      () =>
        this.route.navigate(['alternative-list', this.form.value.exerciseId]),
      (e) => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.loadExercise();
    this.srv
      .search(this.activeRoute.snapshot.paramMap.get('id'))
      .subscribe((alternative) => this.createForm(alternative));
  }
}
